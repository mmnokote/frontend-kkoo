import {
  Box,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { RxCalendar } from 'react-icons/rx';

const Event = ({ event }) => {
  const bg = useColorModeValue('white', 'gray.700');
  return (
    <LinkBox
      backgroundColor={bg}
      as="article"
      maxW="max-content"
      p="5"
      marginBottom="1rem"
      rounded="md"
    >
      <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
      {event.attributes.createdAt}
      </Box>

      <Flex alignItems="flex-start" justifyContent="flex-start" gap={5} my="2">
        <RxCalendar size={60} />
        <Heading size="md">{event.attributes.title}</Heading>
      </Flex>
      <Text noOfLines={3} mb="3">
      {event.attributes.content}
      </Text>
      <Box color="blue.400">
        <Heading size="sm">
          <LinkOverlay href="#">Read More</LinkOverlay>
        </Heading>
      </Box>
    </LinkBox>
  );
};

export default Event;
