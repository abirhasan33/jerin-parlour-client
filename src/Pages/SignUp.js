import React, { useEffect } from "react";
import logo from "../Assests/Images/Group 33092.png";
import Navber from "../Shared/Navber";
import Footer from "../Shared/Footer";
import googleImg from "../Assests/Images/Icon/Group 573.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../Shared/firebase.init";
import { useForm } from "react-hook-form";
import Spinner from "../Shared/Spinner";
const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (gUser || user) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, gUser, user]);
  if (loading || gLoading) {
    return <Spinner />;
  }
  let errorMsg;
  if (error || gError) {
    if (error?.message.includes("auth/user-not-found"))
      errorMsg = (
        <p className="text-[12px] text-red-600 pl-1 ">User not exist!</p>
      );
    else if (gError?.message.includes("auth/popup-closed-by-user")) {
      errorMsg = (
        <p className="text-[12px] text-red-600 pl-1 ">Google Popup Closed</p>
      );
    } else if (error?.message.includes("auth/wrong-password")) {
      errorMsg = (
        <p className="text-[12px] text-red-600 pl-1">Wrong Password !</p>
      );
    } else {
      errorMsg = (
        <p className="text-sm text-red-600 pl-1">
          {error?.message} {gError?.message}
        </p>
      );
    }
  }
  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="">
      <Navber></Navber>
      <div className="h-full md:h-[95vh]  my-10 lg:my-0 container flex justify-center items-center">
        <div className="w-full  md:w-[50%] lg:w-[35%]">
          <img className="h-[60px] mx-auto w-40" src={logo} alt="" />
          <div className="  border-[1px] border-gray-400 pb-10 px-7   rounded-md mt-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="font-poppins text-2xl pt-8 pb-5 text-center text-slate-700 font-semibold uppercase">
                Join <span className="">Our</span> Family
              </h1>
              <div className="flex flex-col space-y-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  class=" w-full py-3  border-b-[1px] border-gray-400   focus:outline-none"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required!",
                    },
                  })}
                />
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-600  ">
                    {errors.email.message}
                  </span>
                )}
                <input
                  type="email"
                  placeholder="Email"
                  class=" w-full py-3  border-b-[1px] border-gray-400   focus:outline-none"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required!",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Enter valid email!",
                    },
                  })}
                />
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-600  ">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-600  ">
                    {errors.email.message}
                  </span>
                )}
                <input
                  type="password"
                  placeholder="Password"
                  class=" w-full  py-3  border-b-[1px] border-gray-400   focus:outline-none"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required!",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-600   ">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-600 ">
                    {errors.password.message}
                  </span>
                )}
                {errorMsg}
              </div>

              <button
                type="submit"
                className="px-8 mt-9 w-full  rounded py-3 hover:bg-rose-600 transition duration-300 ease-in-out bg-primary text-white"
              >
                Create an Account
              </button>
              <p className="text-sm mt-3 text-center text-gray-500">
                Already have an account ?{" "}
                <Link to="/login" className="text-primary">
                  Login
                </Link>
              </p>
              <div className="divider my-5 ">Or</div>
              <div
                className="bg-white rounded-full shadow-sm cursor-pointer py-3 text-gray-500 text-center relative"
                onClick={() => signInWithGoogle()}
              >
                <span>Continue with Google</span>
                <img
                  className="h-8 absolute top-2 left-2 w-8"
                  src={googleImg}
                  alt=""
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SignUp;
