import { Box, Grid, GridItem, Heading, Input } from '@chakra-ui/react';

import List from '@/Features/Articles/List/List';
import Default from '@/Features/Layouts/Default/Default';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { fetcher } from '@/Features/lib/api';
import CustomBreadcrumb from '@/Features/common/modules/Breadcrumb/Breadcrumb';

const Articles = ({ articles }) => {
  return (
    <Default>
      <CustomBreadcrumb current="articles" />
      <Box maxWidth="1440px" margin="0 auto">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          marginRight="1.5rem"
        >
          <Heading size="lg" color="blue.500" marginY="2rem">
            News Archives
          </Heading>
        </Box>
        <Box marginBottom="1rem">
          <Input placeholder="Search Articles/Publications" />
        </Box>
        <Box paddingY="2rem">
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(5, 1fr)' }}
            gap={6}
          >
            {articles &&
              articles.map((item) => (
                <GridItem key={item.id}>
                  <List article={item} />
                </GridItem>
              ))}
          </Grid>
        </Box>
      </Box>
    </Default>
  );
};

export default Articles;

export async function getStaticProps({ locale }) {
  const { data } = await fetcher(`${process.env.API_URL}/posts?populate=*`, {
    next: { revalidate: 60 },
  });

  return {
    props: {
      articles: data,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
