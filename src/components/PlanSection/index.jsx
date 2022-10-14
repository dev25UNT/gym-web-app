import React from "react";
import PlanCard from "../PlanCard";

const PlanSection = () => {
  return (
    <div className="bg-black flex flex-col items-center mt-36 pr-36 pl-36 mr-36 ml-36">
      <h1 className="text-5xl">
        Choose your <span className="font-bold">Best Plan?</span>
      </h1>
      <div className="flex justify-between w-full mt-10">
        {[1, 2, 3].map((index, item) => {
          return <PlanCard id={index} />;
        })}
      </div>
    </div>
  );
};

export default PlanSection;
