import React from "react";
import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center">
      {/* Logo / Branding */}
      <h1 className="text-6xl font-extrabold text-[#A084DC]">404</h1>
      <h2 className="mt-2 text-2xl font-semibold text-gray-800">
        Oops! Page Not Found
      </h2>

      {/* Error Message */}
      <p className="mt-3 text-gray-500">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <p className="mt-1 text-sm text-gray-400 italic">
        {error?.statusText || error?.message}
      </p>

      {/* Back to home button */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-[#A084DC] text-white rounded-lg shadow hover:bg-[#8b6fc9] transition duration-300"
      >
        Back to Home
      </Link>

      {/* Extra link */}
      <Link
        to="/contact"
        className="mt-3 text-sm text-[#A084DC] hover:underline"
      >
        Need help? Contact Support
      </Link>
    </div>
  );
};

export default ErrorPage;
