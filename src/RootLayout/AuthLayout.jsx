import React, { Suspense } from "react";
import Navbar1 from "../Components/Navbar1";
import { Outlet } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner";

const AuthLayout = () => {
  return (
    <div className="bg-gray-100 pt-10">
      <header className="w-11/12 mx-auto">
        <Navbar1 />
      </header>
      <main className="w-11/12 mx-auto">
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default AuthLayout;
