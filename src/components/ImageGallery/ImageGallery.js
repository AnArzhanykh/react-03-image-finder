import ImageGalleryItem from '../ImageGalleryItem'
import styles from './ImageGallery.module.scss'

const ImageGallery = ( {hits, onClick, togleModal} )=>{
    // hits.map(({id, webformatURL, largeImageURL, tags})=> <ImageGalleryItem key ={id} webformatURL={webformatURL} largeImageURL={largeImageURL}tags={tags} onClick={onClick}/>)
    return(
            <ul className={styles.ImageGallery}>
                {hits.map(({id, webformatURL, largeImageURL, tags})=> <ImageGalleryItem key ={id} webformatURL={webformatURL} largeImageURL={largeImageURL}tags={tags} onClick={onClick}/>)}
            </ul>
    )
}

export default ImageGallery;