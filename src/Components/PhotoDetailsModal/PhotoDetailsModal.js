import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react'
import './PhotoDetailsModal.css'

export const PhotoDetailsModal = function ({photo, isOpen, onClose}) {
  return isOpen && (
      <Modal isOpen={isOpen} onClose={onClose} size={'5xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader alignSelf={'center'}>{photo.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <img 
          //src={`${photo.URL.split('upload')[0]}upload/w_1000,ar_1:1,c_fill,g_auto${photo.URL.split('upload')[1]}`} 
          src={photo.URL}
          alt={photo.title} 
          className='modal-photo-image'/>
          <div className='modal-photo-meta-info'>
            {photo.description && 
            <p className='modal-photo-description'>
              {photo.description}
            </p>}
          </div>
        </ModalBody>

        <ModalFooter>
          <Button variant='ghost' mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}