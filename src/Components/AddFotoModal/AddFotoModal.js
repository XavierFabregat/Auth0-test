import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useToast
} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import './AddFotoModal.css'
import { userService } from '../../Service/userService'
import { useAuth0 } from '@auth0/auth0-react'

export const AddFotoModal = function ({isOpen, onClose}) {

    const [image, setImage] = useState();
    const [imageURL, setImageURL] = useState();

    const formRef = useRef();
    const toast = useToast();

    const { user } = useAuth0()

    const onImageChange = function (e) {
      setImage(e.target.files[0]);
    }

    const uploadImage = async function (image) {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', 'auth0-test');
      formData.append("cloud_name","dxmdycul0");
      const response = await fetch("https://api.cloudinary.com/v1_1/dxmdycul0/image/upload", {
        method: 'POST',
        body: formData,
      });
      const parsed = await response.json();
      console.log(parsed);
      return parsed;
    };

    const handleSubmit = async function () {
      const e = formRef.current;
      console.log(e);
      //e.preventDefault();
      if (!e.title.value || !image) return;
      const { url } = await uploadImage(image);
      const body = {
        title: e.title.value,
        description: e.description.value,
        URL: url,
        userId: user.sub,
      }
      const photosOfUser = await userService.postPhotoOfUser(body);
      if (!photosOfUser.error) {
        toast({
          title: 'Post Saved',
          status: 'success',
          duration: 9000,
          isClosable: true,
          position: 'top-right'
        })
      } else {
        toast({
          title: 'Error Saving Post',
          description: 'Please try again in a moment.',
          status: 'error',
          duration: 5000,
          isClosable: false,
          position: 'top-right'
        })
      }
      e.reset();
    }

    const handleReset = function (e) {
        formRef.current.reset();
        setImageURL(undefined);
        setImage(undefined);
    }

    useEffect(() => {
        if (!image) return;
        setImageURL(URL.createObjectURL(image));
    }, [image]);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit} className='add-foto-form' ref={formRef}>
                <label htmlFor='title'>Title*</label>
                <input type={'text'} required  title='title' id='title'/>
                <label htmlFor='description'>Description</label>
                <textarea type={'textarea'} title='description' id='description'/>
                <label htmlFor='image-file'>Image*</label>
                <input type="file" accept="image/*" onChange={onImageChange}/>
                {imageURL && <img src={imageURL} alt='selected file' className='selected-image-modal'/>}
            </form>
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='blue' mr={3} onClick={handleSubmit}>Submit</Button>
            <Button colorScheme='red' onClick={handleReset}>Reset</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}

