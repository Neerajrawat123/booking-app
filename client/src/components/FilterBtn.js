import React from 'react'
import { IoFilterSharp } from 'react-icons/io5'
import Popup from 'reactjs-popup'

function FilterBtn() {

  const ActionBtn = ({children}) =>  (
    <button className='border px-4 py-3 rounded-lg flex items-center gap-2 font-semibold'>
    <IoFilterSharp />
    <span>Filters</span>
  </button>

  )

  
  return (
    // <div className='flex items-center pt-8 '>
       <Popup
    trigger={  <button className='border px-4 ml-6 rounded-lg flex items-center gap-2 font-semibold' >
    <IoFilterSharp />
    <span>Filters</span>
  </button>}
    modal
    nested
  >
    {close => (
      <div className="modal w-[70vw] h-[90vh] bg-slate-500 text-lg">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="bg-orange-500"> Modal Title </div>
        <div className="content">
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
          Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
          delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
          commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
          explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
        </div>
       
      </div>
    )}
  </Popup>
   
  // </div>
  )
}

export default FilterBtn