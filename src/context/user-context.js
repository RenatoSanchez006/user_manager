import { createContext } from "react";
import { useUsers } from "../hooks/useUsers";

export const userContext = createContext({
  userList: [],
  setUsers: () => {},
  isEdition: false,
  setIsEdtionState: () => {},
  addNewUser: () => {},
  updateStatus: () => {},
  deleteUser: () => {},
  editUserHandler: () => {},
  editUser: () => {},
});

export const UserContextProvider = ({ children }) => {
  const contextValue = useUsers();

  return (
    <userContext.Provider value={contextValue}>{children}</userContext.Provider>
  );
};
