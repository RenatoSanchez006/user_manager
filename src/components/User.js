import UserActions from "./UserActions";
import { Typography, Grid, Avatar } from "@mui/material";
import { red, green } from "@mui/material/colors";

export default function User({ user }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Avatar
          sx={{ border: 3, borderColor: user.isActive ? green[800] : red[700] }}
          alt={user.email}
          src={user.image}
        />
      </Grid>
      <Grid item xs={7}>
        <Typography variant="h6">
          {user.name} {user.lastName}
        </Typography>
        <Typography color="gray" variant="subtitle2">
          {user.email}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <UserActions user={user} />
      </Grid>
    </Grid>
  );
}
