import { useState } from 'react';
import './SearchBar.css';

function SearchBar({onSubmit}){
    const[term, setTerm] = useState('');

    const handleFormSubmit = (event) =>{
        event.preventDefault(); // the prevent default prevents the browser from reloading because it does this with form elements where it tries to collect all the data immediately and it clears out the input box on default
        onSubmit(term);
    }

    const handleChange = (event) => { 
        setTerm(event.target.value);
    }


    return(
        <div className = "search-bar">
            <form onSubmit = {handleFormSubmit}>
                <label>Enter Search Term</label>
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    )
}

export default SearchBar;


//you MUST plug term back into as the value of the input so that React has control of the term and we can work with it! that is why the step is necessary
//by using a form element you only have to wire up a single event handler instead of a seperate one for input and button
//anytime you have an event handler on a plain jsx the event parameter is always there
//form with an input inside of it is why we can detec the enter key press
//we are destructuing out onSubmit from the props, but if we had a lot of props we could also just put (props) in for the variable