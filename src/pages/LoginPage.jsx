import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";

const LoginPage = () => {
  const {signInUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((userCredential) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Welcome back, ${userCredential.user.email.split("@")[0]}!`,
          toast: true,
          showConfirmButton: false,
          timer: 2000,
          background: "#f0fdf4", 
          iconColor: "#16a34a", 
          color: "#166534",
          customClass: {
            title: "text-lg font-semibold",
            popup: "shadow-lg border border-green-200 rounded-lg",
          },
          showClass: {
            popup: "animate__animated animate__fadeInRight animate__faster",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutRight animate__faster",
          },
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        navigate(`${location.state? location.state : '/'}`);
      })
      .catch((error) => {
        let errorMessage;

        switch (error.code) {
          case "auth/invalid-email":
            errorMessage = "Please enter a valid email address";
            break;
          case "auth/user-disabled":
            errorMessage = "This account has been disabled";
            break;
          case "auth/user-not-found":
            errorMessage = "No account found with this email";
            break;
          case "auth/wrong-password":
            errorMessage = "Incorrect password. Please try again";
            break;
          case "auth/too-many-requests":
            errorMessage = "Too many attempts. Account temporarily locked";
            break;
          default:
            errorMessage = "Login failed. Please try again later";
        }

        // Error notification
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Login Failed",
          text: errorMessage,
          showConfirmButton: true,
          confirmButtonText: "Try Again",
          confirmButtonColor: "#ef4444", // Red-500
          background: "#fef2f2", // Light red background
          iconColor: "#dc2626", // Red-600
          color: "#991b1b", // Red-800
          customClass: {
            title: "text-xl font-bold",
            popup: "shadow-xl border border-red-200 rounded-lg",
          },
          showClass: {
            popup: "animate__animated animate__headShake",
          },
          allowOutsideClick: false,
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="w-full max-w-md bg-white shadow rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login your account
        </h2>
        <hr className="mb-6 text-gray-200" />

        <form onSubmit={handleLogin} className="space-y-8">
          <div>
            <label className="block text-sm font-medium mb-1">
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-4  bg-gray-100 rounded focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-4  bg-gray-100 rounded focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-4 rounded font-medium hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Don’t Have An Account?{" "}
          <Link to="/auth/register" className="text-red-500 font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
