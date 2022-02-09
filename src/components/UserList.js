import { useContext } from "react";
import { userContext } from "../context/user-context";
import User from "./User";
import { Grid } from "@mui/material";

export default function UserList() {
  const { users } = useContext(userContext);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {users.map((user) => {
          return <User key={user.id} user={user} />;
        })}
      </Grid>
    </Grid>
  );
}
