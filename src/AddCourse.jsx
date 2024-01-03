import { TextField, Card, Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "80vh",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          variant="outlined"
          style={{ width: 400, padding: 20, marginTop: 30, height: "100%" }}
        >
          <TextField
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            label="Title"
            variant="outlined"
            fullWidth={true}
            style={{ marginBottom: 10 }}
          />

          <TextField
            style={{ marginBottom: 10 }}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            label="Description"
            variant="outlined"
            fullWidth={true}
          />

          <TextField
            style={{ marginBottom: 10 }}
            onChange={(e) => {
              setImage(e.target.value);
            }}
            label="Image Link"
            variant="outlined"
            fullWidth={true}
          />

          <TextField
            style={{ marginBottom: 10 }}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            label="Price"
            variant="outlined"
            fullWidth={true}
          />

          <Button
            size="large"
            variant="contained"
            onClick={() => {
              axios.post("http://localhost:3000/admin/courses", {
                title: title,
                description: description,
                imageLink: image,
                publised: true,
                price,
              });
              alert("Course added");
            }}
          >
            add course
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default AddCourse;
