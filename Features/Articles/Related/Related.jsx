import { Box, Image, Card, CardBody } from '@chakra-ui/react';

import { StarIcon } from '@chakra-ui/icons';

export const Related = ({ related }) => {
  return (
    <Card
      maxWidth={{ base: '100%', md: '280px', lg: '280px' }}
      maxHeight="340px"
      borderWidth="0"
      borderRadius="lg"
      overflow="hidden"
      marginBottom="3rem"
    >
      <Box width="100%" height="180px" position="relative">
        <Image
          src={related.imageUrl}
          alt={related.heading}
          height="100%"
          width="100%"
          objectFit="cover"
          transition="0.3s ease-in-out"
          transform="scale(1.0)"
          _hover={{
            transform: 'scale(1.05)',
          }}
        />
      </Box>
      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={2}
        >
          {related.heading}
        </Box>

        <Box as="span" color="gray.600" fontSize="sm">
          {related.author}
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                marginLeft="1px"
                key={i}
                color={i < related.reviews ? 'blue.500' : 'gray.300'}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {related.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default Related;
