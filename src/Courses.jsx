import { Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/admin/courses", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCourses(data.courses);
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

function Course(props) {
  return (
    <div>
      <Card
        variant="outlined"
        style={{ width: 300, margin: 10, minHeight: 200 }}
      >
        <Typography variant="h5" textAlign={"center"}>
          {props.course.title}
        </Typography>

        <Typography variant="subtitle1" textAlign={"center"}>
          {props.course.description}
        </Typography>
        <img src={props.course.imageLink} style={{ width: 350 }}></img>
      </Card>
    </div>
  );
}

export default Courses;
