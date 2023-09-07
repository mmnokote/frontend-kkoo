import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  SimpleGrid,
  Heading,
} from '@chakra-ui/react';
import DefaultLayout from '@/Features/Layouts/Default/Default';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import CustomBreadcrumb from '@/Features/common/modules/Breadcrumb/Breadcrumb';
import { fetcher } from '@/Features/lib/api';

const FrequentlyAskedQuestions = ({ content }) => {
  const { t } = useTranslation();
  return (
    <DefaultLayout>
      <CustomBreadcrumb current="Frequently Asked Question" />
      <Box margin="0 auto" maxWidth="1440px">
        <Box marginY={6} paddingX={3}>
          <Heading size={'lg'}>Frequently Asked Questions</Heading>
        </Box>
        <Box
          display="flex"
          flexDirection={{ base: 'column', lg: 'row' }}
          gap="10"
        >
          <Box
            marginBottom={'3rem'}
            maxWidth={{ base: '100vw', lg: '55vw' }}
            paddingRight={{ base: '0', lg: '5rem' }}
          >
            <Accordion allowToggle width={'100%'}>
              {content &&
                content.map((item, index) => (
                  <AccordionItem key={index}>
                    <h2>
                      <AccordionButton>
                        <Box
                          paddingY={2}
                          fontSize="lg"
                          as="span"
                          flex="1"
                          textAlign="left"
                          fontWeight={'medium'}
                          color={'blue.600'}
                        >
                          {item.attributes.question}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      {item.attributes.answer}
                    </AccordionPanel>
                  </AccordionItem>
                ))}
            </Accordion>
          </Box>
          <Box width={'45vw'}></Box>
        </Box>
      </Box>
    </DefaultLayout>
  );
};
export async function getStaticProps({ locale }) {
  const faq = await fetcher(`${process.env.API_URL}/faqs?populate=*`);
  return {
    props: {
      content: faq.data,
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 1,
  };
}

export default FrequentlyAskedQuestions;
