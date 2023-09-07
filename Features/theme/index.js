import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  colors: {
    primary: {
      dark: '#003100',
      light: '#e6f6e6',
    },
    secondary: '#009400',
    text: {
      dark: '#000',
      light: '#fff',
    },
    icon: '#ffd700',
  },
};

const customTheme = extendTheme(config);

export default customTheme;
