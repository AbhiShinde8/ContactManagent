import React from 'react'
import Sidebar from './Sidebar'
// import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import NavPag from './NavPag'


function Dashboard() {
  return (
   <>
   {/* heding section  */}
   <section>
   {/* <h1>THis Is Dashboard main page in browser</h1> */}
    <div>
   <Navbar />

    </div>
   </section>

   {/* sidebar Section  */}
   <section className='justify-evenly'> 
    <div className='grid grid-cols-12'>
    <div className='col-span-2 bg-black h-screen pl-2'>
     <Sidebar />
    </div>
    <div className='col-span-10 bg-green-200 h-screen p-2'>
<NavPag />


    </div>
    </div>
   </section>
 
   
   {/* <Outlet /> */}
   </>
  )
}

export default Dashboard