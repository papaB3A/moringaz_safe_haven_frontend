import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import UserProfile from './components/UserProfile';
import UsersList from './components/UsersList';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import ProtectedRoute from "./components/ProtectedRoute";
import SignUp from './components/SignUp';
import ChatBox from './components/ChatBox';

export default function App(){
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/chats" element={<UsersList />} />
            <Route path="/chats/:userId" element={<ChatBox />} />
            {/* <Route path="/resources" element={ <Resources/> } /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
