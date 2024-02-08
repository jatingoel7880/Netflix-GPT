import { useState } from "react";
import Header from "./Header";

const Login = () => {
  
  const[isSignInForm, setIsSignInForm]= useState(true);

  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        />
      </div>

      <form className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
        {isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm &&(
         <input
          className="p-4 my-2 w-full bg-gray-800 rounded-lg "
          type="text"
          placeholder="Full Name"
        />
        )}

        <input
          className="p-4 my-2 w-full bg-gray-800 rounded-lg"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="p-4 my-2 w-full bg-gray-800 rounded-lg "
          type="password"
          placeholder="Password"
        />

        <button className="p-4 my-4 bg-red-600 w-full rounded-lg">
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix! Sign Up Now" : "Already Registered? Sign In Now"}</p>
        {/* <p className="py-4 curs or-pointer"  onClick={toggleSignInForm}>New to Netflix! Sign Up Now</p> */}
      </form>
    </div>
  );
};

export default Login;
