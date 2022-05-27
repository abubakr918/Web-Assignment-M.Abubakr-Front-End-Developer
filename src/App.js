import React from 'react';
//import {useState} from 'react'
import Search from './components/search';
import Details from './components/details'
import Events from './components/events'
import './App.css';                    
import {Routes, Route ,BrowserRouter } from "react-router-dom";


            function App() {
  return (
    <div className="App">
                 <div className="routes">
          
         <BrowserRouter>
          <Routes>
              <Route path="/"
              element= {<Search/>}
              />
              <Route path="/artists/:artistname"
              element= {<Details/>}
              />
              <Route path="/artists/:artistname/events"
              element={<Events/>}
              />
             
            
          </Routes>
          </BrowserRouter>
     
        </div> 

            

</div>

  );
}
export default App;
