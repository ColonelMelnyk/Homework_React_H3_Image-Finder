import {React, Component} from 'react';
import { toast } from 'react-toastify';
export class SearchBar extends Component{
    state = {
        pictureDesc: ''
    }
    handleInput = event => {
        event.preventDefault();
        this.setState({pictureDesc: event.currentTarget.value });
        console.log(event.currentTarget.value);
    };
    handleSubmit = event =>{
        event.preventDefault();
        this.props.onSubmit(this.state.pictureDesc);
        if(this.state.pictureDesc.trim() === ''){
            toast.error('Введіть дані!')
            return;
        }
        console.log(this.state.pictureDesc);
        this.setState({pictureDesc : ''});
      
    };
    render(){
 return(
        <header >
        <form   onSubmit ={this.handleSubmit}>
            <button type="submit" ><span >Search</span></button>
            <input
            type="text"
            placeholder="Search images and photos"
            value={this.state.pictureDesc}
            onChange ={this.handleInput}
            />
        </form>
        </header>
        )
    }
}