import React from "react";
import { FaUserEdit, FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import "./Profile.scss";

const Profile = () => {
  // Example user data (replace with real user data from API or state)
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    joined: "January 15, 2024",
    profilePicture: "https://via.placeholder.com/150", // Replace with actual profile image
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={user.profilePicture} alt="Profile" className="profile-pic" />
        <h2>{user.name}</h2>
        <p>
          <FaEnvelope className="icon" /> {user.email}
        </p>
        <p>
          <FaCalendarAlt className="icon" /> Joined: {user.joined}
        </p>

        <button className="edit-btn">
          <FaUserEdit className="icon" /> Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
