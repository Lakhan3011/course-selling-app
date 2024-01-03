import { Button, Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/courses", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setCourses(res.data.courses);
      });
  }, []);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {courses.map((course) => {
        return <Course course={course} />;
      })}
    </div>
  );
}

function Course({ course }) {
  const navigate = useNavigate();
  return (
    <div>
      <Card
        variant="outlined"
        style={{ width: 300, margin: 10, minHeight: 200, padding: 20 }}
      >
        <Typography variant="h5" textAlign={"center"}>
          {course.title}
        </Typography>

        <Typography variant="subtitle1" textAlign={"center"}>
          {course.description}
        </Typography>
        <img src={course.imageLink} style={{ width: 300 }}></img>
        <div
          style={{ marginTop: 20, display: "flex", justifyContent: "center" }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/course/" + course.id)}
          >
            Edit
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Courses;
