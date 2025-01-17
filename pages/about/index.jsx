import { Box, Heading, Text } from '@chakra-ui/react';

import DefaultLayout from '@/Features/Layouts/Default/Default';
import { fetcher } from '@/Features/lib/api';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CustomBreadcrumb from '@/Features/common/modules/Breadcrumb/Breadcrumb';
import { useTranslation } from 'next-i18next';

function About({ content }) {
  const { t } = useTranslation();
  return (
    <DefaultLayout>
      <CustomBreadcrumb current={t('header.nav.About Us.label')} />
      <Box maxWidth="1440px" margin="0 auto">
        <Heading>{t('header.nav.About Us.label')}</Heading>
        <Box
          dangerouslySetInnerHTML={{ __html: content.attributes.content }}
        ></Box>
      </Box>
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }) {
  const { data } = await fetcher(`${process.env.API_URL}/about?populate=*`);

  return {
    props: {
      content: data,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default About;
