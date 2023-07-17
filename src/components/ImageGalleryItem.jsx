import {React} from 'react';
export const ImageGalleryItem =({image, toggleModal}) =>{
const {webformatURL, tags, largeImageURL} = image;
const onHandleClickModal = () => {
    toggleModal(largeImageURL);
  };
    return(
        <li class="gallery-item">
  <img src={webformatURL} alt={tags} onClick ={onHandleClickModal} />
        </li>   
    )
}