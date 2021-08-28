import styles from './Button.module.scss'



const Button =(props)=>{
    const {onClick} = props;
    return(
        <button type='submit' id ="loader"className = {styles.Button} onClick={onClick}>Load more</button>
    )
}

export default Button;