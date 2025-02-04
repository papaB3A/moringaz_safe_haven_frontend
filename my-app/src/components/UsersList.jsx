import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';

import { useNavigate } from "react-router-dom";

const UsersList = () => {
  // const API_URL = process.env.REACT_APP_API_URL;
  // `${API_URL}/get_messages`
  
  const navigate = useNavigate();

  const handleChatClick = (userId) => {
    navigate(`/chats/${userId}`);
    console.log("Navigating to user:", userId);
  };

  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLoggedInUser = async () => {
      try {
        const token = localStorage.getItem("token");
        // "http://localhost:5000/profile"
        const response = await axios.get("https://moringaz-safe-haven-backend.onrender.com/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setLoggedInUser(response.data);
      } catch (err) {
        console.error("Error fetching logged-in user profile:", err.response?.data || err.message);
      }
    };

    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        // "http://localhost:5000/chats"
        const response = await axios.get("https://moringaz-safe-haven-backend.onrender.com/chats", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(response.data.users);
      } catch (err) {
        console.error("Error fetching users list:", err.response?.data || err.message);
        setError("Failed to load users.");
      } finally {
        setLoading(false);
      }
    };

    fetchLoggedInUser();
    fetchUsers();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="userlist-wrapper">
      <div className="wrapper">
        <section className="users">
          <header>
            <div className="content">
              <img src="images/no-image.jpg" alt="User Profile" />
              <div className="details">
                <span>{loggedInUser ? `${loggedInUser.fname} ${loggedInUser.lname}` : 'Loading...'}</span>
              </div>
            </div>
            <Link className="logout" to="/">Home</Link>
            <Link to="/login" className="logout" onClick={handleLogout}>Logout</Link>
          </header>

          <div className="search">
            <span className="text">Select a user to start chat</span>
            <input type="text" placeholder="Enter name to search..." />
            <button><i className="fas fa-search"></i></button>
          </div>

          {loading ? (
            <p>Loading users...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <div className="users-list">
              {users.map((user) => (
                <a href="#" key={user.unique_id} onClick={() => handleChatClick(user.unique_id)}>
                  <img src={`images/${user.img}`} alt={`${user.fname} ${user.lname}`} />
                  <div className="content">
                    <div className="details">
                      <span>{`${user.fname} ${user.lname}`}</span>
                      {/* <p>{user.message}</p> */}
                    </div>
                    <div className={`status-dot ${user.status === 'online' ? '' : 'offline'}`} />
                  </div>
                </a>

                // <Link to={`/chats/${user.id}`} key={user.id}>
                //   <img src={`images/${user.img}`} alt={`${user.fname} ${user.lname}`} />
                //   <div className="content">
                //     <div className="details">
                //       <span>{`${user.fname} ${user.lname}`}</span>
                //     </div>
                //     <div className={`status-dot ${user.status === 'online' ? '' : 'offline'}`} />
                //   </div>
                // </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default UsersList;