import React from "react";

const BMICalculator = () => {
  return (
    <div className="bg-testimonial flex flex-col justify-center items-center w-full">
      <h1 className="text-5xl mt-16">
        Calculate <span className="font-extrabold">Your BMI</span>
      </h1>
      <div className="flex justify-around w-full">
        <div className="flex flex-col">
          <input type="text" className=" m-4" placeholder="Height/Cm" />
          <input type="text" className=" m-4" placeholder="Gender" />
        </div>
        <div className="flex flex-col">
          <input type="text" className=" m-4" placeholder="Weight/Kg" />
          <input
            type="text"
            className=" m-4"
            placeholder="Select an activity factor"
          />
        </div>
        <div className="flex flex-col">
          <input type="text" className=" m-4" placeholder="Age" />
          <button className="m-4 pr-7 pl-7 pt-2 pb-2 bg-orange-600 rounded">
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
