function ImageShow({image}){
    return<div>
        <img src={image.urls.small} alt={image.alt_description}/>
    </div>;
}

export default ImageShow ; 

//API request for axios structure
//has header and params
//header contains authorization codes
//params is the actual request object/query string 

//for sorting and swapping elements - if we apply a key prop to the imageshow item it makes it easier to swap
//applying a key to each element during the mapping step, allows you to after re-render compare the keys on each ImageShow to the keys from the previous render, and then your
//DOM only has to apply a minimal set of changes to the existing DOM elements
//!!! always add a key everytime you are doing a mapping step!!