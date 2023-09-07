import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
  useDisclosure,
  IconButton,
  SimpleGrid,
  GridItem,
} from '@chakra-ui/react';
import { FiShare2, FiThumbsDown, FiThumbsUp } from 'react-icons/fi';
import TimeAgo from 'timeago-react';
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  InstapaperShareButton,
  InstapaperIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  ViberShareButton,
  ViberIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';

function AuthorDetails({ article }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
        justifyContent="space-between"
        alignItems={{ base: 'flex-start', md: 'center', lg: 'center' }}
        my="2rem"
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex alignItems="flex-start" gap="5">
            <Avatar name={article.author.email} src="/images/news/06.jpeg" />
            <Box display="flex" flexDirection="column">
              <Heading fontWeight="semibold" size="sm" color="blue.500">
                {article.author.email}
              </Heading>
              <Heading color="gray.500" size="sm" fontWeight="normal" pt={1}>
                Published on -
                <TimeAgo datetime={article.createdAt} locale="TZ" />
              </Heading>
            </Box>
          </Flex>
        </Box>
        <Box
          display={{ base: 'none', md: 'flex', lg: 'flex' }}
          flexDirection="row"
          gap="2"
        >
          <ButtonGroup size="md" isAttached color="gray.500">
            <IconButton
              borderTopLeftRadius="full"
              borderBottomLeftRadius="full"
              aria-label="Like the Article"
              icon={<FiThumbsUp />}
            />
            <Button borderTopRightRadius="full" borderBottomRightRadius="full">
              {article.likes} Likes
            </Button>
          </ButtonGroup>

          <ButtonGroup size="md" isAttached color="gray.500">
            <IconButton
              borderTopLeftRadius="full"
              borderBottomLeftRadius="full"
              aria-label="Dislike This Article"
              icon={<FiThumbsDown />}
            />
            <Button borderTopRightRadius="full" borderBottomRightRadius="full">
              {article.dislikes} Dislikes
            </Button>
          </ButtonGroup>

          <ButtonGroup onClick={onOpen} size="md" isAttached color="gray.500">
            <IconButton
              borderTopLeftRadius="full"
              borderBottomLeftRadius="full"
              aria-label="Share Artcle"
              icon={<FiShare2 />}
            />
            <Button borderTopRightRadius="full" borderBottomRightRadius="full">
              Share this Article
            </Button>
          </ButtonGroup>
        </Box>
      </Flex>

      <Modal onClose={onClose} isOpen={isOpen} isCentered size={'3xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Share</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid columns={10} spacing={55}>
              <GridItem>
                <Box>
                  <EmailShareButton
                    url={`${process.env.API_URL}/article/${article.id}`}
                    quote={article.slug}
                    hashtag="#tamisemiyawanainchi"
                  >
                    <EmailIcon size={64} round />
                  </EmailShareButton>
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <WhatsappShareButton
                    url={`${process.env.API_URL}/article/${article.id}`}
                    quote={article.slug}
                    hashtag="#tamisemiyawanainchi"
                  >
                    <WhatsappIcon size={64} round />
                  </WhatsappShareButton>
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <FacebookShareButton
                    url={`${process.env.API_URL}/article/${article.id}`}
                    quote={article.slug}
                    hashtag="#tamisemiyawanainchi"
                  >
                    <FacebookIcon size={64} round />
                  </FacebookShareButton>
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <TwitterShareButton
                    url={`${process.env.API_URL}/article/${article.id}`}
                    quote={article.slug}
                    hashtag="#tamisemiyawanainchi"
                  >
                    <TwitterIcon size={64} round />
                  </TwitterShareButton>
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <InstapaperShareButton
                    url={`${process.env.API_URL}/article/${article.id}`}
                    quote={article.slug}
                    hashtag="#tamisemiyawanainchi"
                  >
                    <InstapaperIcon size={64} round />
                  </InstapaperShareButton>
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <LinkedinShareButton
                    url={`${process.env.API_URL}/article/${article.id}`}
                    quote={article.slug}
                    hashtag="#tamisemiyawanainchi"
                  >
                    <LinkedinIcon size={64} round />
                  </LinkedinShareButton>
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <TelegramShareButton
                    url={`${process.env.API_URL}/article/${article.id}`}
                    quote={article.slug}
                    hashtag="#tamisemiyawanainchi"
                  >
                    <TelegramIcon size={64} round />
                  </TelegramShareButton>
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <PinterestShareButton
                    url={`${process.env.API_URL}/article/${article.id}`}
                    quote={article.slug}
                    hashtag="#tamisemiyawanainchi"
                  >
                    <PinterestIcon size={64} round />
                  </PinterestShareButton>
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <ViberShareButton
                    url={`${process.env.API_URL}/article/${article.id}`}
                    quote={article.slug}
                    hashtag="#tamisemiyawanainchi"
                  >
                    <ViberIcon size={64} round />
                  </ViberShareButton>
                </Box>
              </GridItem>
            </SimpleGrid>
          </ModalBody>
          <ModalFooter>
            <Button variant={'ghost'} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AuthorDetails;
