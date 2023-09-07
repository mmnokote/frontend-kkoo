import { articleReducer } from '@/Features/lib/reducers';
import {
  Box,
  Card,
  CardBody,
  Flex,
  Image,
  Img,
  Link,
  Tag,
  TagLabel,
  Text,
} from '@chakra-ui/react';
import TimeAgo from 'timeago-react';

export const Article = ({ article }) => {
  const item = articleReducer(article);
  return (
    <Card
      maxHeight="450px"
      width={{ base: '100%', md: '330px' }}
      marginBottom="3rem"
      shadow="none"
    >
      <CardBody padding={4}>
        <Link href={`articles/${item.id}`} _hover={{ textDecor: 'none' }}>
          <Box display="relative">
            <Flex flexDirection="column" gap="1rem">
              <Box position="relative" height="200px">
                <Img
                  borderRadius="md"
                  src={`${item.imageUrl.url}`}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  transition="0.3s ease-in-out"
                  transform="scale(1.0)"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
                <Box position="absolute" left="0.5rem" bottom="0.5rem">
                  {item.tags &&
                    item.tags.map((tag, index) => (
                      <Tag
                        key={index}
                        size="sm"
                        marginRight={2}
                        colorScheme="blue"
                        borderRadius="full"
                      >
                        <TagLabel>{tag}</TagLabel>
                      </Tag>
                    ))}
                </Box>
              </Box>
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={3}
              >
                {item.title}
              </Box>
              <Box
                paddingX={2}
                paddingTop="2rem"
                paddingBottom="1rem"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                flexDirection="row"
                color="blackAlpha.600"
                fontSize="sm"
                fontWeight="medium"
              >
                <Text color="blue.500">{item.createdBy.email}</Text>
                <TimeAgo datetime={item.createdAt} locale="TZ" />
              </Box>
            </Flex>
          </Box>
        </Link>
      </CardBody>
    </Card>
  );
};
