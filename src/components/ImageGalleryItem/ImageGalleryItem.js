import styles from './ImageGalleryItem.module.scss'

const ImageGalleryItem = ({hits})=> {
        
    console.log(hits);
    return(
        <li className={styles.ImageGalleryItem}>
            <img src="" alt="" className={styles.ImageGalleryItem__image} />
        </li>
    )
}

export default ImageGalleryItem;