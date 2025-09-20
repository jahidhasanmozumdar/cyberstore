import React from "react";
import "../firebase/firebase.init";
import { getAuth, signOut } from "firebase/auth";

const Logout = () => {
  const auth = getAuth();

  const handleLogout = async () => {
    await signOut(auth);
    // Redirect or show message
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
      Logout
    </button>
  );
};

export default Logout;
