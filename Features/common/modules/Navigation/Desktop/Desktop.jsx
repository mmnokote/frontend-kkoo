import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useTranslation } from "next-i18next";
import { ImArrowRight2 } from "react-icons/im";
import { useEffect, useState } from "react";
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
} from "@chakra-ui/react";

const Desktop = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    // Fetch NAV_ITEMS from your API
    // fetch(`http://127.0.0.1:1337/api/menus?populate=*&filters[IsTopMenu][$eq]=true`)
    fetch(
      `http://172.16.18.130:8080/api/menus?populate=*&filters[IsTopMenu][$eq]=true`
    )
      .then((response) => response.json())
      .then((data) => {
        // Sort the data based on the 'order' field
        const sortedNavItems = data.data.sort(
          (a, b) => a.attributes.order - b.attributes.order
        );
        setNavItems(sortedNavItems);
      })
      .catch((error) => console.error("Error fetching NAV_ITEMS:", error));
  }, []);

  return (
    <Box maxWidth="1440px" margin="0 auto">
      <Flex
        bg={useColorModeValue("blue.500", "gray.700")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Flex display={{ base: "none", md: "flex" }}>
            <DesktopNav navItems={navItems} />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav navItems={navItems} />
      </Collapse>
    </Box>
  );
};

export default Desktop;

const DesktopNav = ({ navItems }) => {
  const linkColor = useColorModeValue("white", "blue.500");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.600");
  const { t } = useTranslation("");

  return (
    <Stack direction={"row"} spacing={4}>
      {navItems.map((item) => (
        <Box key={item.attributes.name}>
          <Popover trigger={"hover"} placement={"bottom-start"} arrowSize={20}>
            <PopoverTrigger mb="3rem">
              <Link
                p={2}
                href={item.attributes.href ?? "#"}
                fontSize={"lg"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {item.attributes.name}
              </Link>
            </PopoverTrigger>

            {item.attributes.menus.data.length > 0 && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <PopoverArrow bg={popoverContentBgColor} />
                <PopoverBody>
                  <Stack>
                    {item.attributes.menus.data.map((child) => (
                      <DesktopSubNav
                        key={child.attributes.name}
                        {...child.attributes}
                      />
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

const DesktopSubNav = ({ name, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      py={2}
      px={3}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("blue.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            fontSize={"lg"}
            transition={"all .3s ease"}
            _groupHover={{ color: useColorModeValue("blue.500", "blue.100") }}
            fontWeight={600}
          >
            {name}
          </Text>
          <Text
            mt={1}
            fontSize={"md"}
            color={useColorModeValue("gray.600", "blue.100")}
          >
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"blue.400"} size={30} as={ImArrowRight2} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = ({ navItems }) => {
  return (
    <Box
      position="fixed"
      zIndex={5}
      bg={useColorModeValue("white", "gray.800")}
    >
      <Stack p={4} display={{ md: "none" }}>
        {navItems.map((navItem) => (
          <MobileNavItem
            key={navItem.attributes.name}
            {...navItem.attributes}
          />
        ))}
      </Stack>
    </Box>
  );
};

const MobileNavItem = ({ name, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {name}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.data.map((child) => (
              <Link
                key={child.attributes.name}
                py={2}
                href={child.attributes.href}
              >
                {child.attributes.name}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
