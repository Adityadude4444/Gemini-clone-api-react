import React, { useContext } from 'react'
import { Context } from '../context/Context';
import sendIcon from '../assets/send_icon.png';

function Input() {
    const {
        prop,
        setprop,
        onSent,
      } = useContext(Context);
  return (
    <div className='fixed bottom-0 left-0 w-full px-[15%] '>
        <div className="border rounded-full p-5 w-full flex justify-between items-center">
          <input
            type="text"
            placeholder="Enter prompt"
            value={prop}
            className='w-3/4 transition-all duration-300 focus:w-full focus:outline-none focus:ring-0'
            onChange={(e) => setprop(e.target.value)}
          />
          <img
            src={sendIcon}
            alt="Send"
            className='w-8 cursor-pointer'
            onClick={() => onSent(prop)}
          />
        </div>
      </div>
  )
}

export default Input