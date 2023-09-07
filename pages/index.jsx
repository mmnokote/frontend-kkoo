import Board from '@/Features/Home/Board/Board';
import Callcenter from '@/Features/Home/Callcenter/Callcenter';
import Current from '@/Features/Home/Current/Current';
import Featured from '@/Features/Home/Featured/Featured';
import Hero from '@/Features/Home/Hero/Hero';
import Leadership from '@/Features/Home/Leadership/Leadership';
import Systems from '@/Features/Home/Systems/Systems';
import DefaultLayout from '@/Features/Layouts/Default/Default';
import Statistics from '@/Features/common/modules/Statistics/Statistics';
import { fetcher } from '@/Features/lib/api';
import { Box } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CustomBreadcrumb from '@/Features/common/modules/Breadcrumb/Breadcrumb';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});
export default function Home({
  articles,
  featured,
  announcements,
  events,
  leadership,
  statistics,
  systems,
  sliders,
  videos,
}) {
  return (
    <>
      <DefaultLayout className={inter.className}>
        <Hero sliders={sliders} />
        <CustomBreadcrumb current="Welcome" />
        <Box maxWidth="1440px" margin="0 auto">
          <Box
            display="flex"
            flexDirection={{
              base: 'column',
              sm: 'row',
              md: 'column',
              lg: 'row',
            }}
            gap={{ base: '0', lg: '10' }}
          >
            <Leadership leadership={leadership} />
            <Featured featured={featured} />
          </Box>
        </Box>
        <Current articles={articles} />
        <Callcenter />
        <Board items={announcements} events={events} videos={videos} />
        <Statistics statistics={statistics} />
        <Systems systems={systems} />
      </DefaultLayout>
    </>
  );
}

async function getData() {
  const { data } = await fetcher(`${process.env.API_URL}/posts?populate=*`, {
    next: { revalidate: 20 },
    caches: false,
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return data;
}

export async function getStaticProps({ locale }) {
  const { data } = await fetcher(`${process.env.API_URL}/posts?populate=*`);
  const sliders = await fetcher(`${process.env.API_URL}/sliders?populate=*`);
  const videos = await fetcher(`${process.env.API_URL}/videos`);

  const { featured } = require('@/Features/Data/featured');
  const { elements } = require('@/Features/Data/announcements');
  const { items } = require('@/Features/Data/systems');
  const { leaders } = require('@/Features/Data/leadership');
  const { stats } = require('@/Features/Data/statistics');
  const { events } = require('@/Features/Data/events');
  const { systems } = require('@/Features/Data/systems');

  console.log('----test', data);

  return {
    props: {
      videos: videos.data,
      sliders: sliders.data,
      articles: data,
      featured: featured,
      announcements: elements,
      systems: items,
      leadership: leaders,
      statistics: stats,
      events: events,
      systems: systems,
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 1,
  };
}