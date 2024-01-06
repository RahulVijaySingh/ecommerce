import "./App.css";
import Layout from "./components/Layout/Layout.js";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import Pagenotfound from "./pages/Pagenotfound.js";
import Policy from "./pages/Policy.js";
import Contact from "./pages/Contact.js";
import About from "./pages/About.js";
import Register from "./pages/Auth/Register.js";
import Login from "./pages/Auth/Login.js";
import Dashboard from "./pages/user/Dashboard.js";
import PrivateRoute from "./components/Route/Private.js";
import ForgotPassword from "./pages/Auth/ForgotPassword.js";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
