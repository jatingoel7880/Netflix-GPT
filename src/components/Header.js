import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector,  useDispatch} from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch(); //using dispatch to dispatch an action
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
 

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  
  useEffect(() => {
    //calling onAuthStateChange part b/c want to call this only once when user signin/signout.
    //in the login we created createUserWithEmailAndPassword, signInWithEmailAndPassword for signup and signin
    //but for that also need to dispatch the action so to write in both parts declaring only once at the root level
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        ); 
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });
    //Unsubscribe called when component unmounts
    return()=> unsubscribe();
  }, []);

  
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo" />
     {user && (<div className="flex p-2">
        <img
          className="w-12 h-12 "
          src={user?.photoURL}
          alt="usericon"
        />
        <button onClick={handleSignOut} className="font-bold text-white">
          (Sign Out)
        </button>
      </div>
     )}
    </div>
  );
};

export default Header;
