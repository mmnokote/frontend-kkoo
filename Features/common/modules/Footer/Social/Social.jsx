import {
  Box,
  Center,
  Grid,
  GridItem,
  Link,
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
  const phoneNumber = '+255735160210';

  return (
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
            <Link href="https://www.instagram.com/ortamisemi/ " target="_blank" rel="noopener noreferrer">
              <BsInstagram size={25} />
            </Link>
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
            <Link
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsWhatsapp size={25} />
            </Link>
          </Center>
        </GridItem>
        {/* ... (other social media links) */}
        <GridItem>
          <Center
            w="10"
            h="10"
            color="white"
            backgroundColor="#4267B2"
            borderRadius="lg"
          >
            <Link href="https://www.facebook.com/TAMISEMI" target="_blank" rel="noopener noreferrer">
              <BsFacebook size={25} />
            </Link>
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
            <Link href="https://www.youtube.com/@ortamisemi" target="_blank" rel="noopener noreferrer">
              <BsYoutube size={25} />
            </Link>
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
            <Link href="https://twitter.com/ortamisemitz" target="_blank" rel="noopener noreferrer">
              <BsTwitter size={25} />
            </Link>
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Social;
