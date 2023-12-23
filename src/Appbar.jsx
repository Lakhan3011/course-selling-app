import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Appbar() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 15,
      }}
    >
      <div>
        <Typography variant="h6">Coursera</Typography>
      </div>
      <div style={{ display: "flex" }}>
        <Button
          variant="contained"
          style={{ marginRight: 20 }}
          onClick={() => {
            navigate("/signup");
          }}
        >
          Signup
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/signin");
          }}
        >
          Signin
        </Button>
      </div>
    </div>
  );
}

export default Appbar;
