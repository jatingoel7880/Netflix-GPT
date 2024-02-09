import { useRef, useState } from "react";
import Header from "./Header";
import CheckValidData from "../utils/Validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const[errorMessage,setErrorMessage]=useState(null);

  const email = useRef(null); //it will a reference
  const password = useRef(null);

  const handleButtonClick = () => {
    //Validate the form data
    
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message=CheckValidData(email.current.value, password.current.value);
    // console.log(message);
    setErrorMessage(message);
 
    //Signin/ SignUp
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            className="p-4 my-2 w-full bg-gray-800 rounded-lg "
            type="text"
            placeholder="Full Name"
          />
        )}

        <input
          ref={email} //this email is reference to the input box
          className="p-4 my-2 w-full bg-gray-800 rounded-lg"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password} //this passsword is reference to the input box
          className="p-4 my-2 w-full bg-gray-800 rounded-lg "
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

        <button
          className="p-4 my-4 bg-red-600 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {" "}
          {isSignInForm
            ? "New to Netflix! Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
        {/* <p className="py-4 curs or-pointer"  onClick={toggleSignInForm}>New to Netflix! Sign Up Now</p> */}
      </form>
    </div>
  );
};

export default Login;
