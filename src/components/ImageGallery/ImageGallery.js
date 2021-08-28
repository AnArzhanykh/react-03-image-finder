import ImageGalleryItem from '../ImageGalleryItem'
import styles from './ImageGallery.module.scss'

const ImageGallery = ( {hits, onClick, togleModal} )=>{
    const ListItem = hits.map(({id, webformatURL, largeImageURL, tags})=> <ImageGalleryItem key ={id} webformatURL={webformatURL} largeImageURL={largeImageURL}tags={tags} onClick={onClick}/>)
    return(
            <ul className={styles.ImageGallery}>
                {ListItem}
            </ul>
    )
}

export default ImageGallery;