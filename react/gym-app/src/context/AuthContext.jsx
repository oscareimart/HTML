import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userLogged, setUserLogged] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUserLogged({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          name: firebaseUser.displayName,
          status: 0,
          menuSelected: "dashboard",
          role: "member",
        });
      } else {
        setUserLogged(null);
      }

      setLoading(false);
    });
    return () => unsubcribe();
  }, []);

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ userLogged, logout, setUserLogged }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
