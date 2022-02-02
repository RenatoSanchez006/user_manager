import { Typography, Grid, Button } from "@mui/material";

export default function Header({ userCount, addUser }) {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Typography variant="h4">User Manager ({userCount})</Typography>
        </Grid>
        <Grid item xs={2}>
          <Button variant="outlined" fullWidth onClick={() => addUser() }>
            Add
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
