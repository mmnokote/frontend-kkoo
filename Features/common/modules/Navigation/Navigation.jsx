import {
  Box,
  Flex,
  Heading,
  Image,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { MdOutlineHelp, MdWifiCalling3 } from "react-icons/md";

import { BsHeadset } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

import LocaleSwitcher from "@/Features/common/Hooks/useLocale/Switcher";
import { useTranslation } from "next-i18next";
import ThemeSwitch from "@/Features/theme/switch";
import Desktop from "./Desktop/Desktop";
const iconSize = 20;

const Navigation = () => {
  const bg = useColorModeValue("white", "gray.900");
  const bgNav = useColorModeValue("blue.500", "gray.700");
  const { t } = useTranslation("");
  return (
    <>
      <Box
        display={{
          base: "none",
          sm: "none",
          md: "none",
          lg: "block",
        }}
      >
        <Box
          height="230px"
          display="flex"
          flexDirection={"column"}
          position="relative"
          justifyContent="space-between"
          alignItems="center"
          backgroundImage={`url("/images/banner.jpg")`}
          backgroundSize="cover"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            backgroundColor={"transparent"}
            paddingX="2rem"
            height="50px"
            width={"100%"}
            zIndex={5}
          >
            <Flex
              alignItems="center"
              justifyContent="space-between"
              width="full"
            >
              <Flex gap={5}>
                <ThemeSwitch />
                <LocaleSwitcher />
              </Flex>
              <Box display="flex" alignItems="center" gap="1.5rem">
                {NAV_ITEMS &&
                  NAV_ITEMS.map((item) => (
                    <ItemLink key={item.title} {...item} />
                  ))}
              </Box>
            </Flex>
          </Box>
          <Flex
            zIndex="2"
            width="100vw"
            marginBottom={"3rem"}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-around"
          >
            <Image
              boxSize="80px"
              objectFit="contain"
              src="/images/coat.svg"
              alt="Coat of Arms"
            />
            <Box color="white" textAlign="center">
              <Heading mb={2} size="xl" fontWeight={"extrabold"}>
                {t("header.name.title")}
              </Heading>
              <Heading size="lg">{t("header.name.subtitle")}</Heading>
            </Box>
            <Box></Box>
          </Flex>
          <Box
            position="absolute"
            width="100%"
            height="230px"
            top="0"
            left="0"
            bottom="0"
            right="0"
            zIndex="1"
            bgGradient="linear(to-t, blackAlpha.600, transparent)"
          />
        </Box>

        <Box backgroundColor={bgNav}>
          <Desktop />
        </Box>
      </Box>
    </>
  );
};
export default Navigation;

const ItemLink = ({ icon, title, link }) => {
  const { t } = useTranslation("");
  return (
    <Link
      href={link}
      fontWeight="semibold"
      color="white"
      fontSize="sm"
      _hover={{ textDecoration: "none", color: "blue.500" }}
    >
      <Flex flexDirection="row" alignItems="center" gap="0.5rem">
        {icon}
        {t(`header.top.${title}`)}
      </Flex>
    </Link>
  );
};

export const NAV_ITEMS = [
  {
    title: "Call Center",
    icon: <BsHeadset size={iconSize} />,
    link: "/call-center",
  },
  {
    title: "Contact Us",
    icon: <MdWifiCalling3 size={iconSize} />,
    link: "/contacts",
  },
  {
    title: "Frequently Asked Questions",
    icon: <MdOutlineHelp size={iconSize} />,
    link: "/frequently-asked-questions",
  },
  {
    title: "Staff Mail",
    icon: <IoIosMail size={iconSize} />,
    link: "#",
  },
];
