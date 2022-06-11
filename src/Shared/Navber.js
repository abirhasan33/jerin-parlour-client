import React, { useState } from "react";
import { MenuAlt1Icon, MenuAlt3Icon, XIcon } from "@heroicons/react/solid";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import { signOut } from "firebase/auth";
import logo from "../Assests/Images/Group 33092.png";
import CustomLink from "./CustomLink";
const Navber = () => {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div>
      <nav className="container ">
        <div className="flex items-center py-3 ">
          <div className=" flex items-center text-white font-bold text-2xl">
            {pathname.includes("/dashboard") && (
              <label
                htmlFor="my-drawer-2"
                tabIndex="0"
                className="btn btn-ghost btn-circle lg:hidden"
              >
                <MenuAlt3Icon className="w-8 h-8 text-accent"></MenuAlt3Icon>
              </label>
            )}

            <img
              onClick={() => navigate("/")}
              src={logo}
              className="h-10 cursor-pointer"
              alt=""
            />
          </div>
          <div onClick={() => setOpen(!open)}>
            {open ? (
              <XIcon className="w-10 h-10 absolute right-3 top-[12px] cursor-pointer md:hidden"></XIcon>
            ) : (
              <MenuAlt1Icon
                className={`w-10 h-10 absolute right-3 top-[12px]  cursor-pointer md:hidden`}
              ></MenuAlt1Icon>
            )}
          </div>
          <div
            className={`flex-1 flex flex-col  md:items-center  p-4 md:p-0 rounded-b-lg  md:flex-row justify-end  transition-all duration-500 ease-in-out  absolute md:static   md:z-auto z-[20] right-0 w-full  space-y-2 md:space-y-0 ${
              open
                ? "top-16 opacity-100 bg-white md:bg-transparent transition-all ease-out"
                : "top-[-490px] md:opacity-100 opacity-0 transition-all ease-in"
            }`}
          >
            <CustomLink to="/" className=" px-5 text-accent rounded py-1   ">
              Home
            </CustomLink>

            <CustomLink
              to="/our-team"
              className=" px-5 text-accent rounded py-1   "
            >
              About
            </CustomLink>
            <CustomLink
              to="/contact"
              className=" px-5 text-accent rounded py-1   "
            >
              Contact
            </CustomLink>
            {user && (
              <CustomLink
                to="/dashboard/guide"
                className=" px-5 text-accent rounded py-1  "
              >
                Dashboard
              </CustomLink>
            )}

            {user ? (
              <button
                className="px-5 font-semibold rounded py-2 flex items-center justify-center bg-primary text-white"
                onClick={() => {
                  signOut(auth);
                  navigate("/");
                }}
              >
                Sign Out
              </button>
            ) : (
              <Link
                to="/login"
                className=" px-5 font-semibold rounded py-2  bg-primary text-white"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
