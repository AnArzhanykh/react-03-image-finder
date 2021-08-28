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
      showModal: false,
      largeImageURL: '',
  }


  // componentDidMount(){
  //   window.addEventListener('keydown',this.handlekeyDown)
  // }
  // componentWillUnmount(){
  //   console.log(1);
  //   window.removeEventListener('keydown',this.handlekeyDown)
  // }

  componentDidUpdate(prevProps, prevState){
    if(prevState.searchQuery !== this.state.searchQuery){
      this.fetchImages()
    }
    // this.autoScrollDown()
  }

  // handlekeyDown = e=>{
  //   if(e.code === 'Escape'){
  //     this.togleModal()
  //   }
  // }

  togleModal =()=> {
    this.setState(({showModal})=>({showModal: !showModal}))
  }

  OpenModal =(e) =>{
    this.setState({largeImageURL: e});
    this.togleModal()
  }

  // closeModal =()=>{
  //   this.setState({largeImageURL: '' });
  //   this.togleModal()
  // }

  autoScrollDown = ()=>{
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
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
    this.autoScrollDown()
}



  render(){
    const {hits, isLoading, error, showModal, largeImageURL} =this.state;
    const shouldRenderloadMoreItem = (hits.length > 0) && !isLoading;
    const shouldRenderloadMoreButton = !isLoading && (hits.length > 11);


      return(
        <>
          {error && <h1>Error, try more</h1>}
          <Searchbar onSubmit={this.onChangeQuery}/>
          {isLoading &&  <Loader />}
          {shouldRenderloadMoreItem && (<ImageGallery hits={hits} onClick={this.OpenModal} />)}
          {shouldRenderloadMoreButton && (<Button onClick={this.fetchImages}/>)}
          {showModal && <Modal img={largeImageURL} closeModal={this.togleModal}/>}
        </>
      )
  }
}

export default App;
