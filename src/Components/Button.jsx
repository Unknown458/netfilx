import React from 'react'
import { BsChevronRight } from "react-icons/bs";
function Button({
    value,
    arrow = false,
    className="",
    backgroundColor = "bg-[#E50914]",
    color = "text-white",
    paddigtop = "py-2",
    paddingside = "px-5",
    textsize = "text-base",
    ...prop
}) {
  return (
   <>
<button  className={`${className} ${backgroundColor} ${paddingside} font-medium font-netflix ${textsize} ${paddigtop} ${color} rounded-md`} {...prop} >{value} {arrow ? <BsChevronRight style={{ fontSize: '20px', strokeWidth: '1' }} /> : null} </button>
   
   </>
  )
}

export default Button