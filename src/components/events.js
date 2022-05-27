

import React, { useState, useEffect } from 'react';
import { getArtist, getArtistEvents } from '../dataservices/api';
import './details.css'
import { useParams } from 'react-router-dom';
import './events.css';
import {useNavigate} from 'react-router-dom';

function Events() {


  
  const { artistname } = useParams();
  const [artist, setArtist] = useState({});

  useEffect(() => {
    getArtist(artistname)
      .then(data => setArtist(data));
  }, [])


  const [event_details, setEventdetails] = useState([]);

  useEffect(() => {
    getArtistEvents(artistname)
      .then(data => setEventdetails(data));
  })

  const push = useNavigate();
 


const handleClick=(artistname) => {

    push(`/artists/${artistname}`) 
}


  return (
    
    <>
       <button className="back-button" onClick={() => handleClick(artistname)}>Back to Results</button>
    
      <div className="detail-grid"  >
     
        <img className="grid-img"
          src={artist.thumb_url} alt='error'></img>
        <div className="fb-account-details">
          <p className="grid-para1">{artist.name}</p>
          <p className="grid-para2">{artist.facebook_page_url}</p>
        </div>
      </div>

      <h5 className="count-events">{event_details.length} Upcoming Events</h5>

      <div className="events">
        {event_details.map((item, key) => (
          <>
            
            <div className="event-grid" key={key}>

              <h5 className="event-heading">Event Details</h5>
              <hr className="line"/> 
             

             <div className="country-city">
                    <div > <p className="p1">Country</p>
                           <p className="country">{item?.venue?.country}</p>
                    </div> 
                     <div> <p className="p2">City</p>
                           <p className="city">{item?.venue?.city}</p>
                    </div>
            </div> 

            <div className="Name-date">
                   <div> <p className="p3">Name</p>
                          <p className="name">{item?.venue?.name}</p>
                    </div>
                   <div> 
                     <p className="p4">Date</p> 
                     <p className="date">{new Date(item?.datetime).toLocaleString()}</p>
                  </div>
            </div>
            </div>

          </>

        ))}
      </div>
    </>
  )
}

export default Events