import React from 'react'
import { BiGlobe } from "react-icons/bi";
import { BsCaretDownFill } from "react-icons/bs";

function Footer2({
    bgcolor="bg-[#f1f1f1]",
    broder="border-2 border-t-[#dfdfdf8e]",
    boxborder="border-black"
}) {
  return (
    <>
    
<footer className={`${bgcolor} ${broder}`} >
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="py-5 px-20 lg:py-28">
    <div className="w-full text-[#757575] mb-6 font-medium text-[1.14rem] "> Questions? Call <span className="underline">000-800-919-1694</span>  </div>
      
      <div className="grid grid-cols-2 gap-8   md:grid-cols-4">
        <div>
          
            <ul className="text-[#757575]  font-medium">
                <li className="mb-4">
                    <a href="#" className=" underline">FAQ</a>
                </li>
              
                <li className="mb-4">
                    <a href="#" className="underline">Privacy</a>
                </li>
               

                <li className="mb-4">
                    <div className='relative'>
                <div className=' py-2 '>
<div className='z-10 ml-[100px] top-5  absolute '>
    <BsCaretDownFill className='size-3 fill-[#8b8b8b]' />
</div>
<div className='z-10 ml-2 top-4  absolute '>
    <BiGlobe className='size-5 fill-[#8b8b8b]' /> 
</div>
     <select name="" id="" className={`w-[135px] py-[2px]  px-8 appearance-none rounded font-Roboto text-lg text-[[#757575]]font-medium border ${boxborder} bg-transparent `}>
     
        <option value="English" className='text-black'>English</option>
        <option value="Hindi" className='text-black'>हिंदी</option>
     </select>
     
     </div> </div>      </li>
 
            </ul>
        </div>
        <div>
            
            <ul className="text-[#757575]  font-medium">
                <li className="mb-4">
                    <a href="#" className="underline">Help Centre</a>
                </li>
           
                <li className="mb-4">
                    <a href="#" className="underline">Cookie Preferences</a>
                </li>
             
            </ul>
        </div>
        <div>
            
            <ul className="text-[#757575]  font-medium">
                <li className="mb-4">
                    <a href="#" className="underline">Netflix Shop</a>
                </li>
             
                <li className="mb-4">
                    <a href="#" className="underline">Corporate Information</a>
                </li>
             
            </ul>
        </div>
        <div>
         
            <ul className="text-[#757575] font-medium">
           
                <li className="mb-4">
                    <a href="#" className="underline">Terms of Use</a>
                </li>
               
         
            </ul>
        </div>
    </div>
    </div>
    
    </div>
</footer>
    </>
  )
}

export default Footer2