import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/landing.css";
import banner from "./../assets/images/banner.jpg"; // Ensure this path is correct

const Landing = () => {
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate("/home");
  };

  return (
    <div className="landing" style={{ backgroundImage: `url(${banner})` }}>
      <div className="landing-content">
        <h1>Welcome to Our Coaching Classes</h1>
        <button onClick={navigateToMain}>Enter</button>
      </div>
    </div>
  );
};

export default Landing;