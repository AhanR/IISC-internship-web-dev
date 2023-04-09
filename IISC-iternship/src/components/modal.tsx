import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

export default function Modal({children} : WrapperProps) {
  return (
    <div
      className=" w-screen h-screen bg-black bg-opacity-60 fixed top-0 left-0 z-50 flex justify-center items-center "
    >
      <div
        className="container w-[90%] h-[90%] block rounded-[1.5ch] bg-slate-50 opacity-100 p-[4ch] text-black relative box-border"
      >
        {children}
      </div>
    </div>
  )
}