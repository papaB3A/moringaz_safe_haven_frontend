import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/style2.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

export default function UserProfile() {
  // const API_URL = process.env.REACT_APP_API_URL;
  // `${API_URL}/get_messages`

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token
    navigate("/login");
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        // `${API_URL}/profile`
        // "http://localhost:5000/profile"
        const response = await axios.get("https://moringaz-safe-haven-backend.onrender.com/profile", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        if (error.response && error.response.status === 401) {
          handleLogout(); // Log out on unauthorized
        }
      }
    };

    fetchProfile();
  }, [navigate]);

  if (!user) {
    return <div>Loading user profile...</div>;
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="shadow w-350 p-3 text-center">
        <img
          src={user.img ? `../images/${user.img}` : '../images/no_image.jpg'}
          className="img-fluid rounded-circle"
          style={{ width: '150px', height: '150px' }}
          alt="Profile"
        />
        <h3 className="display-4">{user.fname} {user.lname}</h3>
        {/* <p>{user.email}</p>
        <p>Status: {user.status}</p> */}

        {/* <Link to="/edit-profile" className="btn btn-warning">
          Edit Profile
        </Link> */}
        <Link to="/" className="btn btn-warning">Home</Link>
        <Link to="/login" className="btn btn-warning" onClick={handleLogout}>
          Logout
        </Link>
      </div>
    </div>
  );
}