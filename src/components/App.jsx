import {React, Component} from 'react';
import { SearchBar } from './SearchBar';
import { toast } from 'react-toastify';
export class App extends Component{
  state ={
    images: [],
    isLoading: false,
    page: 1,
    search: '',
    showModal: false,
    selectedImage: '',
    total: 0,
  }
  handleSearchSubmit = pictureDesc =>{
    this.setState({pictureDesc});
  }
  render(){
    return(
      <div>
      <SearchBar onSubmit ={this.handleSearchSubmit} />
      <imageGallery/>
      </div>
   
    );
  }
}