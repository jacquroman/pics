import ImageShow from './ImageShow';
import './ImageList.css'

function ImageList({images}){
    const renderedImages = images.map((image) => {
        return <ImageShow className="img" key={image.id} image={image} />;
    });

    return <div className="image-list" >{renderedImages}</div>;
}

export default ImageList;

//everytime you do a map call you should add a key!
//add the key to the top-most JSX element in the list!! if you have a <div ></div> wrapping element, you have to move the key up to the wrapping div
//must be a string or number
//should be unique for this list
//should be consistent across renders

//in react you are almost ALWAYS fetching data from an outside API, and that API is getting data out of a database
//every database you ever use will ALWAYS assign records with a unique identifier
//if you ever DON'T have an ID then you can either use the index of the record as you iterate through with a for loop, or generate a unique ID by yourself

//controlled components are those where you handle the value in on change props