import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import React from 'react';
import { useTranslation } from 'next-i18next';

const Leadership = ({ leadership }) => {
  return (
    <>
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row', lg: 'column' }}
        alignItems="center"
        justifyContent="space-between"
        gap="1rem"
        marginTop="1rem"
      >
        {leadership.map((item, index) => (
          <Leader key={index} leader={item} {...item} />
        ))}
      </Box>
    </>
  );
};

export default Leadership;

export const Leader = ({ leader }) => {
  const [element, setElement] = React.useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();

  const handleDeputies = (leader) => {
    setElement(leader);
    onOpen();
  };

  return (
    <>
      <Card
        maxWidth={'45vw'}
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant={{ base: 'elevated', md: 'outline', lg: 'outline' }}
      >
        <Image
          objectFit="contain"
          maxW={{ base: '100%', sm: '200px' }}
          src={leader.attributes.image.data.attributes?.url}
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">{leader.attributes.name}</Heading>
            <Text noOfLines={3}>{leader.attributes.description}</Text>
          </CardBody>

          <CardFooter display={'flex'} justifyContent={'flex-end'}>
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={() => handleDeputies(leader)}
            >
              {t(`sections.leadership.${leader.attributes.label}`)}
            </Button>
          </CardFooter>
        </Stack>
      </Card>

      <Drawer onClose={onClose} isOpen={isOpen} size="md" placement="center">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody padding="2rem">
            <Box>
              {/* <Image
                h={{ base: '50%', sm: '150px', lg: '160px' }}
                w={{ base: '50%', sm: '150px', lg: '160px' }}
                src={element.?.attributes.imageUrl}
                alt={element?.name}
                borderRadius="full"
              /> */}
              <Box my={5}>
                <Heading size="md" color="blue.500">
                  {element?.attributes.name}
                </Heading>
                <Heading mt={2} size="sm">
                  {element?.attributes.title}
                </Heading>
                <Text py="5">{element?.description}</Text>
              </Box>
            </Box>
            <Box marginY="2rem">
              <Heading size="md">{element?.attributes.heading}</Heading>
            </Box>
            <Box>
              {element?.attributes.profiles.data.map((item, index) => (
                <Box key={index}>
                  <Box
                    display="flex"
                    flexDirection={{ base: 'row', md: 'row', lg: 'row' }}
                    gap={5}
                    alignItems="center"
                  >
                    <Image
                      h={{
                        base: '20%',
                        sm: '100px',
                        lg: '100px',
                        md: '100px',
                      }}
                      w={{
                        base: '20%',
                        sm: '100px',
                        lg: '100px',
                        md: '100px',
                      }}
                      src={item?.attributes.image.data.attributes.url}
                      alt={item?.name}
                      objectFit="cover"
                      borderRadius="full"
                    />
                    <Box>
                      <Heading size="md" color="blue.500">
                        {item?.attributes.name}
                      </Heading>
                      <Heading mt={2} size="sm">
                        {item.attributes.title}
                      </Heading>
                    </Box>
                  </Box>
                  <Box>
                    <Text py="5">{item?.attributes.description}</Text>
                  </Box>
                </Box>
              ))}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
