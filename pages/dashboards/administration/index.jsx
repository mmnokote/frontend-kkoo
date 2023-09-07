import { Box } from '@chakra-ui/react';
import DefaultLayout from '@/Features/Layouts/Default/Default';
import HeaderPage from '@/Features/common/modules/Header/Header';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import AdminStatistics from '@/Features/Dashboard/Admin/Admin';
import CustomBreadcrumb from '@/Features/common/modules/Breadcrumb/Breadcrumb';

const Administration = () => {
  const { t } = useTranslation();
  return (
    <DefaultLayout>
      <CustomBreadcrumb
        previous="Dashboards"
        current={t(`pages.dashboards.Administration`)}
      />
      <Box margin="0 auto" maxWidth="1440px">
        <Box margin="0 auto" maxWidth="1440px" zIndex="5">
          <Box marginY="2rem">
            <AdminStatistics />
          </Box>
        </Box>
      </Box>
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

export default Administration;
