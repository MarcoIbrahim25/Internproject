import { useTheme } from "../context/ThemeContext";

export default function Home() {
  const { theme } = useTheme();

  const pageClasses =
    theme === "dark" ? "bg-slate-800 text-white" : "bg-white text-slate-900";

  const data = [
    { id: 1, name: "Marco", role: "Developer" },
    { id: 2, name: "Ali", role: "Team lead" },
  ];

  return (
    <div
      className={`min-h-screen px-4 py-6 ${pageClasses} flex flex-col items-center`}
    >
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>

      <table className="border-collapse mx-auto">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td className="border p-2">{user.id}</td>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
