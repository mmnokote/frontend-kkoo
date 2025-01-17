import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

import Event from "@/Features/common/modules/Event/Event";
import Video from "@/Features/common/modules/Video/Video";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { ImFilePdf } from "react-icons/im";
import { fetcher } from "@/Features/lib/api";

const Board = ({ items, events, videos }) => {
  const router = useRouter();

  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.700")}
      paddingY="2rem"
      position="relative"
    >
      <Box maxWidth="1440px" margin="0 auto">
        <Box padding={{ base: "0.5rem", md: "0rem" }}>
          <Flex
            gap={10}
            flexDirection={{
              base: "column",
              sm: "row",
              md: "column",
              lg: "row",
            }}
          >
            <Box w="100%">
              <Box
                marginY="2rem"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Heading size="md" fontWeight="bold" color="blue.500">
                  {/* Featured Events */}
                  Matukio Mbalimbali
                </Heading>
                <Button
                  size="sm"
                  variant="outline"
                  rightIcon={<ArrowForwardIcon />}
                  colorScheme="blue"
                  onClick={() => router.push("/articles")}
                >
                  View All
                </Button>
              </Box>
              <Box>
                {events &&
                  events.map((item, index) => (
                    <Event key={index} event={item} />
                  ))}
              </Box>
            </Box>
            <Box w="100%">
              <Box
                marginY="2rem"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Heading size="md" fontWeight="bold" color="blue.500">
                  {/* Featured Videos */}
                  Video za Taarifa
                </Heading>
              </Box>
              <Box paddingBlock={2}>
                {videos &&
                  videos.map((item, index) => (
                    <Video key={index} video={item} />
                  ))}
              </Box>
            </Box>

            <Box w="100%">
              <Box
                marginY="2rem"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Heading size="md" fontWeight="bold" color="blue.500">
                  {/* Important DownloadsImportant Downloads */}
                  Nakala za Muhimu
                </Heading>
                <Button
                  size="sm"
                  variant="outline"
                  rightIcon={<ArrowForwardIcon />}
                  colorScheme="blue"
                  onClick={() => router.push("/downloads")}
                >
                  All Downloads
                </Button>
              </Box>

              <Box>
                {items &&
                  items.map((item, index) => (
                    <Announcement key={index} announcement={item} />
                  ))}
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Board;

export const Announcement = ({ announcement }) => {
  const fileUrl = announcement.attributes.file.data.attributes.url;
  return (
    <VStack spacing="0" marginBottom={5}>
      <Box
        display="flex"
        flexDirection="column"
        borderRadius="xl"
        border="1px solid"
        padding="1rem"
        borderColor={useColorModeValue("gray.400", "blue.600")}
      >
        <Flex alignItems="center" gap={5}>
          <ImFilePdf size={60} color="red" />
          <Heading size="md" fontWeight="500" noOfLines={2}>
            {announcement.attributes.title}
          </Heading>
        </Flex>
        <Text pt="2" size="md" noOfLines={2}>
          {announcement.attributes.content}
        </Text>
        <Box
          marginTop={2}
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
          gap={5}
          as="a"
          color="blue.400"
          href={fileUrl} // Set the href to the actual file URL
          target="_blank" // Open the link in a new tab
          rel="noopener noreferrer" // Recommended for security
          fontWeight="bold"
        >
          <Text>Download</Text>
          <AiOutlineCloudDownload size="25" />
        </Box>
      </Box>
    </VStack>
  );
};
