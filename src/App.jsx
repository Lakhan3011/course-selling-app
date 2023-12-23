import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Appbar from "./Appbar";
import AddCourse from "./AddCourse";
import Signin from "./Signin";
import Signup from "./Signup";

function App() {
  return (
    <div
      style={{ backgroundColor: "#eeeeee", width: "100vw", height: "100vh" }}
    >
      <Router>
        <Appbar />
        <Routes>
          <Route path={"/addcourse"} element={<AddCourse />} />
          <Route path={"/signin"} element={<Signin />} />
          <Route path={"/signup"} element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
