"use client";
import webdev from "../../lottie-animation.json";
import Lottie from "lottie-react";

export default function Home() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <Lottie animationData={webdev} className="w-4/5 opacity-70" />
      </div>
      <div className="relative z-10 flex gap-6">
        <div className="bg-white bg-opacity-80 p-5 rounded-lg shadow-lg flex-1 text-center">
          Social Media
        </div>
        <div className="bg-white bg-opacity-80 p-5 rounded-lg shadow-lg flex-1 text-center">
          Email
        </div>
        <div className="bg-white bg-opacity-80 p-5 rounded-lg shadow-lg flex-1 text-center">
          JivoChat
        </div>
      </div>
    </div>
  );
}
