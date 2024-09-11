import Button from "./Button"
import Header from "./HEADER/Header"
import '../../src/index.css'
import Listbox from "./Subcontent/Listbox"
import { Link } from "react-router-dom"
import Footer from "./FOOTER/Footer"
import Homecard from "./Subcontent/Homecard"
import Homecard2 from "./Subcontent/Homecard2"
import Input from "./Input"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import  {useDispatch} from "react-redux"
import {getemail} from '../Redux/Authslice'

function Signup() {
const navigate = useNavigate()
const dispatch = useDispatch()


   
const [email,setEmail] = useState("")

function getstart(e){
e.preventDefault()
dispatch(getemail({email}))
navigate("/regi")

}



  return (
<>

<Header />
<div className="w-full  overflow-hidden">
<div className="w-[100vw] sm:h-[35rem] relative lg:h-[49.7rem] md:h-[36rem] ">
  <div className="w-full sm:h-[35rem] lg:h-[49.75rem] md:h-[36rem] overflow-hidden">
    <div className="w-full sm:h-[35rem] lg:h-[49.75rem] md:h-[36rem] absolute z-[8] bg-gradient-to-b from-[#000000c9] via-[#00000065]  to-[#000000c9]"></div>
    <div className="absolute z-[9] w-full sm:px-[50px] md:px-[60px] lg:h-[49.75rem]   md:h-[37rem]  py-10 flex flex-col items-center justify-center ">
      <div className="text-white lg:text-[3.35rem] sm:text-[2rem] text-center md:text-4xl mt-28  font-netflix lg:leading-[3rem] font-extrabold">Unlimited movies, TV shows and more</div>
      <div className="text-white lg:text-[1.7rem] md:text-xl mt-3 font-light sm:text-xl font-netflixnormal">Watch anywhere. Cancel anytime.</div>
      <div className="text-white lg:text-[1.4rem] md:text-xl mt-6 font-normal sm:text-xl font-netflixnormal text-center">Ready to watch? Enter your email to create or restart your membership.</div>

<button ></button>

      <form   className=" lg:flex lg:items-center lg:justify-center md:flex md:items-center md:justify-center   sm:w-full gap-4 mt-7">
        
<Input value={email}  onChange={(e)=>setEmail(e.target.value)}  label={"Email address"} type={"email"}/>
 
 <div className="sm:flex sm:items-center sm:justify-center md:block">
     <Button arrow={true} textsize="md:text-2xl sm:text-xl" className=" font-netflix  md:h-14 md:mt-0 sm:h-12 sm:mt-4 flex items-center justify-center gap-2 sm:w-[180px] md:w-[235px]" paddigtop="py-4" onClick={ getstart} value={"Get Started" }/>
     </div>
      </form>

    </div>
<img src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_medium.jpg" className="w-[100%] h-[100%] md:scale-125 object-cover transform lg:scale-125  lg:-translate-y-24 md:-translate-y-[4rem] -translate-x-2"  alt=""  />
</div>
  
</div>


 <div className="w-full h-2 bg-[#232323]">
 </div>



 {/* page2 */}

<Homecard title1={"Enjoy on your TV"} title2={"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."} img={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"} video={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"}/>


 <div className="w-full h-2 bg-[#232323]">
 </div>


 {/* page3 */}

<Homecard2 title1={"Download your shows to watch offline"} title2={"Save your favourites easily and always have something to watch."} img={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"} box={false}/>

 <div className="w-full h-2 bg-[#232323]">
 </div>
{/* 
page3 */}


<Homecard title1={"Watch everywhere"} title2={"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."} img={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"} video={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"} topset={true}/>


 <div className="w-full h-2 bg-[#232323]">
 </div>

 <Homecard2 title1={"Create profiles for kids"} title2={"Send children on adventures with their favourite characters in a space made just for them—free with your membership."} img={"https://occ-0-3216-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"} box={true}/>


 <div className="w-full h-2 bg-[#232323]">
 </div>



 <div className="w-full py-[5.4rem] lg:px-44 sm:px-8 flex flex-col items-center justify-center bg-black">
 
  <div className="text-white font-netflix lg:text-5xl sm:text-3xl font-bold mb-8">Frequently Asked Questions</div>

<Listbox listtitle={"What is Netfilx?"} content={`Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
 `} content2={"You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"}/>


 <Listbox listtitle={"How much does Netflix cost?"} content={"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."}/>
 
 <Listbox listtitle={"Where can I watch?"} content={"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."} content2={"You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."}/>

 <Listbox listtitle={"How do I cancel?"} content={"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."}/>

 <Listbox listtitle={"What can I watch on Netflix?"} content={"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."}/>

 <Listbox listtitle={"Is Netflix good for kids?"} content={"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space."} content2={"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space."}/>


 <div className="text-white lg:text-[1.4rem] text-center sm:text-[1.3rem] mt-[3.5rem] font-normal font-netflixnormal">Ready to watch? Enter your email to create or restart your membership.</div>

 <form action="" className=" lg:flex lg:items-center lg:justify-center md:flex md:items-center md:justify-center   sm:w-full gap-4 mt-7">
      
  
 <Input label={"Email address"} type={"email"}/>
       
       <div className="sm:flex sm:items-center sm:justify-center md:block">
           <Button arrow={true} textsize="md:text-2xl sm:text-xl" className=" font-netflix  md:h-14 md:mt-0 sm:h-12 sm:mt-4 flex items-center justify-center gap-2 sm:w-[180px] md:w-[235px]" paddigtop="py-4" value={"Get Started" }/>
           </div>
            </form>
      

 </div>
 <div className="w-full h-2 bg-[#232323]">
 </div>
 


<Footer/>
 
  
 
  
 


</div>
</>
  )
}

export default Signup