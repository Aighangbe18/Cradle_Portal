import React, { useState, Dispatch, SetStateAction } from "react"; // Import Dispatch and SetStateAction

interface ForgotPasswordModalProps {
  show: boolean;
  onHide: () => void;
  onSend: () => void; // Add this prop
  setEmail: Dispatch<SetStateAction<string>>; // Add this prop
  email: string; // Add this prop
  message: string; // Add this prop
  messageType: "success" | "error" | ""; // Add this prop
}

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({
  show,
  onHide,
  onSend, // Destructure the new props
  setEmail,
  email,
  message,
  messageType,
}) => {
  // If the modal is not shown, return null to render nothing
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm transform transition-all duration-300 scale-100 opacity-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Forgot Password
          </h3>
          <button
            onClick={onHide}
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md p-1"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <p className="text-gray-600 mb-4 text-sm">
          Enter your email address and we'll send you a link to reset your
          password.
        </p>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {message && (
          <p
            className={`text-sm mb-4 text-center ${
              messageType === "error" ? "text-red-600" : "text-green-600"
            }`}
          >
            {message}
          </p>
        )}

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onHide}
            className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200 ease-in-out"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onSend} // Use the onSend prop
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          >
            Send Reset Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
