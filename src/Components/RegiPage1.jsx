import React from 'react'
import Header2 from './HEADER/Header2'
import Button from './Button'
import { useSelector } from 'react-redux'
import Footer2 from './FOOTER/Footer2'
import { useNavigate } from 'react-router-dom'
function RegiPage1() {
  const navigate = useNavigate()
  const selctor = useSelector((state)=>state.auth.user)

    

console.log(selctor)
  return (
   <> 
   <Header2/>
   <div className='w-full py-[0px] bg-white'>
  
   <div className='w-full py-[150px] flex items-center justify-center '>
   
    <div className='w-[500px] py-9 px-14 flex flex-col items-center  h-[400px]'>

  
  <img src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png" className='w-[70%]' alt="" />

   <div className='w-full text-center font-netflixnormal text-sm mt-8 mb-1'>STEP <b>1</b> OF <b>2</b> </div>
   <div className='w-full text-center font-netflix  text-4xl'>Finish setting up your account</div>
   <div className='w-full text-center font-netflixnormal text-xl px-10 mt-5 mb-5'>Netflix is personalised for you. Create a password to watch on any device at any time.</div>
   <Button value={"Next"} textsize='text-2xl ' onClick={() => navigate("/regiform")} className='w-full' paddigtop='py-5'/>
    </div>
   </div>
   <Footer2/>
   </div>
   </>
  )
}

export default RegiPage1