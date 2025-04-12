import React from "react";

const Rule = () => {
  return (
    <>
   <div className="flex justify-center items-center py-7 p-2">
   <div className="max-w-xl mx-auto mt-10 p-6 bg-rose-50 shadow-xl rounded-xl border border-rose-200">
      <h2 className="text-3xl font-bold text-center text-rose-600 mb-4">🎲 Game Rules & Instructions</h2>
      <ul className="list-disc list-inside text-rose-800 text-lg space-y-2">
        <li>Select any number before rolling the dice.</li>
        <li>Click on the dice image to roll it.</li>
        <li>
          If the selected number matches the dice number, you will earn the same points as shown on the dice.
        </li>
        <li>If your guess is wrong, 2 points will be deducted from your score.</li>
        <li><span className="text-red-700 font-semibold">You must choose a number before rolling the dice.</span></li>
      </ul>
    </div>
   </div>
    </>
  );
};

export default Rule;
