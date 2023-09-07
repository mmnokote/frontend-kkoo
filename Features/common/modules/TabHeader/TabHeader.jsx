import { Tab } from '@chakra-ui/react';

const TabHeader = ({ title }) => {
  return (
    <Tab
      _selected={{
        color: 'white',
        bg: 'blue.500',
        fontWeight: 'bold',
      }}
    >
      {title}
    </Tab>
  );
};

export default TabHeader;
