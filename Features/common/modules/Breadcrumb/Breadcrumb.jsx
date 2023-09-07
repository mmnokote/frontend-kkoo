import React from 'react';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  useColorModeValue,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { BsArrowRight } from 'react-icons/bs';

function CustomBreadcrumb({ previous, current }) {
  const bgColor = useColorModeValue('blue.100', 'gray.500');
  return (
    <Box backgroundColor={bgColor}>
      <Box
        maxWidth="1440px"
        margin={'0 auto'}
        display={'flex'}
        alignItems={'center'}
        padding="1rem"
      >
        <Breadcrumb
          separator={<BsArrowRight />}
          fontWeight="bold"
          fontSize="sm"
        >
          <BreadcrumbItem>
            <BreadcrumbLink color={previous && 'gray.500'} href="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          {previous && (
            <BreadcrumbItem>
              <BreadcrumbLink color={previous && 'gray.500'} href="/about">
                {previous}
              </BreadcrumbLink>
            </BreadcrumbItem>
          )}

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink fontWeight="bold" href="#">
              {current}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </Box>
  );
}

export default CustomBreadcrumb;
