import React, { useContext, useState } from "react";
import { Context } from "../context/Context";

export default function Sidebar() {
  const [extend, setextend] = useState(false);
  const { alreadyloaded, prevprop, setrecentprop,setshowresult} = useContext(Context);

  return (
    <div className="flex flex-col justify-between h-screen p-4 w-fit bg-[#f0f4f9] overflow-y-auto">
      <div className="flex flex-col gap-6">
        <i
          className="fa-solid fa-bars pl-2 cursor-pointer"
          onClick={() => {
            setextend((prev) => !prev);
          }}
        ></i>
        <div className="pt-10">
          <div className="w-fit p-3 rounded-full bg-gray-300 flex gap-2 items-center transition-all duration-300">
            <i className="fa-solid fa-plus"></i>
            {extend ? (
              <a  onClick={()=>setshowresult(false)}><p className="transition-opacity duration-300 cursor-pointer" >New chat</p></a>
            ) : null}
          </div>
        </div>
        {extend ? (
          <>
            <p className="pt-5 transition-all duration-300">Recent</p>
            <div className="flex flex-col gap-3 transition-opacity duration-300">
              {prevprop.map((pre, index) => {
                return (
                  <div
                    className="flex gap-3 items-center cursor-pointer"
                    onClick={async () => {
                      await alreadyloaded(pre);
                      setrecentprop(pre);
                    }}
                    key={index}
                  >
                    <i className="fa-regular fa-message"></i>
                    {pre.length <= 16 ? (
                      <p>{pre}</p>
                    ) : (
                      <p>{pre.slice(0, 16)}....</p>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        ) : null}
      </div>

      <div className="gap-4 flex flex-col">
        <div className="flex gap-3 items-center">
          <i className="fa-regular fa-circle-question"></i>
          {extend ? <p className="transition-opacity duration-300">Help</p> : null}
        </div>
        <div className="flex gap-3 items-center">
          <i className="fa-solid fa-clock-rotate-left"></i>
          {extend ? <p className="transition-opacity duration-300">Activity</p> : null}
        </div>
        <div className="flex gap-3 items-center">
          <i className="fa-solid fa-gear"></i>
          {extend ? <p className="transition-opacity duration-300">Settings</p> : null}
        </div>
      </div>
    </div>
  );
}
