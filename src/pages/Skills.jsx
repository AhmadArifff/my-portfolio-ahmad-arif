// src/pages/Skills.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Code2, LineChart, Server, GraduationCap } from "lucide-react"

const skills = [
  {
    title: "Data Analyst",
    icon: <LineChart className="w-8 h-8 text-blue-500" />,
    desc: "Mengolah, menganalisis, dan memvisualisasikan data untuk pengambilan keputusan."
  },
  {
    title: "Data Engineer",
    icon: <Database className="w-8 h-8 text-green-500" />,
    desc: "Merancang pipeline data, ETL, dan arsitektur data warehouse."
  },
  {
    title: "Backend Developer",
    icon: <Server className="w-8 h-8 text-purple-500" />,
    desc: "Membangun API, otentikasi, dan manajemen database dengan Node.js & Express."
  },
  {
    title: "Fullstack Developer",
    icon: <Code2 className="w-8 h-8 text-yellow-500" />,
    desc: "Mengembangkan aplikasi end-to-end dengan React, Node.js, dan database modern."
  },
  {
    title: "Dosen",
    icon: <GraduationCap className="w-8 h-8 text-red-500" />,
    desc: "Mengajar dan berbagi pengetahuan tentang data, sistem, dan pemrograman."
  },
]

export default function Skills() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12">
          Keahlian Saya
        </h1>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, idx) => (
            <Card key={idx} className="shadow-lg hover:shadow-xl transition">
              <CardHeader className="flex items-center space-x-4">
                {skill.icon}
                <CardTitle>{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{skill.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
