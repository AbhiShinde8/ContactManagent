// import React from 'react'
import {  Route ,Router,Routes} from 'react-router-dom';
import Dashboard from './Dashboard';
import ChartMap from '../pages/ChartMap';
// import CreateCon from './CreateCon';

import Error from './Error';
import Sidebar from './Sidebar';
import EditCont from '../pages/EditCont';
import CreateCont from '../pages/CreateCont';
import { useState } from 'react';



function NavPag() {

  const [addCon, setAddCon]=useState([]);

  const addCont=(cont)=>{

    setAddCon((prevData)=>{
      return [...prevData,cont];
    })
    // alert('call add cont ');
   
  }
  // return (
  //  <>
  //  <section>
    
  // <Routes>
  //     <Route  path="/" element={<Dashboard/>} />
  
  //     {/* <Route path="/CreateContact" element={<CreateCon />} /> */}
  //     <Route path="../pages/Contact" element={<Contact/>} />
  //     <Route path="../pages/ChartMap" element={<ChartMap/>} />
  //     <Route path="*" element={<Error/>} />
  //     </Routes>
      
  //   </section>
  //  </>
  // )
  return (
    <>    <Routes>
      {/* <div>
        <Sidebar /> */}
        {/* <Route path="/home" component={Home} /> */}
        <Route path="/ChartMap" element={<ChartMap />} />
        <Route path="/Contact" element={<EditCont />} />
        <Route path="/CreateCont" element={<CreateCont passCont={addCont} />} />
      {/* </div> */}
    </Routes>

    
    </>

  )
}

export default NavPag