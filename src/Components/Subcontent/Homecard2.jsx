import React from 'react'

function Homecard2({title1,title2,img,box=false}) {
  return (
    
 <div className=" py-[2.7rem]  lg:grid xl:grid-cols-2 lg:grid-cols-2 xl:gap-15 lg:gap-12 sm:justify-center sm:items-center  sm:flex sm:flex-col-reverse sm:px-10 lg:px-10 bg-transparent">
  
 <div className="w-full h-full  flex flex-col sm:justify-center sm:items-center  overflow-hidden   xl:items-end lg:items-start relative justify-center">
 <div className='w-full flex items-center relative justify-center'>

 <div className="xl:w-[550px] sm:min-w-[100px]  lg:w-[100%] overflow-hidden ">
<img src={img} alt="" className="w-full sm:transform-none  sm:w-full xl:transform-none lg:transform lg:scale-110  lg:object-cover " />

</div>

{box?null:<div className="xl:min-w-[52%] lg:min-w-[72%] sm:min-w-[50%] sm:ml-[0] sm:h-22 sm:mr-0 lg:h-28 absolute z-10 bg-black border-[3px] border-[#747474]   mt-[230px] rounded-xl flex overflow-hidden px-4 mr-[125px] 
items-center">
<div className="w-[4rem] "><img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" className="w-full" alt=""  /></div>
<div className='flex  justify-between w-full  items-center'>
<div className="ml-4">
   <div className="text-white font-medium font-netflix leading-4 md:text-lg sm:text-base ">Stranger Things</div>
   <div className="text-blue-600 font-netflixnormal">Downloading...</div>
   
</div>
<div className="w-[55px] ml-1"><img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" className="w-full" alt=""  /></div>
</div>
</div>}
</div>
 </div>

<div className="w-full lg:h-[480px] flex items-center justify-start">

<div className="w-full h-full sm:pt-4  flex flex-col justify-center  items-start">
<div className="text-white font-extrabold font-netflix lg:w-full lg:text-left xl:w-[540px] sm:text-center sm:w-full sm:text-[2.21rem] xl:text-[3.6rem] lg:text-[3.2rem] xl:text-left textwr leading-[4rem] sm:items-center sm:justify-center ">{title1}</div>
<div className="text-white sm:text-xl sm:w-full sm:text-center font-normal lg:text-left font-netflixnormal text-[1.60rem] leading-8 mt-2 lg:w-full xl:text-[1.6rem] xl:text-left text-wrap xl:w-[540px] ml-1">{title2}</div>
 </div>

</div>

</div>
  )
}

export default Homecard2