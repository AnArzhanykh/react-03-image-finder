import ImageGalleryItem from '../ImageGalleryItem'
import styles from './ImageGallery.module.scss'

const ImageGallery = ({hits})=>{
    const {id, webformatURL, largeImageURL ,  } = hits;
        console.log(hits.id);

    return(
            <ul className={styles.ImageGallery}>
                <ImageGalleryItem hits={hits}/>
            </ul>
    )
}

export default ImageGallery;