import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      maxWidth={'40vw'}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar size={'md'} src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles({ testimonies }) {
  const { t } = useTranslation('');
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'1440px'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>{t('sections.testimony.heading')}</Heading>
          <Text mt={4} fontSize={'md'}>
            {t('sections.testimony.description')}
          </Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          {testimonies &&
            testimonies.map((item, index) => (
              <Testimonial key={index}>
                <TestimonialContent>
                  <TestimonialHeading>
                    {item.attributes.title}
                  </TestimonialHeading>
                  <TestimonialText>
                    {item.attributes.description}
                  </TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar
                  src={`http://127.0.0.1:1337${item.attributes.photo.data.attributes.url}`}
                  name={item.attributes.fullname}
                  title={item.attributes.company}
                />
              </Testimonial>
            ))}
        </Stack>
      </Container>
    </Box>
  );
}
