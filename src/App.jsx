// src/App.jsx
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

// Import pages
import Home from "./pages/Home"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import ProjectDetail from "./pages/ProjectDetail"

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Navbar selalu tampil */}
      <Navbar />

      {/* Konten berubah sesuai route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  )
}

export default App
