import React, { use, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const RegisterPage = () => {
  const [accepted, setAccepted] = useState(false);
  const { createUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!accepted) {
      Swal.fire({
        icon: "warning",
        title: "Terms Required",
        text: "You must accept the terms and conditions",
      });
      return;
    }

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;

    createUser(email, password)
      .then(() => {
        return updateUser({
          displayName: name,
          photoURL: photoUrl
        });
    })
    .then(() => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Registered!",
            showConfirmButton: false,
            timer: 1500,
        });
        navigate('/');
      })
      .catch((error) => {
        console.error("Registration failed:", error);
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
        });
      });
  };


  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="w-full max-w-md bg-white shadow rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Register your account
        </h2>
        <hr className="mb-6 text-gray-200" />

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-4 bg-gray-100 rounded focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Photo URL</label>
            <input
              type="text"
              name="photoUrl"
              placeholder="Enter your password"
              className="w-full px-4 py-4 bg-gray-100 rounded focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-4 bg-gray-100 rounded focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-4 bg-gray-100 rounded focus:outline-none"
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              className="accent-black"
              onChange={(e) => setAccepted(e.target.checked)}
            />
            <label htmlFor="terms" className="text-sm">
              Accept <span className="font-semibold">Term & Conditions</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-4 rounded font-medium hover:bg-gray-800 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
