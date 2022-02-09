import { useContext } from "react";
import { userContext } from "../context/user-context";
import { Grid, IconButton } from "@mui/material";
import { Check, Close, Delete, Edit } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

export default function UserActions({ user }) {
  const { updateStatus, editUserHandler, deleteUser } = useContext(userContext);
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        {user.isActive ? (
          <IconButton
            color="success"
            onClick={() => updateStatus(user.id, false)}
          >
            <Check fontSize="small" />
          </IconButton>
        ) : (
          <IconButton
            sx={{ color: grey[700] }}
            onClick={() => updateStatus(user.id, true)}
          >
            <Close fontSize="small" />
          </IconButton>
        )}
      </Grid>
      <Grid item xs={4}>
        <IconButton color="primary" onClick={() => editUserHandler(user.id)}>
          <Edit fontSize="small" />
        </IconButton>
      </Grid>
      <Grid item xs={4}>
        <IconButton color="error" onClick={() => deleteUser(user.id)}>
          <Delete fontSize="small" />
        </IconButton>
      </Grid>
    </Grid>
  );
}
