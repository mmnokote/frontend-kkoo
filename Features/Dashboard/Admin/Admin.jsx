import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatHelpText,
  StatArrow,
  StatNumber,
  Container,
  Grid,
  GridItem,
  Flex,
  Text,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

function StatsCard(props) {
  const { title, stat, desc } = props;
  return (
    <Stat
      backgroundColor={useColorModeValue('white', 'gray.700')}
      px={{ base: 4, md: 8 }}
      py={'5'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.300', 'gray.700')}
      rounded={'md'}
    >
      <StatLabel
        color="blue.500"
        fontSize={'2xl'}
        fontWeight={'light'}
        isTruncated
      >
        {title}
      </StatLabel>
      <StatNumber fontSize={'3xl'} fontWeight={'extrabold'}>
        {stat}
      </StatNumber>
      <StatHelpText fontSize={'md'} fontWeight={'bold'} isTruncated>
        {desc}
      </StatHelpText>
    </Stat>
  );
}

export default function AdminStatistics() {
  return (
    <>
      <Box pt={5} px={{ base: 2, sm: 12, md: 0 }}>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={'We serve'}
            stat={'61,741,120'}
            desc={'Women and Men'}
          />
          <StatsCard
            title={'Living in over'}
            stat={'12,930'}
            desc={' villages and towns'}
          />
          <StatsCard
            title={'Managed by'}
            stat={'184'}
            desc={' Local Authorities'}
          />

          <StatsCard
            title={'Distributed in'}
            stat={'26'}
            desc={' Regional Administration'}
          />
        </SimpleGrid>
      </Box>
      <Box marginY="4rem" paddingY="2rem">
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(5, 1fr)',
          }}
          gap={6}
        >
          <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
            <Heading
              fontSize={'2xl'}
              fontWeight={'medium'}
              lineHeight="tall"
              color={'gray.400'}
            >
              Service coverage, Information systems adoption/usage, facility
              service provision across 184 Local Authories as 2022/2023
              Financial Year.
            </Heading>
          </GridItem>
          <GridItem w="100%">
            <Flex flexDirection={'column'}>
              <Text fontSize={'5xl'} fontWeight={'bold'} color={'blue.500'}>
                70.34%
              </Text>
              <Box fontSize={'md'}>
                Description for the number. People always pay attention to
                numbers.
              </Box>
            </Flex>
          </GridItem>
          <GridItem w="100%">
            <Flex flexDirection={'column'}>
              <Text fontSize={'5xl'} fontWeight={'bold'} color={'blue.500'}>
                66.73%
              </Text>
              <Box fontSize={'md'}>
                Description for the number. People always pay attention to
                numbers.
              </Box>
            </Flex>
          </GridItem>
          <GridItem w="100%">
            <Flex flexDirection={'column'}>
              <Text fontSize={'5xl'} fontWeight={'bold'} color={'blue.500'}>
                80.69%
              </Text>
              <Box fontSize={'md'}>
                Description for the number. People always pay attention to
                numbers.
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
