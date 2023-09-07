import { Box } from '@chakra-ui/react';
import DefaultLayout from '@/Features/Layouts/Default/Default';
import HeaderPage from '@/Features/common/modules/Header/Header';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import EmptyPage from '@/Features/common/modules/Empty/Empty';
import CustomBreadcrumb from '@/Features/common/modules/Breadcrumb/Breadcrumb';

const Performance = () => {
  const { t } = useTranslation();
  return (
    <DefaultLayout>
      <CustomBreadcrumb
        previous="Dashboards"
        current={t(`pages.dashboards.Administration`)}
      />
      <Box margin="0 auto" maxWidth="1440px">
        <EmptyPage page={t('pages.dashboards.Performance')} />
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

export default Performance;
