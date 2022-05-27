import React ,{useState, useEffect} from 'react';
import './details.css'
import {useNavigate, useParams} from 'react-router-dom';
import { getArtist } from '../dataservices/api';

function Details() {


 
  const {artistname} = useParams();
  const [details,setDetails] = useState([]);
  //const [count, setCount]= useState([]);

  useEffect(() => {
    getArtist(artistname)
    .then(res => setDetails([res]));
  },[])

  const push = useNavigate();
 


const handleClick=(artistname) => {

    push(`/artists/${artistname}/events`) 
}




   return(

    
    <div className="grids">
      <p className="count-para">{details.length} Results found for "{artistname}"</p>
    {details.map((item,key)=> (
    <>
    <div className="grid" key={key}  onClick={() => handleClick(item.name)}>
      <img className="grid-img"
        src={item.thumb_url} alt='error'></img>
       <div className="fb-account-details"> 
       <p className="grid-para1">{item.name}</p>
        <p className="grid-para2">{item.facebook_page_url}</p>
       </div>
    </div>
    <h3>Click on Me to see Upcoming Events</h3>
    
    </>
    
    ))}
 </div>
  )
}
export default Details