import { Box } from "@chakra-ui/react";
import DefaultLayout from "@/Features/Layouts/Default/Default";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ProjectDetailFeature } from "@/Features/common/modules/project-details/ProjectDetailsFeature";

const Projects = () => {
  return (
    <DefaultLayout>
      <Box margin="0 auto" marginTop="0rem" maxWidth="1440px" zIndex="5">
        <ProjectDetailFeature />
      </Box>
    </DefaultLayout>
  );
};
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Projects;
