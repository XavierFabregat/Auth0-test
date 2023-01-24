import { withAuth } from '../../Auth/withAuth'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import './Dashboard.css'
import { useDisclosure } from '@chakra-ui/react'
import { AddFotoModal } from '../AddFotoModal/AddFotoModal';
import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { userService } from '../../Service/userService';
import { Photo } from '../Photo/Photo';
import { PhotoDetailsModal } from '../PhotoDetailsModal/PhotoDetailsModal';

const NoAuthDashboard = function () {

    const { 
        isOpen : isFormModalOpen,
        onOpen: onFormModalOpen, 
        onClose: onFormModalClose 
    } = useDisclosure();

    const { 
        isOpen : isPhotoModalOpen,
        onOpen: onPhotoModalOpen, 
        onClose: onPhotoModalClose 
    } = useDisclosure();

    const { user } = useAuth0();
    const [photos, setPhotos] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState({});

    useEffect(() => {
        (async function (id) {
            setPhotos((await userService.getUser(id)).photos);
        })(user.sub)
    }, [isFormModalOpen]);

    return(
        <div className='dashboard-page-wrapper'>
            <div className='dasboard-photos'>
                {photos.map(photo => {
                    console.log(photo.URL)
                    return <Photo photo={photo} key={photo._id} onClick={() => {
                        onPhotoModalOpen();
                        setSelectedPhoto(photo);
                    }}/>
                })}
            </div>
            <PhotoDetailsModal onClose={onPhotoModalClose} isOpen={isPhotoModalOpen} photo={selectedPhoto} />
            <button 
            className='dashboard-add-photo' 
            onClick={onFormModalOpen}>
                <AiOutlinePlusCircle size={'50px'} color={'rgb(0, 60, 255)'} className='dashboard-add-photo-icon'/>
            </button>
            <AddFotoModal onClose={onFormModalClose} isOpen={isFormModalOpen}/>
        </div>
    )
};

export const Dashboard = withAuth(NoAuthDashboard);