import { Box } from '@chakra-ui/react';
import DefaultLayout from '@/Features/Layouts/Default/Default';
import HeaderPage from '@/Features/common/modules/Header/Header';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Projects = () => {
  return (
    <DefaultLayout>
      <HeaderPage
        title="Education Projects"
        cover="/images/projects/06.jpg"
        height="400px"
      />
      <Box
        margin="0 auto"
        marginTop="-5rem"
        maxWidth="1440px"
        height="200px"
        zIndex="5"
      >
        
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

export default Projects;

