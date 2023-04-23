 import React from 'react'
//  import {Link, NavLink} from 'react-router-dom'
 import { SidebarData } from '../data/SideBarData'
import { NavLink } from 'react-router-dom'
 
 
 function Sidebar() {
const activLink='hover:bg-red-500 mt-7 pl-7 w-full h-14 flex justify-start items-center text-white text-2x1 space-x-1 font-bold bg-red-500';
const normalLink='hover:bg-red-500 mt-7 pl-7 w-full h-14 flex justify-start items-center text-white text-2x1 space-x-1 font-bold ';

   return (
    <>
   <section>
    <div>
   {SidebarData.map((item,index)=>
   {
    return(

      <div key={index}>
        {/* className=' hover:bg-red-500 pl-5 mt-11 px-2  text-white flex h-14 justify-start items-center w-full text-2xl space-x-1 font-bold '  */}
        <NavLink to={item.path}
        className={({isActive})=>
        isActive?activLink:normalLink
        } >
        <span className='px-3'>{item.icon}</span>
        <span>{item.title}</span>
        </NavLink>
        </div>
    )
   }
   )};
    </div>
   </section>
    
       
       </>
   )
 }
 
 export default Sidebar