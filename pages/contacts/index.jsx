import ContactForm from '@/Features/Contact/Form/Form';
import Map from '@/Features/Contact/Map/Map';
import Current from '@/Features/Home/Current/Current';
import DefaultLayout from '@/Features/Layouts/Default/Default';
import { fetcher } from '@/Features/lib/api';
import CustomBreadcrumb from '@/Features/common/modules/Breadcrumb/Breadcrumb';
import Statistics from '@/Features/common/modules/Statistics/Statistics';
import WithSpeechBubbles from '@/Features/common/modules/Testimonials/Testimonial';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Contacts = ({ articles, statistics, testimonies }) => {
  return (
    <DefaultLayout>
      <Map />
      <CustomBreadcrumb current="Contact Details" />
      <ContactForm />
      <WithSpeechBubbles testimonies={testimonies} />
      <Current articles={articles} />
      <Statistics statistics={statistics} />
    </DefaultLayout>
  );
};

export default Contacts;

export async function getStaticProps({ locale }) {
  const { data } = await fetcher(`${process.env.API_URL}/posts?populate=*`);
  const testimonies = await fetcher(
    `${process.env.API_URL}/testimonies?populate=*`
  );
  const { stats } = require('@/Features/Data/statistics');

  return {
    props: {
      articles: data,
      testimonies: testimonies.data,
      statistics: stats,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
