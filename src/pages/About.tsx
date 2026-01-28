import { useTheme } from "../context/ThemeContext";

export default function About() {
  const { theme } = useTheme();

  const pageClasses =
    theme === "dark" ? "bg-slate-800 text-white" : "bg-white text-slate-900";

  return (
    <div
      className={`min-h-screen px-4 py-6 ${pageClasses} flex flex-col items-center`}
    >
      <h1 className="text-2xl font-bold mb-4">About Page</h1>

      <ul className="list-disc pl-5 space-y-2">
        <li>
          <a
            href="https://google.com"
            target="_blank"
            className="text-blue-500"
          >
            Google
          </a>
        </li>

        <li>
          <a
            href="https://github.com"
            target="_blank"
            className="text-blue-500"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
}
