import React, { useContext } from 'react';
import geminiIcon from '../assets/gemini_icon.png';
import { Context } from '../context/Context';
import Input from './input';

function Main() {
  const {
    prop,
    setprop,
    result,
    showresult,
    loading,
    recentprop,
    onSent,
  } = useContext(Context);

  return (
    <div className='flex flex-col gap-5'>
      <div className='flex justify-between items-center p-5'>
        <p className='text-2xl'>Gemini</p>
        <i className="fa-solid fa-user"></i>
      </div>

      {!showresult ? (
        <div className='p-9 px-[15%] flex flex-col'>
          <span className='text-gradient text-6xl font-medium'>Hello, Aditya.</span>
          <span className='text-6xl font-medium text-gray-300'>How can I help you today?</span>
          <div className='lg:grid lg:grid-cols-4 gap-4 pt-32 hidden pb-10'>
            <div className='flex flex-col gap-5 rounded-lg bg-[#f0f4f9] p-8 justify-between border-2 hover:bg-gray-200 cursor-pointer'>
              <p>Give me ideas for what to do with what's in this image?</p>
              <div className='flex justify-end'>
                <i className="fa-solid fa-image"></i>
              </div>
            </div>
            <div className='flex flex-col gap-5 rounded-lg bg-[#f0f4f9] p-8 justify-between border-2 hover:bg-gray-200 cursor-pointer'>
              <p>As a social trend expert, explain a term</p>
              <div className='flex justify-end'>
                <i className="fa-solid fa-lightbulb"></i>
              </div>
            </div>
            <div className='flex flex-col gap-5 rounded-lg bg-[#f0f4f9] p-8 justify-between border-2 hover:bg-gray-200 cursor-pointer'>
              <p>Write a product description for a new type of toothbrush</p>
              <div className='flex justify-end'>
                <i className="fa-solid fa-pen"></i>
              </div>
            </div>
            <div className='flex flex-col gap-5 rounded-lg bg-[#f0f4f9] p-8 justify-between border-2 hover:bg-gray-200 cursor-pointer'>
              <p>Write code for a specific task, including edge cases</p>
              <div className='flex justify-end'>
                <i className="fa-solid fa-code"></i>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='p-9 px-[15%] flex flex-col max-w-5xl'>
          <div className='p-8 flex gap-5 items-center'><i className="fa-solid fa-user"></i> {recentprop}</div>
          {loading ?
            <div className='flex p-6'><img src={geminiIcon} className='max-h-10'/><div className='flex flex-col w-full gap-3'><div className='w-full bg-gradient-to-r from-[#9ed7ff] via-transparent to-[#9ed7ff] p-2'></div>
            <div className='w-full bg-gradient-to-r from-[#9ed7ff] via-transparent to-[#9ed7ff] p-2'></div>
            <div className='w-full bg-gradient-to-r from-[#9ed7ff] via-transparent to-[#9ed7ff] p-2'></div>
            <div className='w-full bg-gradient-to-r from-[#9ed7ff] via-transparent to-[#9ed7ff] p-2'></div></div>
            
          </div> : <div className='p-6 flex gap-3'><img src={geminiIcon} className='max-h-10'/>
  <div dangerouslySetInnerHTML={{ __html: result }} />
</div>
}
        </div>
      )}
    <Input/>
      
    </div>
  )
}

export default Main;
