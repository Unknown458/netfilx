import React from 'react'
import { useState } from 'react'
import { BsPlusLg } from "react-icons/bs";
function Listbox({listtitle, content,content2}) {
    const [view,setview] = useState(false)
 const handel = (e) => {
   setview(e.target.value = !view)
   
 }
  return (
    <>
    <div className="w-full  mt-2 h-20 bg-[#2D2D2D] flex   px-8 items-center justify-between">
<div className="text-white font-netflixnormal sm:text-[1.3rem] lg:text-[1.6rem] font-medium"> {listtitle}</div> <div className={view ? "rotate-45 transition-all ease-out 0.3s" : "rotate-0 transition-all ease-out 0.3s"}>
    
    <BsPlusLg onClick={handel}  values={view} className="text-white size-10 plus"/></div>
 </div>
  <div className={view ? "block" : "hidden"}>
  <div className="w-full py-4 text-white font-netflixnormal text-[1.6rem] font-medium px-6  bg-[#2D2D2D] mt-[2px] ">
  {content} <br /> <br /> {content2}
  </div>
  </div>
  </>
  )
}

export default Listbox