import {
  Box,
  Center,
  Grid,
  GridItem,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsWhatsapp,
  BsYoutube,
} from 'react-icons/bs';
const Social = () => {
  const bg = useColorModeValue('whiteAlpha.500', 'gray.800');
  return (
    <>
      <Box
        backgroundColor={bg}
        width="auto"
        padding="1rem"
        borderTopRightRadius="3xl"
        borderTopLeftRadius="3xl"
      >
        <Grid templateColumns="repeat(5, 1fr)" gap={5}>
          <GridItem>
            <Center
              w="10"
              h="10"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              color="white"
              borderRadius="lg"
            >
              <BsInstagram size={25} />
            </Center>
          </GridItem>
          <GridItem>
            <Center
              w="10"
              h="10"
              backgroundColor="teal.500"
              color="white"
              borderRadius="lg"
            >
              <BsWhatsapp size={25} />
            </Center>
          </GridItem>
          <GridItem>
            <Center
              w="10"
              h="10"
              color="white"
              backgroundColor="#4267B2"
              borderRadius="lg"
            >
              <BsFacebook size={25} />
            </Center>
          </GridItem>
          <GridItem>
            <Center
              w="10"
              h="10"
              backgroundColor="red.500"
              color="white"
              borderRadius="lg"
            >
              <BsYoutube size={25} />
            </Center>
          </GridItem>
          <GridItem>
            <Center
              w="10"
              h="10"
              backgroundColor="#00acee"
              color="white"
              borderRadius="lg"
            >
              <BsTwitter size={25} />
            </Center>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Social;
