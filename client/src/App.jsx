import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreatePoll from "./pages/CreatePoll";
import Dashboard from "./pages/Dashboard";
import Features from "./pages/Features";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-950">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-poll" element={<CreatePoll />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/features" element={<Features />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/signup"
            element={<Signup />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
