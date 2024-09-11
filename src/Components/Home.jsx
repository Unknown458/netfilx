import Headerhome from "./HEADER/Headerhome";
import { FaPlay } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
function Home() {
  return (
    <>
      <div className="w-full">
        <Headerhome />
        <div className="w-full relative md:block sm:hidden">
          <div className="w-full h-[50vw] absolute z-[2] bg-gradient-to-l  from-[#00000000] via-[#16161600] to-[#4444449f]"></div>
          <div className="w-full h-[50vw] absolute z-[3] bg-gradient-to-b  from-[#00000000] via-[#16161600] to-[#141414]"></div>
          <div className=" absolute lg:h-[50vw] md:h-[48vw] z-[4] gap-6 lg:pl-[60px] md:pl-[30px] lg:bottom-[5%] md:bottom-0 w-[40%]  flex flex-col  justify-center">
            <img
              src="https://occ-0-3216-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABap9-FIuta2ba3EcWZLtpAwiMi2G2fZc4bMHwgV2dpggen7yv4dRUPMYUCAK3wtJ_FIoAwBpBGhyOWP-G3RPJeArxI1u_iSR6NcT2gLhobsb.webp?r=52c"
              className="w-[100%]"
              alt=""
            />

            <div className="xl:text-[1.2vw] lg:text-[1.2vw] md:text-[1.4vw] text-white font-normal font-netflixnormal">
              Full of fun Easter eggs for franchise fans of all ages, this epic
              Mario adventure is "absolutely a Nintendo game brought to dazzling
              life" (Nerdist).
            </div>
            <div className="flex gap-4">
              <button className="lg:py-2 md:py-1 md:px-4 lg:px-6 justify-center lg:text-lg md:text-[1rem]  bg-white rounded font-semibold font-netflixnormal flex items-center gap-2">
                {" "}
                <FaPlay className="lg:size-7 " /> Play
              </button>

              <button className="lg:py-2 lg:px-6 md:py-1 md:px-4 lg:text-lg text-white bg-[#4D6F78] rounded  font-netflixnormal font-medium flex items-center gap-2">
                {" "}
                <IoIosInformationCircleOutline className="lg:size-8 md:size-5 fill-white" /> More Info
              </button>
            </div>
          </div>
          <div className="w-full h-[50vw] overflow-hidden -mt-[72px] ">
            <img
              src="https://occ-0-3216-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABa3MfMIrK_HnxOko5QSiPeazRAehDi_whzpDTztxPcTki8s-OG6PMV4SY7mYY2bW-aWuz_gbT-L7LgWX6kjzC5Q2-ukyn2KNLWoz.webp?r=b35"
              className="w-full  object-cover "
              alt=""
            />
          </div>
        
        </div>
        <div className="w-full  min-h-[800px] text-white bg-gradient-to-t from-[#141414] to-[#141414]">
            hellow
          </div>
      </div>
    </>
  );
}

export default Home;
