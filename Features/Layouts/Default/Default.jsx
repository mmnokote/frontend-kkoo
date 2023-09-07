import { Box, useDisclosure } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

import Footer from '@/Features/common/modules/Footer/Footer';
import Navigation from '@/Features/common/modules/Navigation/Navigation';
import DialogTerms from '@/Features/Home/Terms/Terms';
import { MessagesProvider } from '@/Features/Contexts/messages';
import Chat from '@/Features/Chat/Chat';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Default = ({ children, items }) => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false });
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.25 }}
          >
            <Navigation />
            <MessagesProvider>
              <Box padding={{ base: '1rem', lg: '0px' }} position={'relative'}>
                <Chat />
                {children}
              </Box>
            </MessagesProvider>
            <Footer />
            <DialogTerms isOpen={isOpen} onClose={onClose} />
          </motion.div>
        </AnimatePresence>
      </QueryClientProvider>
    </>
  );
};

export default Default;
