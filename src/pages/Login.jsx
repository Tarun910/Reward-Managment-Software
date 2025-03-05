import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const users = {
    user: { email: "user@example.com", password: "user123" },
    admin: { email: "admin@example.com", password: "admin123" },
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (email === users[role].email && password === users[role].password) {
      navigate(role === "admin" ? "/adminpage" : "/userprofile");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-center text-3xl font-bold text-[#1F509A]">Welcome Back</h2>
        <p className="text-center text-gray-500 text-sm mb-6">Sign in to your account</p>

        <div className="flex mb-4 bg-gray-100 p-1 rounded-lg">
          <button
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${
              role === "user" ? "bg-[#1F509A] text-white" : "text-gray-600"
            }`}
            onClick={() => setRole("user")}
          >
            🔑 User
          </button>

          <button
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${
              role === "admin" ? "bg-[#1F509A] text-white" : "text-gray-600"
            }`}
            onClick={() => setRole("admin")}
          >
            🛡️ Admin
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:[#1F509A]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:[#1F509A]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-between text-sm text-gray-600">
            <label className="flex items-center">
              <input type="checkbox" className="mr-1" /> Remember me
            </label>
            <a href="#" className="text-[#1F509A] hover:underline">Forgot password?</a>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[#1F509A] text-white py-3 rounded-lg text-lg font-medium hover:bg-[#1F509A] transition"
          >
            Sign in
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-4">
          Don't have an account? <a href="#" className="text-[#1F509A] hover:underline">Sign up</a>
        </p>
      </div>
    </div>



  );
}
