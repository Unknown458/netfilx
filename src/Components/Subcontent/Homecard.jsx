import React, { useState } from 'react'

function Homecard({title1,title2,img,video,topset = false}) {

 

  

  return (
    
 <div className=" py-[2.7rem]  grid xl:grid-cols-2 lg:grid-cols-2 xl:gap-15 lg:gap-20 sm:justify-center sm:px-10 lg:px-10 bg-transparent">
  
 <div className="   flex flex-nowrap flex-col justify-center sm:w-full lg:w-[500px] xl:w-[520px] xl:ml-32 xl:items-center">
<div className="text-white flex   text-wrap font-extrabold font-netflix   lg:text-[3.6rem] sm:text-[2.2rem] lg:justify-start  sm:w-full  sm:justify-center ">{title1}</div>
<div className="text-white text-wrap font-normal font-netflixnormal  sm:w-full sm:flex lg:text-left sm:text-center  sm:justify-center  lg:text-[1.60rem] sm:text-[1.23rem] sm:font-medium lg:leading-8 flex-wrap mt-2 lg:min-w-[500px]  ">{title2}</div>
 </div>

<div className="w-full  relative  flex xl:items-center xl:justify-start sm:justify-center">
 <div className="overflow-hidden sm:w-[100%] md:w-[89%]  xl:w-[540px] lg:w-full lg:overflow-visible  ">

 <div className="relative  pt-[45px]  overflow-hidden ">
  <div className='lg:absolute sm:relative lg:z-10 sm:w-full lg:w-[100%] '>
<img src={img} alt="" className=" w-full  " />
</div>
<div >
  
  <div   className={ `flex lg:mb-[60px]  w-full overflow-hidden  justify-end items-end  ${topset ? "lg:mt-5 xl:mt-0"  : "lg:mt-[69px] "}  xl:justify-normal  ` }>
<video className={` ${topset?"lg:w-[65%]" :"lg:w-[87%]"} ${topset?"pb-[150px]" : "pb-0"} ${topset? "xl:w-[350px]" :"xl:w-[600px]"} ${topset?"xl:mt-5":"xl:mt-4"} ${topset?"xl:ml-[87px] lg:mr-[18%]" :"xl:ml-[70px]"} lg:mt-[0px] ${topset? "mr-[20%]" :"mr-[0px]"}  ${topset? "md:mt-[85px]" :"md:mt-[130px]"} lg:z-[0]

 ${topset?"sm:mt-[80px]" : "sm:mt-[130px]"}

${topset ? "sm:mt-0" :"sm:mt-[110px]"} ${topset? "sm:w-[64%]" : "sm:w-[87%]"} sm:absolute lg:relative  sm:z-[-1] sm:top-0 `} autoPlay loop muted playsInline src={video}></video>
</div>
</div>
</div>



</div>
</div>

</div>
  )
}

export default Homecard