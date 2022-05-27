import React , {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import './search.css';
//import {BsSearch} from "react-icons/bs";

function Search() {

  const [artist,setArtist] = useState();
  const push = useNavigate();
  const handleChange=(e) => {
    setArtist(e.target.value);
}


const handleSubmit=(e) => {
    e.preventDefault();
    
    push(`/artists/${artist}`) 
}
  return (

   
    <div className="email-container">
       <h3 className="title">Search Your Favourite Artist For Upcoming Events </h3>
    <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
            <input className="inputfield1" 
            onChange= {handleChange}
            value={artist}
            placeholder='Enter Artist Name Here'
             name="artist" required
             />
             <input type="submit"
              value="Search" 
              name="submit" className="inputfield2" />
        </div>
        </form>
            </div>
  )
}

export default Search