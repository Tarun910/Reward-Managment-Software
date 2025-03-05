import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default role: user
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Hardcoded credentials for testing (Replace with API call in future)
  const users = {
    user: { email: "user@example.com", password: "user123" },
    admin: { email: "admin@example.com", password: "admin123" },
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // Check if email and password match the selected role
    if (email === users[role].email && password === users[role].password) {
      // Redirect based on role
      if (role === "admin") {
        navigate("/adminpage");
      } else {
        navigate("/userprofile");
      }
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-center text-xl font-semibold">Sign in</h2>
        <h3 className="text-center text-2xl font-bold mt-2">Welcome again!</h3>
        <p className="text-center text-gray-600 text-sm mb-4">Please enter your details</p>

        {/* Role Selection */}
        <div className="flex gap-2 mb-4">
          <button
            className={`flex-1 py-2 border rounded-lg font-medium transition ${
              role === "user" ? "bg-gray-800 text-white" : "bg-gray-200"
            } hover:bg-gray-300 cursor-pointer`}
            onClick={() => setRole("user")}
          >
            User Login
          </button>

          <button
            className={`flex-1 py-2 border rounded-lg font-medium transition ${
              role === "admin" ? "bg-gray-800 text-white" : "bg-gray-200"
            } hover:bg-gray-300 cursor-pointer`}
            onClick={() => setRole("admin")}
          >
            Admin Login
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="text-right mt-2">
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}

          <button
            type="submit"
            className="w-full bg-gray-700 text-white py-2 rounded-lg mt-4 hover:bg-gray-900 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
