import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Appbar from "./Appbar";
import AddCourse from "./AddCourse";
import Signin from "./Signin";
import Signup from "./Signup";
import Courses from "./Courses";
import Course from "./Course";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div
      style={{ backgroundColor: "#eeeeee", width: "100vw", height: "100vh" }}
    >
      <RecoilRoot>
        <Router>
          <Appbar />
          <Routes>
            <Route path={"/course/:courseId"} element={<Course />} />
            <Route path={"/courses"} element={<Courses />} />
            <Route path={"/addcourse"} element={<AddCourse />} />
            <Route path={"/signin"} element={<Signin />} />
            <Route path={"/signup"} element={<Signup />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
