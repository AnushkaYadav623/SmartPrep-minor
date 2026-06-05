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
<<<<<<< HEAD
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
=======
>>>>>>> b4e15c27c08cf73e41221cce393cd4b6b6c25b35
import "./App.css";

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
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
=======
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/*"
          element={
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
          }
        />
      </Routes>
>>>>>>> b4e15c27c08cf73e41221cce393cd4b6b6c25b35
    </BrowserRouter>
  );
}

export default App;