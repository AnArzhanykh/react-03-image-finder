import styles from './Modal.module.scss'
import {Component} from 'react';

// const Modal =({img, closeModal}) =>{
//     return(
//         <div className={styles.Overlay} onClick={closeModal}>
//             <div className={styles.Modal}>
//                 <img src={img} alt="" />
//             </div>
//         </div>
//     )
// }

// export default Modal;

class Modal extends Component {


    componentDidMount(){
    window.addEventListener('keydown',this.handlekeyDown)
    }

    componentWillUnmount(){
    window.removeEventListener('keydown',this.handlekeyDown)
    }

    handlekeyDown = e=>{
        const {closeModal} = this.props;
        if(e.code === 'Escape'){
            closeModal()
        }
    }

    handlBackdropClick =event=>{
        const {closeModal} = this.props;
        if(event.currentTarget === event.target){                
           closeModal()
        }
    }

    render(){
        const {img} = this.props;
        return(
            <div className={styles.Overlay} onClick={this.handlBackdropClick}>
                <div className={styles.Modal} >
                    <img src={img} alt="" />
                </div>
            </div>
        )
    }
}

export default Modal;