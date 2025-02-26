import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar.jsx";
import Portfolio from "./components/portfolio.jsx";
import Dashboard from "./components/dashboard.jsx";
import Input from "./components/input.jsx";
import Profile from "./components/profile.jsx";
import Projects from "./components/projects.jsx";
const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/inputs" element={<Input />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/portfolio/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
