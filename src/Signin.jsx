import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Card, Typography } from "@mui/material";

function Signin() {
  return (
    <div>
      <div
        style={{
          paddingTop: 150,
          marginBottom: 20,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6">Welcome Back👋🏻 Sign In below</Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant="outlined" style={{ width: 400, padding: 20 }}>
          <TextField
            id="Username"
            label="Email"
            variant="outlined"
            fullWidth={true}
          />
          <br /> <br />
          <TextField
            id="Password"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth={true}
          />
          <br />
          <br />
          <Button variant="contained">Signin</Button>
        </Card>
      </div>
    </div>
  );
}

export default Signin;
