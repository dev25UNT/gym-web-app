import React from "react";
import colon from "../../assets/icons/colon.svg";
import cardSvg from "../../assets/icons/card.svg";
const ReviewCard = () => {
  return (
    <div className="bg-testimonial max-w-xl pt-10 pb-10 pr-9 pl-9 rounded-2xl ">
      <img className="mt-10" src={colon} />
      <h3 className="mt-10">
        The gym is really great. All the trainers are well trained & the
        equipment is also maintained. Apart from that, they do have a certified
        dietitian for proper diet and also a medical support center for
        emergencies.{" "}
      </h3>
      <div className="flex  items-center mt-10">
        <img src={cardSvg} />
        <div className="ml-2">
          <h3>Laura Wilson</h3>
          <h3>30 Year Old</h3>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
