import { Link, NavLink } from "react-router";
import { FaCircleUser } from "react-icons/fa6";
import { use } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";

const Navbar1 = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sign Out Successfully!!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          timer: 1500,
        });
      });
  };
  return (
    <div className="flex justify-between">
      <div className="flex justify-center items-center text-xl font-bold">
        {user?.email}
      </div>
      <div className="flex justify-center items-center gap-6 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <Link to="/auth/login">
        <div className="flex justify-center items-center gap-4">
          {
            user ? <img className="w-16 h-14 rounded-full" src={user?.photoURL} alt="" /> : <FaCircleUser size={38} />
          }
          {user ? (
            <button onClick={handleSignOut} className="btn btn-primary px-10">
              SignOut
            </button>
          ) : (
            <button className="btn btn-primary px-10">Login</button>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Navbar1;
