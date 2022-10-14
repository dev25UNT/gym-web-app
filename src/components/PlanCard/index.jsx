import React from "react";
import cardLine from "../../assets/icons/cardLine.svg";

const PlanCard = () => {
  return (
    <div className=" bg-gradient  group flex flex-col items-center justify-center rounded-lg w-cardW h-cardH mt-7 mb-20">
      <h1 className="text-3xl font-bold uppercase mt-11">Basic Plan</h1>
      <img className="mt-5" src={cardLine} />
      <h1 className="font-bold uppercase mt-11 text-5xl">$120</h1>
      <ul className="mt-10 ">
        <li className="mt-4">Unlimited Gym Access</li>
        <li className="mt-4"> 01 Training Program</li>{" "}
        <li className="mt-4">Free Wifi </li>
        <li className="mt-4">Free Fitness Consultation</li>
        <li className="mt-4">Free Clothes & Equipment</li>
        <li className="mt-4">Personal Traniner</li>
      </ul>
      <button className="mt-8 group-hover:bg-btnBg pt-3 pb-3 pl-14 pr-14 rounded-lg">
        Join Now
      </button>
    </div>
  );
};

export default PlanCard;
