// src/pages/ProjectDetail.jsx
import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ProjectDetail() {
  const { id } = useParams()
  const [project, setProject] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem("projects")
    if (saved) {
      const data = JSON.parse(saved)
      setProject(data[id])
    }
  }, [id])

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-xl font-bold">Project not found 😢</h1>
        <Link to="/projects">
          <Button className="mt-4">Back to Projects</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">{project.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Screenshot Dummy */}
            <img 
              src="https://via.placeholder.com/800x400.png?text=Project+Screenshot" 
              alt={project.title} 
              className="w-full rounded-lg shadow-md"
            />

            {/* Deskripsi */}
            <p className="text-gray-700 leading-relaxed">{project.description}</p>

            {/* Tech Stack */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Tech Stack</h2>
              <p className="text-sm text-gray-600">{project.tech}</p>
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <Button variant="default">View Demo</Button>
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Button variant="outline">View GitHub</Button>
                </a>
              )}
            </div>

            {/* Back Button */}
            <Link to="/projects">
              <Button variant="secondary">⬅ Back to Projects</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
