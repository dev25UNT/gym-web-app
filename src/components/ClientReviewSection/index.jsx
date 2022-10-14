import React from "react";
import ReviewCard from "../ReviewCard";
import svg1 from "../../assets/images/svg1.svg";
import svg2 from "../../assets/images/img2.svg";
import svg3 from "../../assets/images/img3.svg";
import svg4 from "../../assets/images/img4.svg";
import svg5 from "../../assets/images/img5.svg";
import leftArr from "../../assets/icons/leftArr.svg";
import rightArr from "../../assets/icons/rightArr.svg";

const ClientReview = () => {
  const imgArr = [svg1, svg2, svg3, svg4, svg5];
  return (
    <div className="flex justify-between pr-24 pl-24 mt-20 mb-20">
      <div>
        <h1 className="text-5xl mt-16">
          What our <span className="font-extrabold">Client Say</span>
        </h1>
        <p className="text-xl">
          Read what our customers have to say about their experience
        </p>
        <div>
          <div className="flex ml-5 mt-20">
            {imgArr.map((item, index) => {
              return <img className="-ml-5" src={item} />;
            })}
          </div>
          <div className="flex justify-between items-center">
            <h1>1120 Reviews </h1>
            <div className="flex justify-evenly max-w-xs">
              <img src={leftArr} />
              <img className=" mr-3 ml-3" src={rightArr} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <ReviewCard />
      </div>
    </div>
  );
};

export default ClientReview;
