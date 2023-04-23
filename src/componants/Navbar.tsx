import React from 'react'
import {RiContactsBook2Fill} from 'react-icons/ri'

function Navbar() {
  return (
    <>
    <section>
        <div className='bg-black h-20 w-full flex items-center pl-10 space-x-4'>
            <div>
                <RiContactsBook2Fill className='text-white text-4xl' />
            </div>
            <div>
                <p className='text-white text-3xl'>Contact Managment</p>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Navbar