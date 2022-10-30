import React from 'react';
import Details from '../Components/Details';
import logo from '../Images/log.jpg';

function Hompage() {
  return (
       <div className='content'>
        <div className='homepage flex'>
          <img src={logo} alt="logo"/>
          <h1>WELCOME TO</h1>
          <h1>NINE_GAP</h1>
        </div>
           <Details/>
       </div>
  )
}

export default Hompage;