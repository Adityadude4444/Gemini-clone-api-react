import React from 'react';

function Main() {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex justify-between items-center p-5'>
        <p className='text-2xl'>Gemini</p>
        <i className="fa-solid fa-user"></i>
      </div>
      <div className='p-9 px-[20%] flex flex-col'><span className='text-gradient text-6xl font-medium'>Hello, Dev</span>
      <span className='text-6xl font-medium text-gray-300'>How can I help you today?</span>
      <div className='lg:grid lg:grid-cols-4 gap-4 pt-32 hidden pb-10'>
        <div className='flex flex-col gap-5 rounded-lg bg-[#f0f4f9] p-8 justify-between border-2'><p>Give me ideas for what to do with what's in this image?</p><div className='flex justify-end'><i class="fa-solid fa-image"></i></div></div>
        <div className='flex flex-col gap-5 rounded-lg bg-[#f0f4f9] p-8 justify-between border-2'><p>As a social trend expert, explain a term</p><div className='flex justify-end'><i class="fa-solid fa-lightbulb"></i></div></div>
        <div className='flex flex-col gap-5 rounded-lg bg-[#f0f4f9] p-8 justify-between border-2'><p>Write a product description for a new type of toothbrush</p><div className='flex justify-end'><i class="fa-solid fa-pen"></i></div></div>
        <div className='flex flex-col gap-5 rounded-lg bg-[#f0f4f9] p-8 justify-between border-2'><p>Write code for a specific task, including edge cases</p><div className='flex justify-end'><i class="fa-solid fa-code"></i></div></div>
        
      </div>
      <div className="border rounded-full p-5 w-full flex justify-between">
        <input
          type="text"
          placeholder="Enter prompt"
        /><i class="fa-regular fa-paper-plane"></i></div>
      </div>
      
    </div>
  );
}

export default Main;
