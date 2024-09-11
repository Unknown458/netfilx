import React from "react";
import Header from "./HEADER/Header";
import Input from "./Input";
import Button from "./Button";
import Footer2 from "./FOOTER/Footer2";
import { useForm } from "react-hook-form";
import auth from "../Firebase/Auth";
import {useNavigate} from "react-router-dom";
function Signin() {

  const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  async function logindata(data){
   const dataget =  await auth.login(data)
if(dataget){
  navigate("/")
}
  }

  return (
    <div className="w-full">
      <Header signin={true} bgcolor="md:bg-transparent sm:bg-black" />
      <div className="w-[100vw] sm:h-screen relative   ">
        <div className="w-full sm:h-screen  md:min-h-screen overflow-hidden">
          <div className="w-full sm:h-screen  md:min-h-screen absolute z-[8] bg-gradient-to-b from-[#000000c9] via-[#00000065]  to-[#000000c9]"></div>

          <div className="absolute z-[9]  w-full md:bg-transparent sm:bg-black  top-[11%] flex flex-col items-center justify-center ">
            <div className="md:w-[500px] sm:w-full sm:px-[40px]  sm:pb-[100px]  bg-[#000000af] md:py-12 md:px-[77px] rounded">
              <div className="w-full mb-6 font-netflix  text-4xl font-semibold text-white">
                Sing In
              </div>
              <form  onSubmit={handleSubmit(logindata)} className="w-full flex flex-col gap-4">
                <Input
                 {...register("email", { required: true })}
                  label={"Email or mobile number"}
                  textsize={"text-lg"}
                  font={"font-netflixnormal"}
                  color={"text-[#b6b5b5]"}
                  fontweight="font-medium"
                  type={"text"}
                  width={"w-full"}
                />
{errors.email?.type === "required" && (
        <p role="alert">Email is required</p>
      )}
                <Input
                 {...register("password", { required: true })}
                  label={"Password"}
                  type={"password"}
                  textsize={"text-lg"}
                  font={"font-netflixnormal"}
                  color={"text-[#b6b5b5]"}
                  fontweight="font-medium"
                  width={"w-full"}
                />
{errors.email?.type === "required" && (
        <p role="alert">Email is required</p>
      )}
                <Button
                type={"submit"}
                  value={"Sign In"}
                  textsize="text-lg "
                  className="w-full mt-1"
                  paddigtop="py-2"
                />
              </form>
              <div className="w-full text-center my-3 text-lg text-[#b8b8b8] font-netflix ">
                OR
              </div>
              <Button
                value={"Use a sign-in code"}
                textsize="text-lg "
                backgroundColor={"bg-[#ffffff31]"}
                className="w-full "
                paddigtop="py-2"
              />

              <div className="w-full text-lg font-netflix text-white text-center my-4">
                Forgot password?
              </div>

              <div className="w-full ">
                <div>
                  <div className="flex gap-2 items-center mt-6">
                    <input
                      type="checkbox"
                      id="check"
                      className="size-5 rounded-lg focus:border-none  checked:border-none checked:outline-none"
                    />
                    <label
                      htmlFor="check"
                      className="text-white text-[1.2rem] font-netflixnormal"
                    >
                      Remeber me
                    </label>
                  </div>

                  <div className="text-[#cfcfcf] font-medium my-4 font-netflixnormal text-lg">
                    New to Netflix?
                    <span className="font-netflix text-white">
                      {" "}
                      Sign up now.
                    </span>{" "}
                  </div>
                </div>

                <div className="text-sm text-[#cfcfcf]">
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot. <span className="text-blue-600">Learn more</span>.
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_medium.jpg"
            className="w-[100%]  md:scale-125 object-cover transform lg:scale-125  lg:-translate-y-24 md:-translate-y-[4rem] -translate-x-2"
            alt=""
          />
        </div>
      </div>
      <div className="mt-8 ">
        <Footer2
          bgcolor={"bg-black"}
          broder={"border-none"}
          boxborder="border-white"
        />
      </div>
    </div>
  );
}

export default Signin;
