import {Component} from 'react';
import styles from './Searchbar.module.scss'
import axios from 'axios'


class Searchbar extends Component {

    state ={
        searchText: '',
        numberPAge: 1,
    }
    
    dadawda (e){
        const {searchText, numberPAge} = this.state;
        e.preventDefault();
        const key = '21709969-2aaf655592c1caf292dc08cd8';
        const url=`https://pixabay.com/api/?q=${searchText}&page=${numberPAge}&key=${key}&image_type=photo&orientation=horizontal&per_page=12` 
        console.log(url);
    }
    handlerChanged = (e)=>{
        this.setState({searchText: e.target.value});
    }
    render(){
        return(
            <header className={styles.Searchbar}>
                <form className={styles.SearchForm}>
                    <button type="submit" className={styles.SearchForm__button} onClick={this.dadawda.bind(this)}>
                        <span className={styles.SearchForm__button__label}>Search</span>
                    </button>

                    <input
                        className={styles.SearchForm__input}
                        type="text"
                        autocomplete="off"
                        value={this.state.searchText}
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