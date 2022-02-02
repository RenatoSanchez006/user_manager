import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  TextField,
  Button,
  DialogContentText,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";

export default function AddUserModal({ open, close }) {
  const [newUser, setNewUserState] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    image: "",
    isActive: true,
  });

  const saveNewUser = () => {
    if (!newUser.name || !newUser.lastName || !newUser.email) {
      return alert("Fill all the fields");
    }
    const newUserCopy = { ...newUser };
    setNewUserState({
      id: "",
      name: "",
      lastName: "",
      email: "",
      image: "",
      isActive: true,
    });
    close({ ...newUser, id: uuidv4() });
  };

  return (
    <Dialog open={open} onClose={() => close(0)} fullWidth={true} maxWidth="xs">
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Let's add a new user, every field is required but the Profile Picture
        </DialogContentText>
        <TextField
          required
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) =>
            setNewUserState({ ...newUser, name: e.target.value })
          }
        />
        <TextField
          required
          margin="dense"
          id="lastName"
          label="Last Name"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) =>
            setNewUserState({ ...newUser, lastName: e.target.value })
          }
        />
        <TextField
          required
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
          onChange={(e) =>
            setNewUserState({ ...newUser, email: e.target.value })
          }
        />
        <TextField
          margin="dense"
          id="image"
          label="Profile Photo"
          type="url"
          fullWidth
          variant="standard"
          onChange={(e) =>
            setNewUserState({ ...newUser, image: e.target.value })
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => close(0)}>Cancel</Button>
        <Button onClick={() => saveNewUser()}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
