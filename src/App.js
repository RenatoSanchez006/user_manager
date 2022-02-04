import { useState } from "react";
import { Grid } from "@mui/material";
import Header from "./components/Header";
import UserList from "./components/UserList";
import AddUserModal from "./components/AddUserModal";
import startingUsersList from "./components/startingUsersList";
import { v4 as uuidv4 } from "uuid";

const emptyNewUser = {
  id: "",
  name: "",
  lastName: "",
  email: "",
  image: "",
  isActive: true,
};

export default function App() {
  const [users, setUsersState] = useState(startingUsersList);
  const [modalState, setModalState] = useState({
    modalOpen: false,
    modalEdition: false,
  });
  const [userModal, setUserModalState] = useState(emptyNewUser);

  const openHandleModal = () => {
    setUserModalState(emptyNewUser);
    setModalState({ modalOpen: true, modalEdition: false });
  };

  const modalHandleClose = (saving, isEdition) => {
    setModalState({ modalOpen: false, modalEdition: false });
    if (!saving) return;

    if (!isEdition) {
      // Add new user
      setUsersState([...users, { ...userModal, id: uuidv4() }]);
    } else {
      // Edit User in List
      const userIndex = users.findIndex((user) => user.id === userModal.id);
      let usersCopy = [...users];
      usersCopy[userIndex] = userModal;
      setUsersState(usersCopy);
    }
  };

  const updateUserStatus = (id, newStatus) => {
    const usersCopy = [...users];
    usersCopy.find((user) => user.id === id).isActive = newStatus;
    setUsersState(usersCopy);
  };

  const deleteUser = (id) => {
    const usersCopy = users.filter((user) => user.id !== id);
    setUsersState(usersCopy);
  };

  const editUserHandler = (id) => {
    setUserModalState(users.filter((user) => user.id === id)[0]);
    setModalState({ modalOpen: true, modalEdition: true });
  };

  const modalUserHandler = (newValue) => {
    setUserModalState({ ...userModal, ...newValue });
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <Header userCount={users.length} addUser={openHandleModal} />
          <UserList
            userList={users}
            updateStatus={updateUserStatus}
            deleteUser={deleteUser}
            editUser={editUserHandler}
          />
        </Grid>
        <Grid item xs={3} />
      </Grid>
      <AddUserModal
        modalState={modalState}
        close={modalHandleClose}
        user={userModal}
        modalUserHandler={modalUserHandler}
      />
    </div>
  );
}
