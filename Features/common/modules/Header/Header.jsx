import { Box, Heading } from "@chakra-ui/react";

function HeaderPage({ title, cover, height }) {
  return (
    <Box
      position="relative"
      backgroundImage={`url("${cover}")`}
      backgroundSize="cover"
      backgroundPosition="35% 35%"
      backgroundRepeat="no-repeat"
      zIndex={4}
    >
      <Box
        maxWidth="1440px"
        margin="0 auto"
        height={height}
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-end"
      >
        <Box color="whiteAlpha.500" zIndex="3" paddingBottom="2rem">
          <Heading
            fontWeight="extrabold"
            size={{ base: "md", md: "xl" }}
            paddingX={{ base: "3rem", md: "0" }}
          >
            {title}
          </Heading>
        </Box>
        <Box
          position="absolute"
          width="100%"
          height={height}
          top="0"
          left="0"
          bottom="0"
          right="0"
          zIndex="1"
          bgGradient="linear(to-t, blackAlpha.500, transparent)"
        />
      </Box>
    </Box>
  );
}

export default HeaderPage;
