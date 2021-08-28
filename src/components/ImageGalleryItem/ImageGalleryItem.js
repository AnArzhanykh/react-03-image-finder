import styles from './ImageGalleryItem.module.scss'

const ImageGalleryItem = ({webformatURL, tags, largeImageURL, onClick})=> {
    return(
        <li className={styles.ImageGalleryItem}>
            <img src={webformatURL}  alt={tags} className={styles.ImageGalleryItem__image} onClick={()=>onClick(largeImageURL)}/>
        </li>
    )
}

export default ImageGalleryItem;