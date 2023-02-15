import searchImages from './api';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import { useState } from 'react';

function App(){

    const [images, setImages] = useState([]);

    //anytime you are 'updating content on the screen' you are ALWAYS using STATE!!!

    //must use the async and await keywords because you are making an API call
const handleSubmit = async (term) =>{
    const result = await searchImages(term);
    setImages(result);
}
 
    return(
        <div>  
            <SearchBar onSubmit={handleSubmit}/>
            <ImageList images={images}/>
        </div>
    );
} 

export default App;