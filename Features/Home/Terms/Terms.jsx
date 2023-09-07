import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
function DialogTerms({ onClose, isOpen }) {
  return (
    <>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody
            padding="3rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box width="3xl">
              <Text size="3xl" fontWeight="medium">
                We use cookies to analyze site performance and deliver
                personalized content. By clicking “Agree”, you consent to our
                Cookie Policy. You may change your settings at any time.
              </Text>
              <Box marginTop="1rem" textAlign="center">
                <Stack
                  spacing={4}
                  direction="row"
                  align="center"
                  justify="center"
                >
                  <Button colorScheme="blue" size="md" onClick={onClose}>
                    I Agree
                  </Button>
                  <Button colorScheme="gray" size="md" onClick={onClose}>
                    I Decline
                  </Button>
                </Stack>
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DialogTerms;
