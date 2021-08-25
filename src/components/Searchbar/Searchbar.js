import {Component} from 'react';
import styles from './Searchbar.module.scss'
import axios from 'axios'

class Searchbar extends Component {

    state ={
        query: '',
    }

    sendQuery = (e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state.query)
        this.setState({query: ''})
    }

    handlerChanged = (e)=>{
        this.setState({query: e.currentTarget.value});
    }

    
    render(){
        return(
            <header className={styles.Searchbar}>
                <form className={styles.SearchForm}>
                    <button type="submit" className={styles.SearchForm__button} onClick={this.sendQuery}>
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