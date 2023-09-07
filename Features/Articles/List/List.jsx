import {
  Box,
  Card,
  CardBody,
  Image,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';

import { StarIcon } from '@chakra-ui/icons';
import { articleReducer } from '@/Features/lib/reducers';

export const List = ({ article }) => {
  const item = articleReducer(article);
  return (
    <LinkBox>
      <Card
        maxWidth={{ base: '100%', md: '280px', lg: '280px' }}
        maxHeight="340px"
        borderWidth="0px"
        borderRadius="none"
        overflow="hidden"
        marginBottom="0.5rem"
        shadow="lg"
      >
        <LinkOverlay href={`/articles/${item.id}`}>
          <CardBody padding="0px">
            <Box width="100%" height="180px" position="relative">
              <Image
                src={`${item.imageUrl.url}`}
                alt={item.title}
                height="100%"
                width="100%"
                objectFit="cover"
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
                {item.title}
              </Box>

              <Box as="span" color="gray.600" fontSize="sm">
                {item.createdBy.email}
              </Box>

              <Box display="flex" mt="2" alignItems="center">
                {Array(5)
                  .fill('')
                  .map((_, i) => (
                    <StarIcon
                      marginLeft="1px"
                      key={i}
                      color={i < item.reviews ? 'blue.500' : 'gray.300'}
                    />
                  ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  {item.reviewCount} reviews
                </Box>
              </Box>
            </Box>
          </CardBody>
        </LinkOverlay>
      </Card>
    </LinkBox>
  );
};

export default List;
