import {Component} from 'react';
import styles from './Searchbar.module.scss'
import axios from 'axios'

// const AUTH_TOKEN = '21709969-2aaf655592c1caf292dc08cd8';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
class Searchbar extends Component {

    state ={
        query: '',
        // numberPAge: 1,
        // hits: [],
    }
    // componentDidMount(){
    //     const {query, numberPAge} = this.state;
    //     const key = '21709969-2aaf655592c1caf292dc08cd8';
    //     const url=`https://pixabay.com/api/?q=${query}&page=${numberPAge}&key=${key}&image_type=photo&orientation=horizontal&per_page=12` 
    //     // const pool = axios.get(url).then(response=>response.data).then(data=> this.setState({hits: data.hits})) 
    //     const pool = axios.get(url).then(response=>this.setState({hits: response.data.hits}))
    // }

    dadawda (e){
        e.preventDefault();
        this.props.onSubmit(this.state.query)
        this.setState({query: ''})
        // const {query, numberPAge} = this.state;
        // const key = '21709969-2aaf655592c1caf292dc08cd8';
        // const url=`https://pixabay.com/api/?q=${query}&page=${numberPAge}&key=${key}&image_type=photo&orientation=horizontal&per_page=12` 
        // console.log(url);

    }
    handlerChanged = (e)=>{
        this.setState({query: e.currentTarget.value});
    }
    render(){
        return(
            <header className={styles.Searchbar}>
                <form className={styles.SearchForm}>
                    <button type="submit" className={styles.SearchForm__button} onClick={()=>this.dadawda}>
                        <span className={styles.SearchForm__button__label}>Search</span>
                    </button>

                    <input
                        className={styles.SearchForm__input}
                        type="text"
                        autocomplete="off"
                        value={this.state.query}
                        autofocus
                        placeholder="Search images and photos"
                        onChange={this.handlerChanged}
                    />
                </form>

            </header>
        )
    }
}

export default Searchbar;