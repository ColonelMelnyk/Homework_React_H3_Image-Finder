import {React, Component} from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
export class ImageGallery extends Component{
    render(){
        return(
            <ul className="gallery">
                {this.props.images.map(image =>{
                    return(
                        <ImageGalleryItem
                        image= {image}
                        key={image.id}
                        toggleModal={this.props.toggleModal}
                        />
                    );
                })}
            </ul>
        )
    }
}