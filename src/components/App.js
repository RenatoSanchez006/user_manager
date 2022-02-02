import { useState } from "react";
import { Grid } from "@mui/material";
import Header from "./Header";
import UserList from "./UserList";
import AddUserModal from "./AddUserModal";
import startingUsersList from "./startingUsersList";

export default function App() {
  const [users, setUsersState] = useState(startingUsersList);
  const [modalOpen, setModalOpenState] = useState(false);

  const openHandleModal = () => {
    setModalOpenState(true);
  };

  const modalHandleClose = (newUser) => {
    setModalOpenState(false);
    if (!newUser) return;
    setUsersState([...users, newUser]);
  };

  const updateUserStatus = (id, newStatus) => {
    const usersCopy = [...users];
    usersCopy.find((user) => user.id == id).isActive = newStatus;
    setUsersState(usersCopy);
  };

  const deleteUser = (id) => {
    const usersCopy = users.filter((user) => user.id != id);
    setUsersState(usersCopy);
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
          />
        </Grid>
        <Grid item xs={3} />
      </Grid>
      <AddUserModal open={modalOpen} close={modalHandleClose} />
    </div>
  );
}
