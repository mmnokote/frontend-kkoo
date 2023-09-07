import {
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <IconButton
        variant="ghost"
        size="sm"
        p={0}
        aria-label="Toggle color mode"
        onClick={toggleColorMode}
        color={useColorModeValue('gray.500', 'blue.400')}
        icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
      />
    </Box>
  );
};

export default ThemeSwitch;
