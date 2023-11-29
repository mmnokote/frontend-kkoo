import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsHeadset } from 'react-icons/bs';
import { useTranslation } from 'next-i18next';

// function Callcenter({item}) {
  const Callcenter = ({ callcenters }) => {
  const { t } = useTranslation();
  const bg = useColorModeValue('blue.500', 'blue.600');
  return (
    <Box
      backgroundColor={bg}
      backgroundImage={callcenters?.attributes.image.data.attributes.url}
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
      backgroundPosition="center right"
    >
      <Box maxWidth="1440px" margin="0 auto">
        <Box
          height="300px"
          marginX={{ base: '0', md: '0' }}
          position="relative"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          borderRadius="lg"
        >
          <Box marginLeft="2rem" color="white">
            <Box>
              <Heading mb={5}> {callcenters?.attributes.title}</Heading>
              <Text fontSize="xl">{callcenters?.attributes.subtitle}</Text>
            </Box>
            <Stack direction="row" spacing={4} align="center" marginTop="2rem">
              <Button
                _hover={{ color: 'blue.500' }}
                leftIcon={<BsHeadset />}
                backgroundColor="blue.900"
                variant="solid"
                size="lg"
              >
                {callcenters?.attributes.phone}
              </Button>
              <Button
                _hover={{ color: 'blue.800' }}
                leftIcon={<BsHeadset />}
                color="white"
                variant="outline"
                size="lg"
              >
               {callcenters?.attributes.phone2}
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Callcenter;
