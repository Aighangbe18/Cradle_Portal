import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../auth/authStore";
import { mockLogin } from "../utils/api";
import LoadingSpinner from "../components/LoadingSpinner";
import ForgotPasswordModal from "../components/ForgotPasswordModal"; // Make sure this path is correct

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const loginUser = useAuthStore((state) => state.login);

  // State for Forgot Password Modal
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [forgotPasswordMessage, setForgotPasswordMessage] = useState("");
  const [forgotPasswordMessageType, setForgotPasswordMessageType] = useState<
    "success" | "error" | ""
  >("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const response = await mockLogin(username, password);

    if (response.success && response.user) {
      loginUser(response.user);
      switch (response.user.role) {
        case "admin":
          navigate("/admin/dashboard");
          break;
        case "teacher":
          navigate("/teacher/dashboard");
          break;
        case "student":
          navigate("/student/dashboard");
          break;
        default:
          navigate("/"); // Fallback
      }
    } else {
      setError(response.message || "Login failed. Please try again.");
    }
    setLoading(false);
  };

  // Handler for opening the Forgot Password modal
  const handleForgotPassword = () => {
    setShowModal(true);
    setForgotPasswordMessage(""); // Clear any previous messages when opening
    setEmail(""); // Clear email when opening
  };

  // Handler for sending the reset link (inside the modal)
  const handleSendResetLink = () => {
    if (!email) {
      setForgotPasswordMessage("Please enter your email.");
      setForgotPasswordMessageType("error");
      return;
    }
    // Simulate sending email (in a real app, this would be an API call)
    console.log(`Sending password reset link to: ${email}`);
    setForgotPasswordMessage(`Password reset link sent to ${email}`);
    setForgotPasswordMessageType("success");
    // You might want to close the modal here after a short delay
    // setTimeout(() => setShowModal(false), 2000); // Consider auto-closing
  };

  return (
    // Removed the outer 'min-h-screen flex items-center justify-center bg-gray-100'
    // and the 'bg-white p-8 rounded-lg shadow-xl w-full max-w-md' divs.
    // These styling aspects are now handled by the LoginPage component.
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            {" "}
            {/* Added font-semibold */}
          </label>
          <input
            type="text"
            id="username"
            className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out" /* Refined input styles */
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            {" "}
            {/* Added font-semibold */}
          </label>
          <input
            type="password"
            id="password"
            className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out" /* Refined input styles */
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>
        {error && (
          <p className="text-red-600 text-sm font-medium italic mb-4 text-center">
            {error}
          </p>
        )}{" "}
        {/* Enhanced error message */}
        <div className="flex flex-col items-center justify-between mt-6 space-y-4 sm:space-y-0">
          {" "}
          {/* Added responsive layout for buttons */}
          <button
            type="submit"
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:scale-105 ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? <LoadingSpinner /> : "Log In"}
          </button>
          <button
            type="button"
            onClick={handleForgotPassword}
            className="inline-block align-baseline rounded-full font-semibold text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 p-1" /* Styled as a button for better click area */
          >
            Forgot Password?
          </button>
        </div>
      </form>

      {/* Forgot Password Modal */}
      <ForgotPasswordModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onSend={handleSendResetLink}
        setEmail={setEmail}
        email={email}
        message={forgotPasswordMessage}
        messageType={forgotPasswordMessageType}
      />
    </>
  );
};

export default Login;
