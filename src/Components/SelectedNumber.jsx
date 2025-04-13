import React from "react";

const SelectedNumber = ({ selected, setSelected }) => {
  const Numbers = [1, 2, 3, 4, 5, 6];

  return (
    <div className="flex gap-4 mt-4">
      {Numbers.map((num) => (
        <p
          key={num}
          onClick={() => setSelected(num)}
          className={`border h-12 w-12 flex justify-center items-center font-extrabold cursor-pointer ${
            selected === num ? "bg-black text-white" : ""
          }`}
        >
          {num}
        </p>
      ))}
    </div>
  );
};

export default SelectedNumber;
