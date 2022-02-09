import { useContext } from "react";
import { userContext } from "../context/user-context";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  TextField,
  Button,
  DialogContentText,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";

export default function AddUserModal({ modalOpen, close }) {
  const {
    emptyNewUser,
    setIsEditionState,
    userModal,
    setUserModalState,
    modalUserHandler,
    isEdition,
    addUser,
    editUser,
  } = useContext(userContext);

  const submitFormHandler = (e) => {
    e.preventDefault();
    !isEdition ? addUser() : editUser();
    handleModalClose();
  };

  const handleModalClose = () => {
    setIsEditionState(false);
    setUserModalState(emptyNewUser);
    close();
  };

  return (
    <Dialog
      open={modalOpen}
      onClose={handleModalClose}
      fullWidth={true}
      maxWidth="xs"
    >
      <form onSubmit={(e) => submitFormHandler(e)}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let's add a new user, every field is required but the Profile
            Picture
          </DialogContentText>
          <TextField
            required
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={userModal.name}
            onChange={(e) => modalUserHandler({ name: e.target.value })}
          />
          <TextField
            required
            margin="dense"
            id="lastName"
            label="Last Name"
            type="text"
            fullWidth
            variant="standard"
            value={userModal.lastName}
            onChange={(e) => modalUserHandler({ lastName: e.target.value })}
          />
          <TextField
            required
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={userModal.email}
            onChange={(e) => modalUserHandler({ email: e.target.value })}
          />
          <TextField
            margin="dense"
            id="image"
            label="Profile Photo"
            type="text"
            fullWidth
            variant="standard"
            value={userModal.image}
            onChange={(e) => modalUserHandler({ image: e.target.value })}
          />
          <Typography color={grey[500]} variant="caption">
            *Required
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
