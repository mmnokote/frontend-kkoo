import { Box, Heading } from "@chakra-ui/react";
import DefaultLayout from "@/Features/Layouts/Default/Default";
import { fetcher } from "@/Features/lib/api";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CustomBreadcrumb from "@/Features/common/modules/Breadcrumb/Breadcrumb";
import { useTranslation } from "next-i18next";
import { remark } from "remark";
import remarkHtml from "remark-html";

function Institution({ content }) {
  const { t } = useTranslation();

  // Check if content is null or undefined
  if (!content || !content.attributes || !content.attributes.content) {
    return null; // or a loading state/error message
  }

  // Parse Markdown to HTML
  const markdownToHtml = (markdownString) =>
    remark().use(remarkHtml).processSync(markdownString).toString();

  const htmlContent = markdownToHtml(content.attributes.content);

  return (
    <DefaultLayout>
      {/* <CustomBreadcrumb current={t("header.nav.Institution.label")} /> */}
      <CustomBreadcrumb current={t("Taasisi za TAMISEMI")} />
      <Box maxWidth="1440px" margin="0 auto">
        {/* <Heading>{t("header.nav.Institution.label")}</Heading> */}
        <Heading>{t("Taasisi za TAMISEMI")}</Heading>
        <Box dangerouslySetInnerHTML={{ __html: htmlContent }}></Box>
      </Box>
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }) {
  const { data } = await fetcher(
    `${process.env.API_URL}/institution?populate=*`
  );

  return {
    props: {
      content: data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Institution;
