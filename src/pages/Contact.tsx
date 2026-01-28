import { useTheme } from "../context/ThemeContext";
import { useQuery } from "@tanstack/react-query";
import axiosClient from "../api/axiosClient";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function fetchPosts(): Promise<Post[]> {
  const response = await axiosClient.get<Post[]>("/posts");
  return response.data;
}

export default function Contact() {
  const { theme } = useTheme();

  const pageClasses =
    theme === "dark" ? "bg-slate-800 text-white" : "bg-white text-slate-900";

  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return (
      <div
        className={`min-h-screen px-4 py-6 ${pageClasses} flex items-center justify-center`}
      >
        <p className="text-xl font-semibold">Loading posts...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div
        className={`min-h-screen px-4 py-6 ${pageClasses} flex items-center justify-center`}
      >
        <p className="text-red-400">{(error as Error).message}</p>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen px-4 py-6 ${pageClasses} flex flex-col items-center`}
    >
      <h1 className="text-2xl font-bold mb-4">Content / Contact Page</h1>

      <section className="w-full max-w-2xl mb-8">
        <h2 className="text-xl font-semibold mb-3">Posts from API</h2>
        <div className="space-y-3">
          {posts?.slice(0, 5).map((post) => (
            <article
              key={post.id}
              className="border rounded-lg p-3 bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-white"
            >
              <h3 className="font-semibold mb-1">{post.title}</h3>
              <p className="text-sm">{post.body}</p>
            </article>
          ))}
        </div>
      </section>

      <form className="space-y-4 max-w-md mx-auto w-full">
        <div>
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            className="w-full p-2 border rounded text-black placeholder-slate-400"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block mb-1">Message:</label>
          <textarea
            className="w-full p-2 border rounded text-black h-32 placeholder-slate-400"
            placeholder="Your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded w-full"
        >
          Send
        </button>
      </form>
    </div>
  );
}
