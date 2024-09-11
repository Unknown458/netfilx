import React, { useEffect } from "react";
import Header2 from "./HEADER/Header2";
import Input from "./Input";
import Button from "./Button";
import Footer2 from "./FOOTER/Footer2";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import auth from "../Firebase/Auth";
import {login} from "../Redux/Authslice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function RegiForm2() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
    const emaildata = useSelector((state) => state.auth.email);
  const { register, formState: { errors }, handleSubmit } = useForm();







  async function onSubmit(data) {
    const createUser = await auth.createUser(data);
    if (createUser) {
      auth.onAuthStateChanged((user) => {
        if (user) {
          console.log(user);
          dispatch(login({ user: user }));
          navigate('/'); // Navigate to the desired route after successful login
        } else {
          console.log("User is signed out");
        }
      });
    }
  }

  return (
    <>
      <div className="w-full  bg-white">
        <Header2 />
        <div className="w-full py-[150px] flex items-center justify-center ">
          <div className="w-[550px] px-10   flex flex-col items-start   ">
            <div className="w-full  font-netflixnormal text-sm mt-8 mb-1">
              STEP <b>2</b> OF <b>2</b>
            </div>
            <div className="w-full  font-netflix text-black text-4xl">
              Create a password to start your membership
            </div>
            <div className="w-full  font-netflixnormal text-xl  mt-5 mb-5">
              Just a few more steps and you're done! We hate paperwork, too.
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-3"
            >
              <Input
                label={"Email"}
                value={emaildata}
                {...register("email", { required: true })}
                                type={"email"}
                bgcolor={"bg-transparent"}
                width={"w-full"}
                color={"text-slate-800"}
                colortext={"text-black"}
                font={"font-netflixnormal"}
              />

              {errors.email && (
                <p className="text-red-500">Email is required</p>
              )}

              <Input
                label={"Add a password"}
                type={"password"}
                {...register("password", { required: true })}
                bgcolor={"bg-transparent"}
                width={"w-full"}
                color={"text-slate-800"}
                colortext={"text-black"}
                font={"font-netflixnormal"}
              />
              {errors.password && (
                <p className="text-red-500">Email is required</p>
              )}
              <Button
              type="submit"
                value={"Next"}
                textsize="text-2xl "
                className="w-full mt-5"
                paddigtop="py-5"
              />
            </form>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
}

export default RegiForm2;
