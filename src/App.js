import "./App.css";
import ImageGallery from './components/ImageGallery'
import Searchbar from './components/Searchbar'
import Button from './components/Button'
import Modal from './components/Modal'

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


function App() {
  return <>
    <Searchbar />
    <ImageGallery />
    <Button />
    <Modal />
    <Loader type="Circles" color="#00BFFF" height={80} width={80}/> 
  </>;
  
}

export default App;
