export default function Login() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
        <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-center text-xl font-semibold">Sign in</h2>
          <h3 className="text-center text-2xl font-bold mt-2">Welcome again!</h3>
          <p className="text-center text-gray-600 text-sm mb-4">Please enter your details</p>
  
          <div className="flex gap-2 mb-4">
            <button className="flex-1 py-2 border rounded-lg bg-gray-200 font-medium">User Login</button>
            <button className="flex-1 py-2 border rounded-lg bg-gray-800 text-white font-medium">Admin Login</button>
          </div>
  
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-400" />
            </div>
  
            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input type="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-400" />
            </div>
          </div>
  
          <div className="text-right mt-2">
            <a href="#" className="text-sm text-gray-600 hover:underline">Forgot Password?</a>
          </div>
  
          <button className="w-full bg-gray-700 text-white py-2 rounded-lg mt-4 hover:bg-gray-900 transition">Log In</button>
        </div>
      </div>
    );
  }
  