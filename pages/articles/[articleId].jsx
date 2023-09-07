import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  TagLabel,
  Card,
  HStack,
  Text,
  Img,
} from '@chakra-ui/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Related from '@/Features/Articles/Related/Related';
import AuthorDetails from '@/Features/Articles/Social/Author';
import Default from '@/Features/Layouts/Default/Default';
import useIsDesktop from '@/Features/common/Hooks/useDesktop/useIsDesktop';
import TabHeader from '@/Features/common/modules/TabHeader/TabHeader';
import Video from '@/Features/common/modules/Video/Video';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ImFilePdf } from 'react-icons/im';
import { fetcher } from '@/Features/lib/api';
import CustomBreadcrumb from '@/Features/common/modules/Breadcrumb/Breadcrumb';
import { singleArticleReducer } from '@/Features/lib/reducers';
import ReactMarkdown from 'react-markdown';

const ArticleSingle = ({ article, related, announcements, videos }) => {
  const post = singleArticleReducer(article);
  const { isDesktop } = useIsDesktop();
  const router = useRouter();
  return (
    <>
      <Default>
        <CustomBreadcrumb previous="Articles" current={post.slug} />

        <Box maxWidth="1440px" margin="0 auto">
          <Box
            display="flex"
            flexDirection={{ base: 'column', lg: 'row' }}
            paddingY="3rem"
            gap="10"
          >
            <Box
              maxWidth={{ base: '100vw', lg: '55vw' }}
              paddingRight={{ base: '0', lg: '5rem' }}
            >
              <Heading size="xl" fontWeight="extrabold">
                {post.title}
              </Heading>
              <Box
                width="100%"
                height={{ base: '250px', lg: '500px' }}
                position="relative"
              >
                <Img
                  borderRadius="md"
                  marginTop="3rem"
                  width="100%"
                  layout="fill"
                  objectFit="cover"
                  height="100%"
                  alt={post.imageUrl.alt}
                  src={`${post.imageUrl.url}`}
                />
                <Flex pos="absolute" top={3} left={3} gap={2}>
                  {post.tags &&
                    post.tags.map((tag, index) => (
                      <Tag
                        key={index}
                        size="lg"
                        colorScheme="blue"
                        borderRadius="full"
                      >
                        <TagLabel>{tag}</TagLabel>
                      </Tag>
                    ))}
                </Flex>
              </Box>

              <AuthorDetails article={post} />

              <Box position="relative">
                <Box
                  fontSize="1rem"
                  lineHeight="tall"
                  dangerouslySetInnerHTML={{
                    __html: post.content,
                  }}
                ></Box>
              </Box>
              <Box marginY="3rem">
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Heading size="lg" color="blue.500" marginY="2rem">
                    Related News
                  </Heading>
                  <Button
                    variant="outline"
                    rightIcon={<ArrowForwardIcon />}
                    colorScheme="blue"
                    onClick={() => router.push('/articles')}
                  >
                    View All
                  </Button>
                </Box>

                <Swiper
                  style={{
                    '--swiper-pagination-bullet-size': '10px',
                    '--swiper-pagination-bullet-size': '10px',
                  }}
                  slidesPerView={isDesktop ? 3 : 1}
                  loop={true}
                  spaceBetween={10}
                  autoplay={{ delay: 2000, disableOnInteraction: true }}
                  pagination={{ dynamicBullets: true, clickable: true }}
                  modules={[Autoplay, Navigation, Pagination]}
                  centeredSlides={false}
                  className="mySwiper"
                >
                  {related &&
                    related.map((item) => (
                      <SwiperSlide key={item.id}>
                        <Related related={item} />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </Box>
            </Box>
            <Box flex="1" alignItems="flex-start" justifyContent="flex-start">
              <Box marginX={2}>
                <Tabs variant="enclosed" align="start" width="100%" isLazy>
                  <TabList>
                    <TabHeader title="Announcements" />
                    <TabHeader title="Statistics" />
                    <TabHeader title="Downloads" />
                  </TabList>

                  <TabPanels>
                    <TabPanel p={0}>
                      {announcements &&
                        announcements.map((item, index) => (
                          <Announcement key={index} {...item} />
                        ))}
                    </TabPanel>
                    <TabPanel p={0}></TabPanel>
                    <TabPanel p={0}>
                      <p>Please wait ...</p>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
              <Box w="100%">
                <Box
                  marginY="2rem"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Heading size="md" fontWeight="bold" color="blue.500">
                      Events in Videos
                    </Heading>
                    <Heading size="sm" fontWeight="medium" mt={2}>
                      We have a Youtube channel for all events captured in
                      motion-picture, See a selected few videos for your
                      information.
                    </Heading>
                  </Box>
                </Box>
                <Box paddingBottom="2rem">
                  {videos &&
                    videos.map((item, index) => (
                      <Video key={index} video={item} />
                    ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Default>
    </>
  );
};

export default ArticleSingle;

export async function getServerSideProps({ locale, params }) {
  const data = await fetcher(
    `${process.env.API_URL}/posts/${params.articleId}?populate=*`
  );

  const videos = await fetcher(`${process.env.API_URL}/videos`);

  const { articles } = require('@/Features/Data/articles');
  const { elements } = require('@/Features/Data/announcements');

  return {
    props: {
      videos: videos.data,
      article: data,
      related: articles,
      announcements: elements,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export const Announcement = ({ title, content }) => {
  return (
    <Box marginTop={4}>
      <Card
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={'1rem'}
        p={5}
      >
        <HStack gap={1}>
          <ImFilePdf size={60} color="red" />
          <Text fontSize="md" fontWeight="extrabold" noOfLines={2}>
            {title}
          </Text>
        </HStack>
        <Text pt="1" fontSize="md" noOfLines={2}>
          {content}
        </Text>
      </Card>
    </Box>
  );
};
