import styles from './Button.module.scss'

// window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: 'smooth',
// });

const Button =()=>{
    return(
        <button type='"submit' className = {styles.Button}>Load more</button>
    )
}

export default Button;