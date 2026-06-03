import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Quiz from "./pages/Quiz";
import Schedule from "./pages/Schedule";
import Notes from "./pages/Notes";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/upload" element={<Upload />} />

        <Route path="/quiz" element={<Quiz />} />

        <Route path="/schedule" element={<Schedule />} />

        <Route path="/notes" element={<Notes />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;