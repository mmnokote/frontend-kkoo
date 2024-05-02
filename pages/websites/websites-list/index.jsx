import { Box, Heading, Text } from "@chakra-ui/react";

import DefaultLayout from "@/Features/Layouts/Default/Default";
import { fetcher } from "@/Features/lib/api";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import MarkdownIt from "markdown-it";
import CustomBreadcrumb from "@/Features/common/modules/Breadcrumb/Breadcrumb";

function Website({ content }) {
  const { attributes } = content;
  const { t } = useTranslation();
  const markdown = new MarkdownIt();
  const htmlContent = markdown.render(attributes.content);

  return (
    <DefaultLayout>
      <CustomBreadcrumb previous="Websites" current="List of Websites" />
      <Box>
        <Box maxWidth="1440px" margin="0 auto">
          <Box display={"flex"} width={"100%"}>
            <Box paddingY={"2rem"} width={"50vw"}>
              <div
                className="markdown-body" // Add this class for styling if needed
                dangerouslySetInnerHTML={{ __html: htmlContent }} // Use the rendered HTML content
              ></div>
            </Box>
            <Box></Box>
          </Box>
        </Box>
      </Box>
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }) {
  const { data } = await fetcher(`${process.env.API_URL}/website`);
  return {
    props: {
      content: data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Website;
