import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Box, Button } from '@chakra-ui/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Article } from '@/Features/Articles/Article/Article';
import useIsDesktop from '@/Features/common/Hooks/useDesktop/useIsDesktop';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import PageHeading from '@/Features/common/modules/Heading/Heading';

const Current = ({ articles }) => {
  const { isDesktop } = useIsDesktop();
  const router = useRouter();

  return (
    <Box marginY={'1rem'} paddingTop="1rem">
      <Box maxWidth="1440px" margin="0 auto" marginY="3rem">
        <Box
          marginY="2rem"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <PageHeading
            title="Current News"
            subtitle="Latest News and Updates"
          />
          <Button
            variant="outline"
            rightIcon={<ArrowForwardIcon />}
            colorScheme="blue"
            onClick={() => router.push('/articles')}
          >
            View All
          </Button>
        </Box>
        <Box>
          <Swiper
            slidesPerView={isDesktop ? 4 : 1}
            loop={true}
            spaceBetween={0}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            pagination={{ dynamicBullets: true, clickable: true }}
            modules={[Autoplay, Navigation, Pagination]}
            centeredSlides={false}
            className="mySwiper"
          >
            {articles &&
              articles.map((item) => (
                <SwiperSlide key={item.id}>
                  <Article article={item} />
                </SwiperSlide>
              ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};

export default Current;
