import React from "react";
import "../firebase/firebase.init";
import { getAuth } from "firebase/auth";

const Profile = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      {user ? (
        <div>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>User ID:</strong> {user.uid}</p>
        </div>
      ) : (
        <p>No user logged in.</p>
      )}
    </div>
  );
};

export default Profile;
