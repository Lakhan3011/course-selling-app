import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Card, Typography } from "@mui/material";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        <Typography variant="h6">Welcome to Coursera. Sign up below</Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant="outlined" style={{ width: 400, padding: 20 }}>
          <TextField
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            label="Email"
            variant="outlined"
            fullWidth={true}
          />
          <br /> <br />
          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label="Password"
            type="Password"
            variant="outlined"
            fullWidth={true}
          />
          <br />
          <br />
          <Button
            size="large"
            variant="contained"
            onClick={async () => {
              const res = await axios.post(
                "http://localhost:3000/admin/signup",
                {
                  username: email,
                  password: password,
                }
              );
              const data = res.data;
              localStorage.setItem("token", data.token);
              window.location = "/";
            }}
          >
            SignUp
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
