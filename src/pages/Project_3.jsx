
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import portfolioImg1 from '../assets/attendanceHero.png';
import { FaJava } from 'react-icons/fa';
import img1 from '../assets/attendance1.png'; 
import img2 from '../assets/attendance2.png'; 
import img3 from '../assets/attendance3.png';
import img4 from '../assets/attendance4.png'; 
import { ArrowLeft } from "lucide-react";

const Project_3 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-300 flex flex-col items-center justify-center min-h-screen">
      <button
  className="absolute top-4 left-4 md:top-6 md:left-6 p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all shadow-lg"
onClick={() => navigate(-1)}>
        <ArrowLeft className="w-6 h-6  text-gray-800" />
      </button>
      <h1 className="mt-16 text-6xl font-extrabold text-white text-center">
      Epicora Uni Teacher Attendance System
      </h1>
      <div className="w-40 h-1 bg-yellow-400 mx-auto mt-4 mb-12"></div>
        <img
          alt="cafeHero"
          className="w-[1500px] h-[500px] object-contain"
          src={portfolioImg1}/>

      <motion.div 
        className="relative z-10 w-full bg-gradient-to-r from-purple-500 to-pink-300 px-12 font-merriweather"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Project Overview</h1>
            <p className="text-lg">
            The Epicora Uni Teacher Attendance System is a software program that comes with a user interface built using Java Swing. This system enables administrators to handle user records by adding, deleting and updating them through access, to the MySQL database. On the hand users have the ability to submit their attendance and view their records.
            </p>
          </div>
            <hr className="border-gray-300 mb-8" />
            
          <div>
            <h2 className="text-xl font-bold mb-2">TECHNOLOGIES</h2>
            <div className="flex justify-between">
              <div className="flex space-x-4 items-center">
                <div className="flex items-center">
                <FaJava className="text-3xl text-red-500 mr-2" />
                    <p className="text-lg">Java Swing</p>
                </div>
              </div>
            </div>
           
          </div>

        </div>

        <div className="w-full flex justify-center mt-20 mb-20">
          <img
            alt="Website Preview"
            className="w-[900px] h-auto rounded-lg shadow-lg border-4 border-white"
            src={img1}/>
        </div>
        <div className="w-full flex justify-center mt-20 mb-20">
          <img
            alt="Website Preview"
            className="w-[900px] h-auto rounded-lg shadow-lg border-4 border-white"
            src={img2}/>
        </div>
        <div className="w-full flex justify-center mt-20 mb-20">
          <img
            alt="Website Preview"
            className="w-[900px] h-auto rounded-lg shadow-lg border-4 border-white"
            src={img3}/>
        </div>
        <div className="w-full flex justify-center mt-20 mb-20">
          <img
            alt="Website Preview"
            className="w-[900px] h-auto rounded-lg shadow-lg border-4 border-white"
            src={img4}/>
        </div>
        
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Looking for a smart attendance system? </h2>
          <p className="text-lg text-white mb-6">
          Contact us today to create a custom Teacher Attendance System with a user-friendly Java Swing interface and secure MySQL integration, featuring admin controls and user-friendly attendance tracking.</p>
          <button
            onClick={() => window.location.href = "mailto:mmaagscircle@gmail.com"}
            className="px-14 mb-11 py-3 bg-yellow-600 text-white text-lg rounded-full shadow-lg hover:bg-yellow-700 transition duration-300">
            Contact Us
          </button>
        </div>
     
      </motion.div>
    </div>
  );
};

export default Project_3;
