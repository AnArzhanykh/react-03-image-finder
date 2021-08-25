import "./App.scss";
import {Component} from 'react';
import ImageGallery from './components/ImageGallery'
import Searchbar from './components/Searchbar'
import Button from './components/Button'
import Modal from './components/Modal'
import Loader from './components/Loader'
import newApi from './servises/new-api.js'


class App extends Component {

  state ={
      hits: [],
      currentPage: 1,
      searchQuery: '',
      isLoading: false,
      error: null,
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.searchQuery !== this.state.searchQuery){
      this.fetchImages()
    }
  }

  onChangeQuery = (query)=> {
    this.setState({searchQuery: query, currentPage: 1, hits: [], error: null} )

  }

  fetchImages =()=>{
    const {searchQuery, currentPage} = this.state
    const options ={searchQuery, currentPage,}
    this.setState({isLoading: true})
    

   newApi.fetchImage(options).then(hits => {
      this.setState(prevState =>({
        hits: [...prevState.hits, ...hits],
        currentPage: prevState.currentPage + 1,
      }))
    }).catch(error=>this.setState({error})).finally(()=>this.setState({isLoading: false}))
  }

  render(){
    const {hits, isLoading, error} =this.state
    const shouldRenderloadMoreItem = (hits.length > 0) && !isLoading
      return(
        <>
          {error && <h1>Error, try more</h1>}
          <Searchbar onSubmit={this.onChangeQuery}/>
          {isLoading &&  <Loader />}
          {shouldRenderloadMoreItem && (<ImageGallery hits={hits}/>)}
          {shouldRenderloadMoreItem && (<Button onClick={this.fetchImages}/>)}
          {/* <Modal /> */}
         
        </>
      )
  }
}

export default App;
