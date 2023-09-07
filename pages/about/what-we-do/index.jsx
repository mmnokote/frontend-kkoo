import { Box, Heading, Text } from '@chakra-ui/react';

import DefaultLayout from '@/Features/Layouts/Default/Default';
import { fetcher } from '@/Features/lib/api';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CustomBreadcrumb from '@/Features/common/modules/Breadcrumb/Breadcrumb';
import { useTranslation } from 'next-i18next';

function WhatWeDo({ content }) {
  const { t } = useTranslation();
  return (
    <DefaultLayout>
      <CustomBreadcrumb
        previous="About Us"
        current={t('header.nav.About Us.children.What We Do')}
      />
      <Box maxWidth="1440px" margin="0 auto">
        <Box marginY={5}>
          <Heading>{t('header.nav.About Us.children.What We Do')}</Heading>
        </Box>
        <Box
          dangerouslySetInnerHTML={{ __html: content.attributes.content }}
        ></Box>
      </Box>
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }) {
  const about = await fetcher(`${process.env.API_URL}/about`);

  return {
    props: {
      content: about.data,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default WhatWeDo;
