import {React, Component} from 'react';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component{
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDawn);
      }
    
      keydownHandler = event => {
        if (event.code === 'Escape') {
          this.props.closeTrigger();
        }
      };
    
      overlayHandler = event => {
        if (event.target === event.currentTarget) {
          this.props.closeTrigger();
        }
      };
      componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDawn);
      }
    render(){
        return createPortal(
            <div onClick = {this.overlayHandler}>
                <div>
                    <img src={this.props.image} alt= 'Error!' />
                </div>
            </div>,
        modalRoot
        );
    }
}