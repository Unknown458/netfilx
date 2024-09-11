import React, { forwardRef } from 'react'

function Input({
    label,
    type,
    className="",
    width ="md:min-w-[400px]  sm:min-w-full",
    bgcolor="bg-[#1616169f]",
    color ="text-white",
    colortext="text-white",
    textsize="text-[1.40 rem]",
    fontweight="font-semibold",
    font="font-netflix",
    height="md:h-16",
    ...props
},ref) {
  return (
   <>
   <div className={`relative   flex`}>
      <input placeholder=" " type={type}  {...props}
                ref={ref} className={`email
      sm:h-[55px] ${bgcolor}  border
      pl-5
      pt-4
      border-[#747474]  rounded-md
      ${className}
      ${width}
       ${height}
       ${fontweight}
       ${colortext}
        text-lg`} />

      <label htmlFor={type} id="label" className={`pointer-events-none font-medium ${font} ${textsize} ${color} absolute z-10 left-5 top-4  ` }>{label}</label>
</div></>
  )
}

export default forwardRef(Input)