import { Moon, Sun } from "lucide-react";
import useDarkMode from "@/hooks/useDarkMode";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [theme, setTheme] = useDarkMode();

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-slate-200 dark:bg-slate-900 shadow">
      <h1 className="font-bold text-lg dark:text-white">Ahmad Arif</h1>
      <div className="flex gap-4 items-center">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </Button>
      </div>
    </nav>
  );
}