import { auth } from "lib/firebase";
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { AuthService } from "services/auth-service";
import { SocialLoginProvider } from "interfaces/Auth";
import { User } from "interfaces/User";
import reducer from "./auth-reducer";
import Router from "next/router";
import toast from "react-hot-toast";

interface State {
  isAuthenticated: boolean;
  isLoading: boolean;
  currentUser: User | null;
  socialLogin(provider: SocialLoginProvider): Promise<void>;
  logout(): Promise<void>;
}

const defaultValue = {
  isAuthenticated: false,
  isLoading: true,
  error: null,
  currentUser: null,
};

const AuthContext = createContext<State>({
  ...defaultValue,
  logout: async () => {},
  socialLogin: async () => {},
});

export const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultValue);

  const setCurrentUser = (user: any) => {
    const userDetails: User = {
      id: user.uid,
      name: user.displayName as string,
      email: user.email as string,
      email_verified: user.emailVerified,
      photo_url: user.photoURL,
    };
    dispatch({ type: "SET_CURRENT_USER", payload: { user: userDetails } });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        dispatch({ type: "LOG_OUT" });
      }
    });
    return () => unsubscribe();
  }, []);

  const socialLogin = async (provider: SocialLoginProvider) => {
    try {
      const user = await AuthService.socialLogin(provider);
      setCurrentUser(user);
      toast.success("Successfully signed in!");
      Router.push("/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = async () => {
    await AuthService.logOut();
    dispatch({ type: "LOG_OUT" });
    Router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        socialLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
