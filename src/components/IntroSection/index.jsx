import React from "react";
import deadlift from "../../assets/images/deadlift.jpg";
import "./introSection.css";
import play from "../../assets/icons/play.svg";

const IntroSection = () => {
  return (
    <div className="bg-black text-center flex flex-col items-center">
      <h1 className="text-5xl">
        Who <span className="font-bold">We Are ?</span>
      </h1>
      <div className="mt-10">
        <div className="relative">
          <img src={deadlift} />
          <div className="overlay">
            <span className="absolute top-72">
              <img src={play} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
