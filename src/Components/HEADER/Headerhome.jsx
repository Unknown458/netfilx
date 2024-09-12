import { useState } from "react";
import { BsCaretDownFill } from "react-icons/bs";
import { useEffect } from "react";
import Searchbox from "../Searchbox";
import Notification from "../Notification";
import Profilenav from "../Profilenav";

function Headerhome() {
  const [scrollvalue, setscrollvalue] = useState(false);
 console.log(scrollvalue,window.scrollY)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setscrollvalue(true);
      } else {
        setscrollvalue(false);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={ ` sticky  ${scrollvalue ? "bg-black" : "bg-gradient-to-b from-[#000000c9] to-[#ffffff00]"} transition-colors duration-300 ease-in top-0 z-20 w-full ` }
     
    >
      <div
        className={`w-full relative    lg:h-[72px]   sm:h-[45px] sm:px-5 md:px-9  lg:px-10 xl:px-14   flex justify-between items-center
   `}
      >
        <div className="flex sm:gap-7 xl:gap-11 items-center">
          <div className="lg:min-w-[110px]   sm:min-w-[70px] md:min-w-[80px] ">
            <svg
              viewBox="0 0 111 30"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="default-ltr-cache-1d568uk ev1dnif2 bg-none fill-[#e50914]"
            >
              <g>
                <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
              </g>
            </svg>
          </div>
          <div className="md:block text-white lg:hidden ">
            <div className="text-sm flex gap-1 items-center font-medium font-netflixnormal">
              Browse <BsCaretDownFill className="fill-white" />
            </div>
          </div>
          <div className="sm:hidden lg:block ">
            <ul className="flex gap-4 md:text-[0.9rem] xl:text-[1rem] items-center  font-netflixnormal font-extralight text-white  ">
              <li>Home</li>
              <li className="hover:text-[#b3b3b3]   cursor-pointer transition-all ease-in duration-200">TV Shows</li>
              <li className="hover:text-[#b3b3b3]  cursor-pointer transition-all ease-in duration-200">Movies</li>
              <li className="hover:text-[#b3b3b3]  cursor-pointer transition-all ease-in duration-200">New & Popular</li>
              <li className="hover:text-[#b3b3b3]  cursor-pointer transition-all ease-in duration-200">My list</li>
              <li className="hover:text-[#b3b3b3]  cursor-pointer transition-all ease-in duration-200">Browse by Languages</li>
            </ul>
          </div>
        </div>

        <div className="flex sm:gap-3 lg:gap-4  h-full items-center">
          <Searchbox />

          <Notification />

          <div className="flex items-center grp cursor-pointer relative gap-3">
            <div className="rounded-lg  w-[36px] h-[38px] overflow-hidden">
              <img
                src="https://occ-0-3216-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUSntF8sS3XaxlL4kbgMzXhSHilR2oaXKyypWY_hXouAnTxBxaOigBfg-IX5z8rXMp4XyRdumCARSopncAJ3KG2eC7dwaI0.png?r=64f"
                className="w-full"
                alt=""
              />
            </div>
            <div className="lg:block sm:hidden">
              <BsCaretDownFill className="fill-white size-3" />
            </div>

            <Profilenav />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headerhome;
