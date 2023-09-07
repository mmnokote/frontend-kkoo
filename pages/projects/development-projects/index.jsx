import { Box } from '@chakra-ui/react';
import DefaultLayout from '@/Features/Layouts/Default/Default';
import HeaderPage from '@/Features/common/modules/Header/Header';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CustomBreadcrumb from '@/Features/common/modules/Breadcrumb/Breadcrumb';

const DevelopmentProjects = () => {
  return (
    <DefaultLayout>
      <CustomBreadcrumb previous="Projects" current="Development Projects" />
      <Box
        margin="0 auto"
        marginTop="-5rem"
        maxWidth="1440px"
        height="200px"
        zIndex="5"
      ></Box>
    </DefaultLayout>
  );
};
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default DevelopmentProjects;
