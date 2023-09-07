import { ChevronDownIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useTranslation } from 'next-i18next';
import { ImArrowRight2 } from 'react-icons/im';

import {
  Box,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

const Desktop = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box maxWidth="1440px" margin="0 auto">
      <Flex
        bg={useColorModeValue('blue.500', 'gray.700')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Flex display={{ base: 'none', md: 'flex' }}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};
export default Desktop;

const DesktopNav = () => {
  const linkColor = useColorModeValue('white', 'blue.500');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.600');
  const { t } = useTranslation('');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((item) => (
        <Box key={item.label}>
          <Popover trigger={'hover'} placement={'bottom-start'} arrowSize={20}>
            <PopoverTrigger mb="3rem">
              <Link
                p={2}
                href={item.href ?? '#'}
                fontSize={'lg'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {item.label}
              </Link>
            </PopoverTrigger>

            {item.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <PopoverArrow bg={popoverContentBgColor} />
                <PopoverBody>
                  <Stack>
                    {item.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverBody>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      py={2}
      px={3}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('blue.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            fontSize={'lg'}
            transition={'all .3s ease'}
            _groupHover={{ color: useColorModeValue('blue.500', 'blue.100') }}
            fontWeight={600}
          >
            {label}
          </Text>
          <Text
            mt={1}
            fontSize={'md'}
            color={useColorModeValue('gray.600', 'blue.100')}
          >
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'blue.400'} size={30} as={ImArrowRight2} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Box
      position="fixed"
      zIndex={5}
      bg={useColorModeValue('white', 'gray.800')}
    >
      <Stack p={4} display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    </Box>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
    hasChildren: false,
  },
  {
    label: 'Contact Us',
    href: '/contacts',
    hasChildren: false,
  },
  {
    label: 'About Us',
    hasChildren: true,
    children: [
      {
        label: 'Our History',
        subLabel: 'Discover our History, learn what we do',
        href: '/about/our-history',
      },
      {
        label: 'Mission and Vision',
        subLabel: 'Our vision and mission in serving our people',
        href: '/about/mission-and-vision',
      },
      {
        label: 'What we Do',
        subLabel: 'PORALG primary objectives and miscellaneous',
        href: '/about/what-we-do',
      },
      {
        label: 'Customer care Agreement',
        subLabel: 'Understanding the value of our people by serving them well',
        href: '/about/customer-care-agreement',
      },
    ],
  },
  {
    label: 'Administration',
    hasChildren: true,
    children: [
      {
        label: 'Organization Structure',
        subLabel: 'Learn PORALG organization structure ',
        href: '#',
      },
      {
        label: 'Departments & Units',
        subLabel: 'What Departments and Units supporting PORALG',
        href: '#',
      },
      {
        label: 'Our Institutions',
        subLabel: 'Institutions operating under PORALG',
        href: '#',
      },
      {
        label: 'Roles & Responsibilities',
        subLabel: 'Roles, Objectives of various Departments and Units',
        href: '#',
      },
    ],
  },

  {
    label: 'Projects & Programs',
    hasChildren: true,
    href: '/projects',
    children: [
      {
        label: 'Education',
        subLabel: 'Find all projects and programs related to Education',
        href: '/projects/education-projects',
      },
      {
        label: 'Water Projects',
        subLabel: 'Water and sanitation Projects across Local Authoroties',
        href: '/projects/water-projects',
      },
      {
        label: 'Development Projects',
        subLabel: 'An list of various sectoral development projects',
        href: '/projects/development-projects',
      },
    ],
  },
  {
    label: 'Media Center',
    hasChildren: true,
    children: [
      {
        label: 'News & Events',
        subLabel: 'All news and Events at PORALG ',
        href: '#',
      },
      {
        label: 'Photo Gallery',
        subLabel: 'What is happening at PORALG in Photos',
        href: '#',
      },
      {
        label: 'Public Notices',
        subLabel: 'Get all public notices and advertisements',
        href: '#',
      },
    ],
  },
  {
    label: 'Villages & Towns',
    href: '#',
    hasChildren: false,
  },
  {
    label: 'Document Center',
    hasChildren: true,
    children: [
      {
        label: 'Education Documents',
        subLabel: 'Read and Download Documents related to Education',
        href: '#',
      },
      {
        label: 'Health Documents',
        subLabel: 'Read and Download documents related to Health',
        href: '#',
      },
      {
        label: 'Building Plans',
        subLabel: 'Various building plans schematics',
        href: '#',
      },
    ],
  },
  {
    label: 'Dashboards',
    href: '/dashboards',
    hasChildren: false,
    children: [
      {
        label: 'Administrative',
        subLabel: "Administrative Dashboard at President's Office",
        href: '/dashboards/administration',
      },
      {
        label: 'Revenue Collection',
        subLabel: 'Revenue sources and collections',
        href: '/dashboards/revenue-collection',
      },
      {
        label: 'Performance',
        subLabel: "Performance Dashboard at President's Office",
        href: '/dashboards/performance',
      },
    ],
  },
  {
    label: 'Blog',
    href: '/blog',
    hasChildren: false,
  },
];
