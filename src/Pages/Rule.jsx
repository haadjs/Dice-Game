import React from "react";

const Rule = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-800 to-red-700 text-white flex justify-center items-center px-4 py-10">
      <div className="max-w-2xl bg-black bg-opacity-90 p-8 rounded-2xl shadow-2xl border border-rose-400 transform transition-all duration-500 hover:scale-105">
        <h2 className="text-4xl font-extrabold text-center text-rose-500 mb-6 animate-pulse">
          🎲 Game Rules & Instructions
        </h2>

        <ul className="list-disc list-inside text-lg text-rose-200 space-y-4">
          <li className="transition duration-300 hover:text-white">
            Select any number before rolling the dice.
          </li>
          <li className="transition duration-300 hover:text-white">
            Click on the dice image to roll it.
          </li>
          <li className="transition duration-300 hover:text-white">
            If the selected number matches the dice number, you earn points equal to the dice value.
          </li>
          <li className="transition duration-300 hover:text-white">
            If your guess is wrong, <span className="text-red-400 font-semibold">2 points will be deducted</span>.
          </li>
        </ul>

        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold text-rose-400 underline mb-3">
            Important Rule:
          </h3>
          <p className="text-red-300 font-semibold text-lg animate-bounce">
            You must choose a number before rolling the dice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rule;
