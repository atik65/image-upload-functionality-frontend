import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Dashboard from "./components/Dashboard";
import ImageUpload from "./components/ImageUpload";
import MakeAdmin from "./components/MakeAdmin";

function App() {
  return (
    <>
      <Router>
        <Link to="/"> Home </Link> <br />
        <Link to="/dashboard"> Dashboard</Link> <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="admin" element={<Admin />} />
            <Route path="imageupload" element={<ImageUpload />} />
            <Route path="makeadmin" element={<MakeAdmin />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
