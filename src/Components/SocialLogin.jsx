import { use } from "react";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { signInGoogle } = use(AuthContext);

  const handleSignIn = () => {
    signInGoogle()
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
    <div>
      <h1 className="font-semibold mb-5">Login With</h1>
      <div className="space-y-2">
        <button
          onClick={handleSignIn}
          className="btn btn-outline w-full btn-secondary"
        >
          login with Google
        </button>

        <button className="btn btn-outline w-full">
          <FaGithub />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
