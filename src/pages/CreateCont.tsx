import React, { useState,ChangeEvent } from 'react'
import {useEffect} from 'react'


function CreateCont(props: { passCont: (arg0: { name: string; contact: string; }) => void; }) {

  const [cont, setCont] = useState(
    {
      name: '',
      contact: '',
    }
  );

  const InputEvent = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setCont((prevData) => {
      return {
        ...prevData,
        [name]: value,
        // [contact]:value,
      };

    });
  };

  const addEvent = () => {

    props.passCont(cont);
  };
  return (
    <>
      <h1 className='text-xxl font-bold mx-5 justify-center text-center mt-10'>NO Contact Found Please Create Contact  </h1>
      {console.log("In Return")}
      <section>
        <div>
          <form className="p-10 md:w-2/3 lg:w-1/2 mx-auto rounded">
            <div className="shadow">
              <div className="flex items-center bg-gray-800 rounded-t-lg border-red-400 border-b my-5">
                <label className="w-20 text-right mr-8 p-4 text-purple-200">Name</label>
                <input type="text" name="name" onChange={InputEvent} value={cont.name} placeholder="Enter your name" className="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none text-white overflow-ellipsis overflow-hidden" />
              </div>
              <div className="flex items-center bg-gray-800 rounded-t-lg border-red-400 border-b my-5">
                <label className="w-20 text-right mr-8 p-4 text-purple-200">Name</label>
                <input type="text" name="contact" onChange={InputEvent} value={cont.contact} placeholder="Enter your name" className="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none text-white overflow-ellipsis overflow-hidden" />
              </div>
              {/* <div className="flex items-center bg-gray-800  rounded-b-lg border-red-400 mb-10">
              <label  className="w-20 text-right p-4 mr-8 text-purple-200">Contact</label>
              <input type="text" name="contactNo"  onChange={InputEvent} value={cont.contact} placeholder="Enter Contact No" className="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden" />
            </div> */}
            </div>
            <button className="bg-black block w-full rounded py-4 text-white font-bold shadow" onClick={addEvent}>Create</button>

          </form>
        </div>
      </section>
    </>
  );
}

export default CreateCont