import { Grid } from "@mui/material";
import User from "./User";

export default function UserList({ userList, deleteUser, updateStatus }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {userList.map((user) => {
          return <User key={user.id} user={user} updateStatus={updateStatus} deleteUser={deleteUser} />;
        })}
      </Grid>
    </Grid>
  );
}
