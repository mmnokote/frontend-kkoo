'use client';
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Heading,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import React, { useContext, useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { MessagesContext } from '../Contexts/messages';
import ChatMessages from './ChatMessages';

const Chat = () => {
  const textareaRef = useRef();
  const [input, setInput] = useState('');
  const {
    messages,
    addMessage,
    removeMessage,
    updateMessage,
    setIsMessageUpdating,
  } = useContext(MessagesContext);

  const inverseMessages = [...messages].reverse();

  const { mutate: sendMessage, isLoading } = useMutation({
    mutationKey: ['sendMessage'],
    mutationFn: async (_message) => {
      const response = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages }),
      });

      return response.body;
    },
    onMutate(message) {
      addMessage(message);
    },
    onSuccess: async (stream) => {
      if (!stream) throw new Error('No stream');

      const id = nanoid();
      const responseMessage = {
        id,
        isUserMessage: false,
        text: '',
      };
      addMessage(responseMessage);
      setIsMessageUpdating(true);
      const reader = stream.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);
        updateMessage(id, (prev) => prev + chunkValue);
      }

      // clean up
      setIsMessageUpdating(false);
      setInput('');

      setTimeout(() => {
        textareaRef.current?.focus();
      }, 10);
    },
    onError: (_, message) => {
      toast.error('Something went wrong. Please try again.');
      removeMessage(message.id);
      textareaRef.current?.focus();
    },
  });
  return (
    <Box
      position={'fixed'}
      zIndex={1000}
      backgroundColor={'blue.400'}
      bottom={10}
      right={10}
      width={'30vw'}
      shadow={'4xl'}
      borderRadius={'xl'}
    >
      <Accordion allowToggle border={'none'}>
        <AccordionItem border={'none'}>
          <AccordionButton
            paddingX={6}
            paddingY={3}
            color={'white'}
            _expanded={{
              bg: 'blue.600',
              color: 'white',
              borderTopLeftRadius: 'xl',
              borderTopRightRadius: 'xl',
            }}
          >
            <Box as="span" fontWeight={'bold'} flex="1" textAlign="left">
              <Heading fontSize={'lg'}>Chat With</Heading>
              <Text mt={1} fontSize={'md'}>
                Tamisemi Chatbot.
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel px={6} fontSize={'md'} color={'white'}>
            <Box maxH={200} overflow={'scroll'}>
              <ChatMessages />
            </Box>
            <Box marginTop={10}>
              <Textarea
                bg={'white'}
                color={'gray.600'}
                rows={2}
                size={'md'}
                ref={textareaRef}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    const message = {
                      id: nanoid(),
                      isUserMessage: true,
                      text: input,
                    };
                    sendMessage(message);
                  }
                }}
                value={input}
                autoFocus
                disabled={isLoading}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Write your Question or Message ..."
              />
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Chat;
