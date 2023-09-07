import React from 'react';
import {
  Text,
  Heading,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';

const PageHeading = ({ title, subtitle }) => {
  const bg = useColorModeValue('blue.600', 'red.500');
  return (
    <div>
      <Heading fontSize={{ base: 'xl', md: 'xl', lg: '2xl' }}>
        <Text
          color={'blue.500'}
          fontWeight={'extrabold'}
          as={'span'}
          fontSize={'3xl'}
          position={'relative'}
          _after={{
            content: "''",
            width: 'full',
            height: useBreakpointValue({ base: '20%', md: '25%' }),
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 15,
            bg: { bg },
            zIndex: -1,
          }}
        >
          {title}
        </Text>
        <br />{' '}
        <Text fontSize="lg" color={'gray.400'} as={'span'}>
          {subtitle}
        </Text>{' '}
      </Heading>
    </div>
  );
};

export default PageHeading;
