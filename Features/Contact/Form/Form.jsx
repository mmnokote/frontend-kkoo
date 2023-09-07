import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react';

import Callcenter from '@/Features/Home/Callcenter/Callcenter';

function ContactForm() {
  return (
    <Box maxWidth="1440px" margin="0 auto">
      <Box paddingY="3rem">
        <Box marginY="2rem">
          <Heading size="lg" color="blue.500">
            Your Comments/Suggestions
          </Heading>
        </Box>
        <Flex justify="space-between" gap={10}>
          <Card>
            <CardBody>
              <Box flex={1}>
                <FormControl marginBottom={5}>
                  <FormLabel>Your Fullname</FormLabel>
                  <Input type="fullname" />
                </FormControl>
                <Flex gap="5" marginBottom={5}>
                  <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Mobile Number</FormLabel>
                    <Input type="mobile" />
                  </FormControl>
                </Flex>
                <FormControl marginBottom={5}>
                  <Select placeholder="Select option">
                    <option value="option1"> Maoni na Ushauri</option>
                    <option value="option1"> Kuhusu Maombi ya Ajira</option>
                    <option value="option2">Kuhusu Maomb ya Uhamisho</option>
                    <option value="option3">
                      Kuhusu Maombi ya Kubadilishana vituo vya kazi
                    </option>
                    <option value="option3">Kuhusu Mifumo</option>
                    <option value="option3">Kuhusu Elimu</option>
                    <option value="option3">Kuhusu Afya</option>
                    <option value="option3">
                      Kuhusu Miundombinu ya Barabara
                    </option>
                    <option value="option3">Kuhusu Ukusanyaji wa Mapato</option>
                  </Select>
                </FormControl>
                <FormControl marginBottom={5}>
                  <Textarea placeholder="Write your message here ..." />
                </FormControl>
                <FormControl as="fieldset">
                  <FormLabel as="legend" htmlFor={null}>
                    Favorite Method for Notification
                  </FormLabel>
                  <RadioGroup defaultValue="all">
                    <HStack spacing="30px">
                      <Radio value="email">Email</Radio>
                      <Radio value="sms">SMS</Radio>
                      <Radio value="all">All</Radio>
                    </HStack>
                  </RadioGroup>
                </FormControl>
              </Box>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue">Submit Request</Button>
            </CardFooter>
          </Card>
          <Box
            display="flex"
            flex={2}
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Text size="lg">Permanent Secretary,</Text>
              <Text>
                President's Office, Regional Administration and Local
                Government,
              </Text>
              <Text>P.o Box 1923,</Text>
              <Text>Dodoma - Tanzania.</Text>
              <Text>Telephone +255 262 321 234</Text>
              <Text>Mobile:</Text>
              <Text>Email address: ps@tamisemi.go.tz</Text>
            </Box>
            <Box>
              <Callcenter />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default ContactForm;
