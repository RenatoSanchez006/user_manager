import { useState, useContext, useEffect } from "react";
import { userContext } from './context/user-context'
import Header from "./components/Header";
import UserList from "./components/UserList";
import AddUserModal from "./components/AddUserModal";
import { Grid } from "@mui/material";

export default function App() {
  const { users, isEdition } = useContext(userContext);
  const [modalOpen, setModalOpenState] = useState(false);

  useEffect(() => {
    isEdition ? setModalOpenState(true) : setModalOpenState(false)
  }, [isEdition])

  const openHandleModal = () => {
    setModalOpenState(true);
  };

  const modalHandleClose = () => {
    setModalOpenState(false);
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <Header userCount={users.length} addUser={openHandleModal} />
          <UserList />
        </Grid>
        <Grid item xs={3} />
      </Grid>
      <AddUserModal
        modalOpen={modalOpen}
        close={modalHandleClose}
      />
    </div>
  );
}
