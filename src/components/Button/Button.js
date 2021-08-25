import styles from './Button.module.scss'

// window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: 'smooth',
// });

const Button =(props)=>{
    const loadMoreImages=()=>{
        props.onClick()
    }
    return(
        <button type='"submit' className = {styles.Button} onClick={loadMoreImages}>Load more</button>
    )
}

export default Button;