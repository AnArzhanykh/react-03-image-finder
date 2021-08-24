import "./App.scss";
import ImageGallery from './components/ImageGallery'
import Searchbar from './components/Searchbar'
import Button from './components/Button'
import Modal from './components/Modal'
import Loader from './components/Loader'





function App() {
  return <>
    <Searchbar />
    <ImageGallery />
    <Button />
    {/* <Modal /> */}
    <Loader />
  </>;
  
}

export default App;
