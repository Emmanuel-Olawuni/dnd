"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type User = {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  gender: string;
};

type UserContextType = {
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const value: UserContextType = {
    currentUser,
    setCurrentUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
