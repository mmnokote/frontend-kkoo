'use client';

import { cn } from '../lib/utils';
import { useContext } from 'react';
import MarkdownLite from './MarkdownLite';
import { MessagesContext } from '../Contexts/messages';

const ChatMessages = ({ className, ...props }) => {
  const { messages } = useContext(MessagesContext);
  const inverseMessages = [...messages].reverse();

  return (
    <div
      {...props}
      className={cn(
        'flex flex-col-reverse gap-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch',
        className
      )}
    >
      <div className="flex-1 flex-grow" />
      {inverseMessages.map((message) => {
        return (
          <div className="chat-message" key={`${message.id}-${message.id}`}>
            <div
              className={cn('flex items-end', {
                'justify-end': message.isUserMessage,
              })}
            >
              <div
                className={cn(
                  'flex flex-col space-y-2 text-sm max-w-md mx-2 overflow-x-hidden',
                  {
                    'order-1 items-end': message.isUserMessage,
                    'order-2 items-start': !message.isUserMessage,
                  }
                )}
              >
                <div
                  className={cn('relative px-5 py-4 rounded-lg', {
                    'bg-blue-400 text-white mr-4': message.isUserMessage,
                    'bg-gray-300 text-gray-900 ml-3': !message.isUserMessage,
                  })}
                >
                  <div
                    className={cn('absolute transform  w-5 h-5', {
                      'rotate-45 -translate-x-1/2 top-3  -right-4  bg-blue-400':
                        message.isUserMessage,
                      'rotate-45 translate-x-1/2 top-2  -left-4  bg-gray-300':
                        !message.isUserMessage,
                    })}
                  ></div>
                  <MarkdownLite text={message.text} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatMessages;
