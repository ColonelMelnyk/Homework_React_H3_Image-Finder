import {React, Component} from 'react';
export const imageGalleryItem =({image}) =>{
const {webformatURL, tags, largeImageURL} = image;
    return(
        <li class="gallery-item">
  <img src={webformatURL} alt={tags} />
        </li>   
    )
}