import { Box, Grid } from "@chakra-ui/react";
import DefaultLayout from "@/Features/Layouts/Default/Default";
import HeaderPage from "@/Features/common/modules/Header/Header";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CustomBreadcrumb from "@/Features/common/modules/Breadcrumb/Breadcrumb";
import ProjectCard from "@/Features/common/modules/project-card/ProjectCard";
import FeatureCard from "@/Features/common/modules/feature/FeatureCard";
import Callcenter from "@/Features/Home/Callcenter/Callcenter";

const EducationProjects = () => {
  return (
    <DefaultLayout>
      <CustomBreadcrumb previous="Projects" current="Educational Projects" />
      <Box margin="0 auto" marginTop="2rem" maxWidth="1440px" zIndex="5">
        <FeatureCard />
        <Grid templateColumns="repeat(4, 1fr)" gap={5} marginBottom={"2rem"}>
          <ProjectCard
            category="Primary School"
            name="Mfano Jina Mradi"
            image="/images/news/10.jpeg"
          />
          <ProjectCard
            category="Secondary School"
            name="Shule Bora"
            image="/images/projects/06.jpg"
          />
          <ProjectCard
            category="Primary School"
            name="Mfano Jina Mradi"
            image="/images/news/12.jpeg"
          />
          <ProjectCard
            category="Adult Education"
            name="Mfano Jina Mradi"
            image="/images/news/13.jpeg"
          />
        </Grid>
        <Callcenter />
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

export default EducationProjects;
