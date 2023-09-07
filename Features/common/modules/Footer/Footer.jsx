import {
  Box,
  Center,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { about, administration, important, media } from "./FooterConsts";
import { ImArrowRight2 } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import Social from "./Social/Social";

function Footer() {
  const bg = useColorModeValue("gray.50", "gray.900");

  return (
    <Box backgroundColor={bg} marginTop={"5rem"}>
      <Box
        maxWidth="1440px"
        margin="0 auto"
        paddingX={{ base: "2rem", sm: "1rem" }}
      >
        <SimpleGrid
          paddingTop="3rem"
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Flex gap="5" fontWeight={"bold"}>
              <Image src="/images/coat.svg" width="45" height="45" />
              <Box>
                <Text>President's Office</Text>
                <Text>Regional Administration and Local Government</Text>
              </Box>
            </Flex>
            <Text fontSize={"md"}>© 2022 PORALG. All rights reserved</Text>
          </Stack>

          <Flex flexDirection="column" gap="0.5rem">
            <HeaderLink title="About Us" />
            {about.map((item) => (
              <FooterLink key={item.name} {...item} />
            ))}
          </Flex>

          <Flex flexDirection="column" gap="0.5rem">
            <HeaderLink title="Important Links" />
            {important.map((item) => (
              <FooterLink key={item.name} {...item} />
            ))}
          </Flex>

          <Flex flex={1} flexDirection="column" gap="0.5rem">
            <HeaderLink title="Administration" />
            {administration.map((item) => (
              <FooterLink key={item.name} {...item} />
            ))}
          </Flex>
          <Flex flex={1} flexDirection="column" gap="0.5rem">
            <HeaderLink title="Media Center" />
            {media.map((item) => (
              <FooterLink key={item.name} {...item} />
            ))}
          </Flex>
        </SimpleGrid>

        <Box
          marginTop={"5rem"}
          position="relative"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Social />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;

export const FooterLink = ({ name, link }) => {
  return (
    <Link
      href={link}
      role={"group"}
      display={"block"}
      py={1}
      rounded={"md"}
      _hover={{ bg: "transparent" }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            color={useColorModeValue("blackAlpha.600", "blue.200")}
            fontSize={"md"}
            transition={"all .3s ease"}
            _groupHover={{ color: useColorModeValue("blue.600", "blue.400") }}
            fontWeight={500}
          >
            {name}
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
          <Icon color={"white"} size={30} as={ImArrowRight2} />
        </Flex>
      </Stack>
    </Link>
  );
};

export const HeaderLink = ({ title }) => {
  return (
    <Text
      as="h4"
      fontSize="1.3rem"
      fontWeight="medium"
      color="black"
      marginBottom={4}
    >
      {title}
    </Text>
  );
};