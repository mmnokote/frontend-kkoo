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

function Callcenter() {
  const { t } = useTranslation();
  const bg = useColorModeValue('blue.500', 'blue.600');
  return (
    <Box
      backgroundColor={bg}
      backgroundImage={{ base: 'none', md: '/images/callcenter.png' }}
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
              <Heading mb={5}>{t('sections.call center.title')}</Heading>
              <Text fontSize="xl">{t('sections.call center.description')}</Text>
            </Box>
            <Stack direction="row" spacing={4} align="center" marginTop="2rem">
              <Button
                _hover={{ color: 'blue.500' }}
                leftIcon={<BsHeadset />}
                backgroundColor="blue.900"
                variant="solid"
                size="lg"
              >
                +255 478 210
              </Button>
              <Button
                _hover={{ color: 'blue.800' }}
                leftIcon={<BsHeadset />}
                color="white"
                variant="outline"
                size="lg"
              >
                +255 478 210
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Callcenter;
