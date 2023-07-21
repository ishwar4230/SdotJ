import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import "./requestpagestyle.css";
const RequestsPage = () => {
  let req = [["Dhruv", "1234567890", 100], ["Pratush", "3456789012", 69], ["Ishwar", "6204567089", 200]];
  const [requests, setrequests] = useState(req);
  const accepted = (ind) => {

    let tempreq = [...requests];
    tempreq.splice(ind, 1);
    setrequests(tempreq);
  }
  const declined = (ind) => {
    let tempreq = [...requests];
    tempreq.splice(ind, 1);
    setrequests(tempreq);
  }
  if(requests.length==0)
  {
    document.getElementById('no-req').innerHTML='No more Requests remaining!'
  }
  return (
    <div>
      <div className='req-page'>
        <p id='req-head'>You Have following booking requests: </p>
        <div id='no-req'></div>
        {requests.map((reqval, ind) => {
          return (
            <div className='requests' key={toString(reqval)}>
              <p>Name of client : {reqval[0]}</p>
              <p>Contact No : {reqval[1]}</p>
              <p>No of Persons requested for : {reqval[2]} </p>
              <div className='acc-dec'>
                <button onClick={()=>accepted(ind)}>Accept</button>
                <button onClick={()=>declined(ind)}>Decline</button>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  )
}

export default RequestsPage