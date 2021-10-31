import { useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import initAuthentication from "../Firebase/firebase.init";

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
      .then((result) => setUser(result.user))
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
  }, []);


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
