import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Pencil, Trash2, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import Loader from "@/components/Loader";

export default function Projects() {
  const [projects, setProjects] = useState(null); // null = loading
  const [form, setForm] = useState({ title: "", description: "", tech: "", demo: "", github: "" });
  const [editIndex, setEditIndex] = useState(null);

  // Load from localStorage
  useEffect(() => {
    setTimeout(() => { // simulasi loading
      const saved = localStorage.getItem("projects");
      setProjects(saved ? JSON.parse(saved) : []);
    }, 1000);
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (projects) localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const handleSave = () => {
    if (!form.title || !form.description) return;
    if (editIndex !== null) {
      const updated = [...projects];
      updated[editIndex] = form;
      setProjects(updated);
      setEditIndex(null);
    } else {
      setProjects([...projects, form]);
    }
    setForm({ title: "", description: "", tech: "", demo: "", github: "" });
  };

  const handleEdit = (index) => {
    setForm(projects[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = projects.filter((_, i) => i !== index);
    setProjects(updated);
  };

  // Loader saat loading
  if (projects === null) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My Projects</h1>

          {/* Add / Edit Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" /> {editIndex !== null ? "Edit Project" : "Add Project"}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editIndex !== null ? "Edit Project" : "Add New Project"}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Input
                  placeholder="Project Title"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
                <Textarea
                  placeholder="Description"
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                />
                <Input
                  placeholder="Tech Stack (comma separated)"
                  value={form.tech}
                  onChange={(e) => setForm({ ...form, tech: e.target.value })}
                />
                <Input
                  placeholder="Demo Link"
                  value={form.demo}
                  onChange={(e) => setForm({ ...form, demo: e.target.value })}
                />
                <Input
                  placeholder="GitHub Link"
                  value={form.github}
                  onChange={(e) => setForm({ ...form, github: e.target.value })}
                />
                <Button onClick={handleSave}>
                  {editIndex !== null ? "Update" : "Save"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* List Projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Card key={i} className="shadow hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">{p.description}</p>
                <p className="text-xs text-gray-500 mb-2">Tech: {p.tech}</p>
                <div className="flex gap-2 text-sm">
                  {p.demo && <a href={p.demo} target="_blank" className="text-blue-500 underline">Demo</a>}
                  {p.github && <a href={p.github} target="_blank" className="text-gray-700 underline">GitHub</a>}
                </div>
                <div className="flex gap-2 mt-4">
                  <Link to={`/projects/${i}`}>
                    <Button size="sm">View Detail</Button>
                  </Link>
                  <Button size="sm" variant="outline" onClick={() => handleEdit(i)}>
                    <Pencil className="w-4 h-4 mr-1" /> Edit
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(i)}>
                    <Trash2 className="w-4 h-4 mr-1" /> Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}