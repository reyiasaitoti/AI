import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import LearnMore from "./pages/LearnMore";
import Upload from "./pages/Upload";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute"; // ✅ Correct import

const App = () => {
  return (
    <Router>
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/upload" element={<Upload />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>
          <Route path="/learn-more" element={<LearnMore />} />
          

        </Routes>
      </main>
    </Router>
  );
};

export default App;
