import { Grid, IconButton } from "@mui/material";
import { Check, Close, Delete, Edit } from "@mui/icons-material";

export default function UserActions({
  status,
  editUser,
  updateStatus,
  deleteUser,
  id,
}) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <IconButton color="primary" onClick={() => editUser(id)}>
          <Edit fontSize="small" />
        </IconButton>
      </Grid>
      <Grid item xs={4}>
        {status ? (
          <IconButton color="success" onClick={() => updateStatus(id, false)}>
            <Check fontSize="small" />
          </IconButton>
        ) : (
          <IconButton color="secondary" onClick={() => updateStatus(id, true)}>
            <Close fontSize="small" />
          </IconButton>
        )}
      </Grid>
      <Grid item xs={4}>
        <IconButton color="error" onClick={() => deleteUser(id)}>
          <Delete fontSize="small" />
        </IconButton>
      </Grid>
    </Grid>
  );
}
