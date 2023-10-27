import "./App.css";
import {Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from "./pages/About";
import Courses from "./pages/Courses";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/courses" element={<Courses/>} />
        {/* <Route path="/" element={<Home/>} /> */}
        {/* <Route path="/" element={<Home/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
