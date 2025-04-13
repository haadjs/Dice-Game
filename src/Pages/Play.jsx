import React, { useState } from "react";
import SelectedNumber from "../Components/SelectedNumber";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";

// Import dice images
import dice1 from "../assets/dice_1.png";
import dice2 from "../assets/dice_2.png";
import dice3 from "../assets/dice_3.png";
import dice4 from "../assets/dice_4.png";
import dice5 from "../assets/dice_5.png";
import dice6 from "../assets/dice_6.png";

// Store dice images in an array
const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

const Play = () => {
  const [score, setScore] = useState(0);
  const [diceValue, setDiceValue] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const rollDice = () => {
    if (selectedNumber === null) {
      setError("Please select a number before rolling the dice.");
      return;
    }

    setError("");
    const random = Math.floor(Math.random() * 6) + 1;
    setDiceValue(random);

    if (random === selectedNumber) {
      setScore(prev => prev + random);
    } else {
      setScore(prev => prev - 2);
    }

    setTimeout(() => setDiceValue(1), 300);
    setSelectedNumber(null);
  };

  const resetScore = () => {
    setScore(0);
    setDiceValue(1);
    setSelectedNumber(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-800 to-red-700 text-white flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-4xl space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-6xl font-black tracking-wide drop-shadow-lg transition-all duration-300">
              {score}
            </h1>
            <p className="font-semibold text-xl">Total Score</p>
          </div>

          <SelectedNumber
            selected={selectedNumber}
            setSelected={setSelectedNumber}
          />
        </div>

        {error && (
          <p className="text-red-300 font-semibold text-center">{error}</p>
        )}

        <div className="flex flex-col items-center">
          <div
            onClick={rollDice}
            className="cursor-pointer transition-transform duration-300 hover:scale-110"
          >
            <img
              src={diceImages[diceValue - 1]}
              alt={`dice_${diceValue}`}
              className="w-48 h-48 animate-pulse hover:animate-none"
            />
          </div>

          <p className="text-lg mt-4 font-medium tracking-wide">
            Click To Roll The Dice
          </p>

          <div className="flex flex-col gap-4 w-full max-w-sm mt-6">
            <Button
              title="Reset Score"
              func={resetScore}
              className="bg-transparent border border-red-300 text-red-300 hover:bg-red-800 hover:text-white transition-all duration-300 w-full"
            />

            <Button
              title="Show Rules"
              navigate={navigate}
              to="/rules"
              className="bg-red-700 text-white hover:bg-red-500 transition-all duration-300 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
