import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Heading,
  Image,
  Img,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import useIsDesktop from '@/Features/common/Hooks/useDesktop/useIsDesktop';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';

const Systems = ({ systems }) => {
  const { isDesktop } = useIsDesktop();
  const [current, setCurrent] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();

  const handleClick = (item) => {
    setCurrent(item);
    onOpen();
  };

  return (
    <Box maxWidth="1440px" margin="0 auto">
      <Box
        width={{ base: '100%', sm: '100%', md: '3xl' }}
        margin="0 auto"
        display="relative"
        position="flex"
        flexDirection="column"
        textAlign="center"
        marginBottom="1rem"
      >
        <Heading size="lg" color="blue.500" mt="3rem">
          {t('sections.systems.heading')}
        </Heading>
        <Text size="lg" marginTop="0.5rem" color="gray.600">
          {t('sections.systems.description')}
        </Text>
      </Box>
      <Box>
        <Swiper
          slidesPerView={isDesktop ? 6 : 1}
          loop={true}
          spaceBetween={0}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          modules={[Autoplay]}
          centeredSlides={false}
          className="mySwiper"
        >
          {systems.map((element, index) => (
            <SwiperSlide key={element.id} onClick={() => handleClick(element)}>
              <Box
                marginY="2rem"
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                marginRight="2rem"
                borderRadius="xl"
              >
                <Box
                  width="150px"
                  height="150px"
                  backgroundPosition="center"
                  backgroundSize="cover"
                  backgroundRepeat="no-repeat"
                  backgroundImage={`url(${element.attributes.logoUrl.data.attributes.formats.thumbnail.url})`}
                ></Box>
                
                <Box>
               
            </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Drawer onClose={onClose} isOpen={isOpen} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Box paddingX="1rem" paddingTop="2rem">
              <Heading
                size="lg"
                fontWeight="extrabold"
                marginBottom="1rem"
                color="blue.500"
              >
                {current?.attributes.title}
              </Heading>
              <Text>
              {current?.attributes.description}
              </Text>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Systems;
