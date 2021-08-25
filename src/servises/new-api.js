import axios from "axios";

// const AUTH_TOKEN = '21709969-2aaf655592c1caf292dc08cd8';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const fetchImage = ({searchQuery = '', currentPage = 1, pageSize = 12})=>{
    const key = '21709969-2aaf655592c1caf292dc08cd8';
    const url=`https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${key}&image_type=photo&orientation=horizontal&per_page=${pageSize}` 
    return(

        
        axios.get(url).then(response=> response.data.hits)
    )
}

export default {fetchImage};