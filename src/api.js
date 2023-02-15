import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID RHl78RSVmm1_iAQHlQFitiyccOKKdb_CCIM0j_UjoAE',
        },
        params: {
            query: term,
        }
    });
    return response.data.results;
};

export default searchImages;









//can I make multiple API call functions in this file?
const getMovies = async () => {
    const response = await axios.get('https://reactnative.dev/movies.json').catch(err =>{
        console.log(err);
    })
        return response;
};

// export getMovies;


//make a dog breeds API call



//query is going to have the search term
//header contains authorization token
//params contains the parameters
//get is the location of the server
//ALSO API REQUESTS MUST ALWAYS HAVE ASYNC() and AWAIT because it takes time to get the data from the server
//and you need to make a response variable to store the response from the .get call
//and then you can return the response for your arrow function
//in order to use the await keyword inside of a function you also ahve to use async()