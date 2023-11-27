import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import useIsDesktop from '../../Hooks/useDesktop/useIsDesktop';

function Statistics({ statistics }) {
  const { isDesktop } = useIsDesktop();
  return (
    <Box maxWidth="1440px" margin="0 auto" paddingY="2rem">
      <Box
        width={{ base: '100%', sm: '100%', md: '3xl' }}
        margin="0 auto"
        display="relative"
        position="flex"
        flexDirection="column"
        textAlign="center"
        marginBottom="1rem"
      >
        <Heading size="lg" color="blue.500">
          PORALG in Numbers
        </Heading>
        <Text size="lg" marginTop="0.5rem" color="gray.600">
          Duis laoreet 
        </Text>
      </Box>
      <Swiper
        slidesPerView={isDesktop ? 4 : 1}
        loop={true}
        spaceBetween={5}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        pagination={{ dynamicBullets: true, clickable: true }}
        modules={[Autoplay, Navigation, Pagination]}
        centeredSlides={false}
        className="mySwiper"
      >
        {statistics.map((item) => (
          <SwiperSlide key={item.id}>
            <Box marginY="2rem">
              <StatCard stats={item} {...item} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Statistics;

export const StatCard = ({ stats }) => {
  const bg = useColorModeValue('white', 'gray.700');

  return (
    <Card
      variant="outline"
      _hover={{ backgroundColor: 'blackAlpha.100' }}
      marginBottom="2rem"
      marginX="1rem"
    >
      <CardHeader>
        <Heading size="md" color="blue.400">
          {stats.attributes?.title}
        </Heading>
        <Text size="sm" color="gray.500">
          {stats.attributes?.subtitle}
        </Text>
      </CardHeader>
      <CardBody>
        <Heading size="xl">{stats.attributes?.total.toLocaleString()}</Heading>
      </CardBody>
    </Card>
  );
};
