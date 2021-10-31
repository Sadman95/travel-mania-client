import { useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import initAuthentication from "../Firebase/firebase.init";
import axios from 'axios';
import swal from 'sweetalert';


initAuthentication();

const useFirebase = () => {
    

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  //Google Sign In:
  const handleGoogleSignIn = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
          setUser(result.user)
        const userInfo = {
            name: result.user.displayName,
            email: result.user.email,
            img: result.user.photoURL
        }
        axios.post('http://localhost:5555/users', userInfo)
    .then(res => {
        if(res.data.insertedId){
            swal("Good job!", "Logged In Successfully!", "success");
            
        }
    })
        })
      .finally(() => {
        setIsLoading(false);
      });
  };

  
  //Observer:
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);


  //Sign Out:
  const handleSignOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => {
        setIsLoading(false);
      });
  };


  return {
    user,
    isLoading,
    handleGoogleSignIn,
    handleSignOut,
  };
};

export default useFirebase;
