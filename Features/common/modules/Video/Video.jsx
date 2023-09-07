import {
  AspectRatio,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useColorModeValue,
  useDisclosure,
  Button,
  Box,
  Flex,
  keyframes,
  Heading,
  HStack,
} from '@chakra-ui/react';
import { FiYoutube } from 'react-icons/fi';

const Video = ({ video }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ratio = (315 / 516) * 100;
  const bRadius = '5';

  return (
    <>
      <Box
        position={'relative'}
        height={240}
        backgroundImage={'/images/news/01.jpeg'}
        backgroundSize={'cover'}
        marginBottom="1rem"
        borderRadius={bRadius}
        padding={1}
      >
        <AvatarWithRipple onOpen={onOpen} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          zIndex={9}
          position={'absolute'}
          width={'100%'}
          height={'100%'}
          backgroundColor={'blackAlpha.600'}
          borderRadius={bRadius}
        >
          <HStack
            padding={5}
            alignItems={'flex-end'}
            height={'100%'}
            width={'100%'}
            textAlign={'center'}
            color={useColorModeValue('white', 'white')}
          >
            <Heading fontWeight="extrabold" fontSize="lg">
              {video.attributes.title}
            </Heading>
          </HStack>
        </Box>
      </Box>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size={'4xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{video.attributes.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody padding={0}>
            <AspectRatio padding={2} max="760px" borderRadius="none">
              <iframe
                width="100%"
                height="100%"
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: { bRadius },
                }}
                title={video.attributes.description}
                src={`https://www.youtube.com/embed/${video.attributes.youtube}`}
                allow="autoplay"
              />
            </AspectRatio>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Video;

export function AvatarWithRipple({ onOpen }) {
  const size = '86px';
  const color = 'teal';

  const pulseRing = keyframes`
	0% {
    transform: scale(0.44);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="216px"
      w="full"
      overflow="hidden"
    >
      {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
      <Box
        as="div"
        position="relative"
        w={size}
        h={size}
        _before={{
          content: "''",
          position: 'relative',
          display: 'block',
          width: '300%',
          height: '300%',
          boxSizing: 'border-box',
          marginLeft: '-100%',
          marginTop: '-100%',
          borderRadius: '50%',
          bgColor: color,
          animation: `1.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
        }}
      >
        <Box
          top={0}
          borderRadius="full"
          zIndex={100}
          position="absolute"
          backgroundColor={'red.500'}
          width={size}
          height={size}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          color="white"
        >
          <FiYoutube onClick={onOpen} size={40} />
        </Box>
      </Box>
    </Flex>
  );
}
