"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const HeroSection = () => {
  const router = useRouter()
  const redirect = async()=>{
    router.push("/booking")
  }
  return (
    <div className="hero-container">
      <img
        src="/images/Ae-Box-Cricket-3-scaled.jpg" // Replace this path with your image
        alt="Box Cricket"
        className="hero-image"
      />
      <div className="hero-content">
        <h1>Play Box Cricket Like Never Before</h1>
        <p>Book your turf in just a few clicks — fun, clean, and professional!</p>
        <button onClick={redirect} className="hero-button">Book Now</button>
      </div>
    </div>
  );
};

export default HeroSection;
