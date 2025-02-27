import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

// Creating Auth Context
export const AuthContext = createContext(null);
console.log(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Signup (With Display Name Update)
  const emailPasswordSignup = async (email, password, name) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update display name in Firebase profile
      await updateProfile(userCredential.user, { displayName: name });

      setUser(userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error("Signup Error:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Signin
  const logInUserEmailPassword = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error("Login Error:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Logout
  const logOutUser = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
      console.log("Logged out successfully");
    } catch (error) {
      console.error("Logout Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Track Current User (Firebase Observer)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Context Value to shere
  const AuthData = {
    user,
    loading,
    emailPasswordSignup,
    logInUserEmailPassword,
    logOutUser,
  };

  return (
    <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
