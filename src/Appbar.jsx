import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Appbar() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/admin/me", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserEmail(data.username);
      });
  }, []);

  if (userEmail) {
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
          {userEmail}
          <Button
            variant="contained"
            style={{ marginRight: 20 }}
            onClick={() => {
              localStorage.setItem("token", null);
              window.location = "/";
            }}
          >
            Logout
          </Button>
        </div>
      </div>
    );
  }
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
