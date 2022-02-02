import { Grid, Button } from "@mui/material";
import { Check, Close, DeleteOutline } from "@mui/icons-material";

export default function UserActions({ status, updateStatus, deleteUser, id }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        { status ? 
          <Button color="success" onClick={() => updateStatus(id, false)}> <Check /> </Button> :
          <Button color="secondary" onClick={() => updateStatus(id, true)}> <Close /> </Button>
        }
      </Grid>
      <Grid item xs={6}>
        <Button color="error" onClick={ () => deleteUser(id) }>
          <DeleteOutline />
        </Button>
      </Grid>
    </Grid>
  );
}
