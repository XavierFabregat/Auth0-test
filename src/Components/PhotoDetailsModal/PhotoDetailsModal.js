import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './PhotoDetailsModal.css';
import { useAuth0 } from '@auth0/auth0-react';
import { userService } from '../../Service/userService';
import { useState } from 'react';

export const PhotoDetailsModal = function ({photo, isOpen, onClose}) {

  const { user } = useAuth0()

  const [isFavorite, setIsFavorite] = useState(photo.favorite);

  async function handleFavorite () {
    const photoFavorited = await userService.favoritePhoto({userId : user.sub, photoId: photo._id});
    setIsFavorite(photoFavorited.favorite);
    console.log(photoFavorited);
  }

  return isOpen && (
      <Modal isOpen={isOpen} onClose={onClose} size={'5xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader alignSelf={'center'}>{photo.title.slice(0,1).toUpperCase() + photo.title.slice(1)}</ModalHeader>
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
          <Button
          onClick={handleFavorite}>
            {isFavorite ? <AiFillHeart color='red'/> : <AiOutlineHeart />}
           </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}