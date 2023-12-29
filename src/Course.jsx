import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Typography, TextField, Button } from "@mui/material";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { atom } from "recoil";

function Course() {
  let { courseId } = useParams();
  // const [courses, setCourses] = useState([]);

  const setCourses = useSetRecoilState(coursesState);
  console.log("Course rerendered");
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
    <div style={{ display: "flex", justifyContent: "center", padding: 50 }}>
      <CourseCard courseId={courseId} />
      <UpdateCard courseId={courseId} />
    </div>
  );
}

function UpdateCard(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [courses, setCourses] = useRecoilState(coursesState);
  console.log("Update Card rerendered");
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card variant="outlined" style={{ width: 400, padding: 20 }}>
        <Typography>Update Course Details</Typography>
        <TextField
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          label="Title"
          variant="outlined"
          fullWidth={true}
        />
        <br /> <br />
        <TextField
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          label="Description"
          variant="outlined"
          fullWidth={true}
        />
        <br />
        <br />
        <TextField
          onChange={(e) => {
            setImage(e.target.value);
          }}
          label="Image Link"
          variant="outlined"
          fullWidth={true}
        />
        <br />
        <br />
        <Button
          size="large"
          variant="contained"
          onClick={() => {
            fetch("http://localhost:3000/admin/courses/" + props.courseId, {
              method: "PUT",
              body: JSON.stringify({
                title: title,
                description: description,
                imageLink: image,
                published: true,
              }),
              headers: {
                "Content-type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            })
              .then((res) => {
                return res.json();
              })
              .then((data) => {
                let updatedCourse = [];
                for (let i = 0; i < courses.length; i++) {
                  if (courses[i].id === props.courseId) {
                    updatedCourse.push({
                      id: props.courseId,
                      title: title,
                      description: description,
                      imageLink: image,
                    });
                  } else {
                    updatedCourse.push(courses[i]);
                  }
                }
                setCourses(updatedCourse);
              });
          }}
        >
          update course
        </Button>
      </Card>
    </div>
  );
}

function CourseCard(props) {
  const courses = useRecoilValue(coursesState);
  let course = null;
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].id == props.courseId) {
      course = courses[i];
    }
  }

  if (!course) {
    return <div>Loading....</div>;
  }
  console.log("Course Card rerendered");
  return (
    <Card style={{ width: 300, margin: 10, minHeight: 200 }}>
      <Typography variant="h5" textAlign={"center"}>
        {course.title}
      </Typography>

      <Typography variant="subtitle1" textAlign={"center"}>
        {course.description}
      </Typography>
      <img src={course.imageLink} style={{ width: 350 }}></img>
    </Card>
  );
}

export default Course;
const coursesState = atom({
  key: "coursesState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
