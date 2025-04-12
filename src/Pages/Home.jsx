import React from "react";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-rose-200 to-rose-300 flex items-center justify-center px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 py-10">
        {/* Dice Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/src/assets/diceimg.png"
            alt="Dice"
            className="w-72 md:w-[500px] drop-shadow-lg"
          />
        </div>

        {/* Text & Button */}
        <div className="text-center md:text-right space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-red-800 drop-shadow">
            DICE GAME
          </h1>
          <Button
            navigate={navigate}
            title="Play Now"
            className="w-40 text-lg bg-red-800 hover:bg-red-800"
            to="/play"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
