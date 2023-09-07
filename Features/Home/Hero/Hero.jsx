import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {
  Box,
  Heading,
  Image,
  Stack,
  Text,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BiLeftArrowAlt } from 'react-icons';

import useIsDesktop from '@/Features/common/Hooks/useDesktop/useIsDesktop';
import { sliderReducer } from '@/Features/lib/reducers';

const Hero = ({ sliders }) => {
  const isDesktop = useIsDesktop();
  return (
    <Box width="100%" borderBottom={'0rem'} borderBottomColor={'blue.500'}>
      <Swiper
        loop={true}
        autoplay={{ delay: 10000, disableOnInteraction: true }}
        spaceBetween={5}
        slidesPerView={isDesktop ? 1 : 1}
        pagination={{ dynamicBullets: false, clickable: false }}
        modules={[Navigation, Autoplay]}
        centeredSlides={true}
        className="mySwiper"
      >
        {sliders &&
          sliders.map((item) => (
            <SwiperSlide key={item.id}>
              <Slider slider={item} {...item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  );
};

export default Hero;

export const Slider = ({ slider }) => {
  const item = sliderReducer(slider);
  const containerHeight = '600px';

  return (
    <Box
      height={containerHeight}
      marginBottom="0rem"
      display="flex"
      position="relative"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundImage={`${item.imageUrl.url}`}
    >
      <Box
        zIndex={3}
        position="absolute"
        width="100%"
        height={containerHeight}
        top="0"
        left="0"
        bottom="0"
        right="0"
        backgroundColor="blackAlpha.400"
      />

      <Box zIndex={5} width="4xl">
        <Stack color="white" textAlign="center">
          <Heading
            fontWeight="black"
            fontSize={{ base: '2xl', md: '3xl', lg: '7xl' }}
          >
            {item.title}
          </Heading>
          <Text fontWeight={'semibold'} fontSize={{ base: 'md', lg: 'xl' }}>
            {item.description}
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};
