import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box, useColorModeValue } from '@chakra-ui/react';

export default function LocaleSwitcher() {
  const router = useRouter();

  const { locales, locale: activeLocale } = router;

  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== 'default'
  );

  return (
    <Box
      color={useColorModeValue('white', 'blue.400')}
      justifyContent={'center'}
      alignItems={'center'}
    >
      {otherLocales?.map((locale) => {
        const { pathname, query, asPath } = router;
        return (
          <span key={locale}>
            <Link
              fontWeight="bold"
              href={{ pathname, query }}
              as={asPath}
              locale={locale}
            >
              {locale === 'en' ? 'English' : locale === 'sw' ? 'Swahili' : null}
            </Link>
          </span>
        );
      })}
    </Box>
  );
}
