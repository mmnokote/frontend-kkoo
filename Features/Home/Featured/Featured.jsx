import { Box, Heading, Tag, TagLabel } from '@chakra-ui/react';

const Featured = ({ featured }) => {
  return (
    <>
      <Box
        marginTop="1rem"
        borderRadius={{ base: 'none', lg: 'xl' }}
        display="flex"
        alignItems={{ base: 'flex-start', lg: 'flex-end' }}
        marginX={{ base: '0rem', lg: '0px' }}
        maxHeight="510px"
        width={{ base: '100vw', lg: '80vw' }}
        position="relative"
        backgroundSize="cover"
        color="white"
        backgroundImage={featured.attributes.image.data.attributes.url}
      >
        <Box
          position="absolute"
          borderRadius={{ base: 'none', lg: 'xl' }}
          width="100%"
          height="100%"
          top="0"
          left="0"
          bottom="0"
          right="0"
          zIndex="1"
          bgGradient="linear(to-t, blackAlpha.600, transparent)"
        />
        {/* <Box position="absolute" left="0.5rem" top="0.5rem">
          {featured.tags.map((item) => (
            <Tag
              key={item}
              size="md"
              marginLeft="0.5rem"
              colorScheme="blue"
              borderRadius="full"
            >
              <TagLabel>{item}</TagLabel>
            </Tag>
          ))}
        </Box> */}
        <Box zIndex={3} paddingX="2rem" marginBottom="2rem">
          <Heading size="md" fontWeight="medium" noOfLines={2}>
          {featured.attributes.title}
          </Heading>
        </Box>
      </Box>
    </>
  );
};

export default Featured;
