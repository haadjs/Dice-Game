import React from "react";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
import png from "../assets/diceimg.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-800 to-red-700 text-white flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-12 max-w-6xl w-full">
        {/* Dice Image */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <img
            src={png}
            alt="Dice"
            className="w-72 md:w-[450px] animate-pulse drop-shadow-[0_10px_15px_rgba(255,0,0,0.5)] transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Text & Button */}
        <div className="flex flex-col items-center md:items-start space-y-8 w-full md:w-1/2">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-red-300 drop-shadow-xl transition-all duration-500 hover:text-white">
            DICE GAME
          </h1>
          <Button
            navigate={navigate}
            title="Play Now"
            to="/play"
            className="w-48 text-xl font-semibold bg-red-600 hover:bg-red-800 transition duration-300 shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
