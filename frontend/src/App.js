import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Quiz from "./pages/Quiz";
import Schedule from "./pages/Schedule";
import Notes from "./pages/Notes";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AITutor from "./pages/AITutor";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Layout>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/upload" element={<Upload />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/notes" element={<Notes />} />
                    <Route path="/ai-tutor" element={<AITutor />} />
                  </Routes>
                </Layout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;