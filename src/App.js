import "./App.scss";
import {Component} from 'react';
import ImageGallery from './components/ImageGallery'
import Searchbar from './components/Searchbar'
import Button from './components/Button'
import Modal from './components/Modal'
import Loader from './components/Loader'
import axios from "axios";





// function App() {

//   const onChangeQuery = query =>{
//     console.log(query);
//     const numberPAge = 1;
//         const key = '21709969-2aaf655592c1caf292dc08cd8';
//         const url=`https://pixabay.com/api/?q=${query}&page=${numberPAge}&key=${key}&image_type=photo&orientation=horizontal&per_page=12` 
//         // const pool = axios.get(url).then(response=>response.data).then(data=> this.setState({hits: data.hits})) 
//         const pool = axios.get(url).then(response=>this.setState({hits: response.data.hits}))
//   }
//   return <>
//     <Searchbar onSubmit={onChangeQuery}/>
//     <ImageGallery />
//     <Button />
//     {/* <Modal /> */}
//     <Loader />
//   </>;
  
// }

// export default App;



class App extends Component {

  state ={
      hits: [],
  }

  onChangeQuery (query) {

    console.log(query);
    const numberPAge = 1;
        const key = '21709969-2aaf655592c1caf292dc08cd8';
        const url=`https://pixabay.com/api/?q=${query}&page=${numberPAge}&key=${key}&image_type=photo&orientation=horizontal&per_page=12` 
        // const pool = axios.get(url).then(response=>response.data).then(data=> this.setState({hits: data.hits})) 
        const pool = axios.get(url).then(response=>this.setState({hits: response.data.hits}))
  }

  render(){
      return(
        <>
          <Searchbar onSubmit={this.onChangeQuery.bind(this)}/>
          <ImageGallery />
          <Button />
          {/* <Modal /> */}
          <Loader />
        </>
      )
  }
}

export default App;
