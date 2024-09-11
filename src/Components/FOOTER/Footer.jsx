import React from 'react'

import { BsCaretDownFill } from "react-icons/bs";
import { IoLanguage } from "react-icons/io5";
function Footer() {
  return (
    <>
    
<footer className="bg-black">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="py-5 px-20 lg:py-28">
    <div className="w-full text-[#b4b4b4] mb-6 font-medium text-[1.14rem] "> Questions? Call <span className="underline">000-800-919-1694</span>  </div>
      
      <div className="grid grid-cols-2 gap-8   md:grid-cols-4">
        <div>
          
            <ul className="text-[#b4b4b4]  font-medium">
                <li className="mb-4">
                    <a href="#" className=" underline">FAQ</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="underline">Investor Relations</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="underline">Privacy</a>
                </li>
                <li className="mb-4">
                    <a href="https://www.google.co.in" className="underline">Speed Test</a>
                </li>

                <li className="mb-4">
                    <div className='relative'>
                <div className=' py-2 '>
<div className='z-10 ml-[100px] top-5  absolute '>
    <BsCaretDownFill className='size-3 fill-white' />
</div>
<div className='z-10 ml-2 top-4  absolute '>
    <IoLanguage className='size-5 fill-white' />
</div>
     <select name="" id="" className='w-[135px] py-[2px]  px-8 appearance-none rounded font-Roboto text-lg text-white font-medium border border-white-1 bg-transparent '>
     
        <option value="English" className='text-black'>English</option>
        <option value="Hindi" className='text-black'>हिंदी</option>
     </select>
     
     </div> </div>      </li>
     <li className="mb-4">
                    <a href="https://www.google.co.in" >Netflix India</a>
                </li>
            </ul>
        </div>
        <div>
            
            <ul className="text-[#b4b4b4]  font-medium">
                <li className="mb-4">
                    <a href="#" className="underline">Help Centre</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="underline">Jobs</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="underline">Cookie Preferences</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="underline">
                    Legal Notices</a>
                </li>
            </ul>
        </div>
        <div>
            
            <ul className="text-[#b4b4b4]  font-medium">
                <li className="mb-4">
                    <a href="#" className="underline">Account</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="underline">Ways to Watch
                    </a>
                </li>
                <li className="mb-4">
                    <a href="#" className="underline">Corporate Information</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="underline">Only on Netflix</a>
                </li>
            </ul>
        </div>
        <div>
         
            <ul className="text-[#b4b4b4] font-medium">
                <li className="mb-4">
                    <a href="#" className="underline">
                    Media Centre</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="underline">Terms of Use</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="underline">Contact Us</a>
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

export default Footer