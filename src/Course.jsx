import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Typography, TextField, Button, Grid } from "@mui/material";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { atom } from "recoil";
import axios from "axios";

function Course() {
  let { courseId } = useParams();
  const [course, setCourse] = useState(null);

  // const setCourses = useSetRecoilState(coursesState);

  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/course/" + courseId, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setCourse(res.data.course);
      });
  }, []);

  if (!course) {
    return (
      <div
        style={{
          height: "100vh",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        Loading....
      </div>
    );
  }

  return (
    <div>
      <GrayTopper title={course.title}></GrayTopper>
      <Grid container>
        <Grid item lg={8} md={12} sm={12}>
          <UpdateCard course={course} setCourse={setCourse} />
        </Grid>
        <Grid item lg={4} md={12} sm={12}>
          <CourseCard course={course} />
        </Grid>
      </Grid>
    </div>
  );
}

function GrayTopper({ title }) {
  return (
    <div
      style={{
        height: 250,
        background: "#212121",
        top: 0,
        width: "100vw",
        zIndex: 0,
        marginBottom: -250,
      }}
    >
      <div
        style={{
          height: 250,
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <Typography
            style={{ color: "white", fontWeight: 600 }}
            variant="h3"
            textAlign={"center"}
          >
            {title}
          </Typography>
        </div>
      </div>
    </div>
  );
}

function UpdateCard({ course, setCourse }) {
  const [title, setTitle] = useState(course.title);
  const [description, setDescription] = useState(course.description);
  const [image, setImage] = useState(course.imageLink);
  const [price, setPrice] = useState(course.price);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card variant="outlined" style={{ maxWidth: 600, marginTop: 200 }}>
        <div style={{ padding: 20 }}>
          <Typography style={{ marginBottom: 10 }}>
            Update Course Details
          </Typography>
          <TextField
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            label="Title"
            variant="outlined"
            fullWidth={true}
            style={{ marginBottom: 10 }}
          />

          <TextField
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            label="Description"
            variant="outlined"
            fullWidth={true}
            style={{ marginBottom: 10 }}
          />

          <TextField
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
            label="Image Link"
            variant="outlined"
            fullWidth={true}
            style={{ marginBottom: 10 }}
          />

          <TextField
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            label="Price"
            variant="outlined"
            fullWidth={true}
            style={{ marginBottom: 10 }}
          />

          <Button
            size="large"
            variant="contained"
            onClick={async () => {
              await axios.put(
                "http://localhost:3000/admin/courses/" + course.id,
                {
                  title: title,
                  description: description,
                  imageLink: image,
                  published: true,
                  price,
                },
                {
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              );
              let updatedCourse = {
                id: course.id,
                title: title,
                description: description,
                imageLink: image,
                price,
              };
              setCourse(updatedCourse);
            }}
          >
            update course
          </Button>
        </div>
      </Card>
    </div>
  );
}

function CourseCard(props) {
  const course = props.course;

  return (
    <div
      style={{
        display: "flex",
        marginTop: 50,
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Card
        style={{
          width: 350,
          margin: 10,
          minHeight: 200,
          borderRadius: 20,
          marginRight: 50,
          paddingBottom: 15,
          zIndex: 2,
        }}
      >
        <img src={course.imageLink} style={{ width: 350 }}></img>
        <div style={{ marginLeft: 10 }}>
          <Typography variant="h5">{course.title}</Typography>
          <Typography variant="subtitle2" style={{ color: "gray" }}>
            Price
          </Typography>
          <Typography variant="subtitle1">
            <b>Rs {course.price}</b>
          </Typography>
        </div>
      </Card>
    </div>
  );
}

export default Course;
// const coursesState = atom({
//   key: "coursesState", // unique ID (with respect to other atoms/selectors)
//   default: "", // default value (aka initial value)
// });
