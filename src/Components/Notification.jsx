
import { BsCaretUpFill } from "react-icons/bs";

function Notification() {
  return (
   <>
   <div className="px-[6px] cursor-pointer grp py-1">
   <svg
     xmlns="http://www.w3.org/2000/svg"
     fill="white"
     width="26"
     height="27"
     viewBox="0 0 24 24"
     role="img"
     data-icon="BellStandard"
     aria-hidden="true"
   >
     <path
       fillRule="evenodd"
       clipRule="evenodd"
       d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z"
       fill="white"
     ></path>
   </svg>

   <div className="min-w-[460px] border border-[#8080806b]      !important  bg-[#000000e3] rounded absolute z-20 top-[75px] right-[120px] drop">
     <div className="absolute z-20 right-[20px] -top-[1rem]"><BsCaretUpFill className="fill-white size-5"/></div>
   <ul className=" grouptext flex flex-col h-[400px]  overflow-scroll gap-1 text-white">
    <li className="w-full bg-transparent hover:bg-black  h-[100px] py-3 px-3 flex gap-5 items-center border-t-2 border-white ">
         <div className=" rounded overflow-hidden w-[125px]  bg-white">
           <img src="https://assets.nflxext.com/us/email/gem/comingsoon/csInapp_112x63.png" className="w-full" alt=""  />
         </div>
         <div className="flex flex-col">
         <div className="text-lg navtext leading-5 text-[#c5c5c5]  font-netflixnormal ">
Netflix Lookahead
         </div>
         <div className="text-lg text-[#c5c5c5]  navtext leading-6 font-netflixnormal ">
Explore what's comming soon.
         </div>
         <div className="text-sm text-[#c5c5c5]    ">
4 days ago
         </div>
         </div>
    </li>
    <li className="w-full h-[100px] py-3 px-3 flex gap-5 items-center border-t-2 border-white ">
         <div className=" rounded overflow-hidden w-[125px]  bg-white">
           <img src="https://assets.nflxext.com/us/email/gem/comingsoon/csInapp_112x63.png" className="w-full" alt=""  />
         </div>
         <div className="flex flex-col">
         <div className="text-lg leading-5 text-white font-netflixnormal ">
Netflix Lookahead
         </div>
         <div className="text-lg leading-6 text-white font-netflixnormal ">
Explore what's comming soon.
         </div>
         <div className="text-sm text-white  ">
4 days ago
         </div>
         </div>
    </li>
   </ul>
 </div>


 </div>
   
   </>
  )
}

export default Notification