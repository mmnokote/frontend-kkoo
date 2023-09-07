import { Box, Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
import DefaultLayout from '@/Features/Layouts/Default/Default';
import HeaderPage from '@/Features/common/modules/Header/Header';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import AdminStatistics from '@/Features/Dashboard/Admin/Admin';

const Dashboards = () => {
  const { t } = useTranslation();
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };
  return (
    <DefaultLayout>
      <HeaderPage
        title={t(`header.nav.Dashboards`)}
        cover="/images/projects/01.jpeg"
        height="220px"
      />
      <Box margin="0 auto" maxWidth="1440px" zIndex="5">
        <Box marginY="2rem">
          <Tabs index={tabIndex} onChange={handleTabsChange}>
            <TabList>
              <Tab>Administrative</Tab>
              <Tab>Revenue</Tab>
              <Tab>Performance</Tab>
            </TabList>
            <TabPanels>
              <TabPanel px={0}>
                <Box>
                  <AdminStatistics />
                </Box>
              </TabPanel>
              <TabPanel>
                <p>Stay tuned, We are preparing content</p>
              </TabPanel>
              <TabPanel>
                <p>Stay tuned, We are preparing content</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
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

export default Dashboards;
