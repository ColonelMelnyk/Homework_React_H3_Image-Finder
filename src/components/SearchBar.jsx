import {React, Component} from 'react';
export class SearchBar extends Component{
    state = {
        searchValue: ''
    }
    onHandleInput = event => {
        event.preventDefault();
        this.setState({searchValue: event.currentTarget.value });
    };
    onHandleSubmit = event =>{
        event.preventDefault();
       this.props.onSubmit(this.state.searchValue);
      
    };
    render(){
 return(
        <header >
        <form   onSubmit ={this.onHandleSubmit}>
            <button type="submit" ><span >Search</span></button>
            <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange ={this.onHandleInput}
            />
        </form>
        </header>
        )
    }
}