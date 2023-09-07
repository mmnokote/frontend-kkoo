import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
} from '@chakra-ui/react';
import React from 'react';

function DialogPromo({ onClose, isOpen }) {
  const cancelRef = React.useRef();
  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent padding={0}>
            <AlertDialogHeader>Promotional Adds</AlertDialogHeader>

            <AlertDialogBody>
              <Box>Sampled Description and</Box>
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default DialogPromo;
