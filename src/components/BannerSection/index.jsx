import React from "react";
import Header from "../Header";
import threeLines from "../../assets/icons/threeLines.svg";
import whatsApp from "../../assets/icons/WhatsApp.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import arrUp from "../../assets/icons/arrUp.svg";
import mail from "../../assets/icons/mail.svg";
import twitter from "../../assets/icons/twitter.svg";
import "./bnner.css";
const BannerSection = () => {
  return (
    <div className="bg-hero h-128 bg-no-repeat bg-cover">
      <Header />
      <div className="pr-36 pl-36">
        <div className="mt-96 flex w-full justify-between">
          <img src={threeLines} />
          <div>
            <img src={twitter} />
            <img className="mt-6" src={mail} />
            <img className="mt-6" src={facebook} />
            <img className="mt-6" src={instagram} />
          </div>
        </div>
        <p className="bnnerText">
          Asia’s largest gym with CrossFit and MMT training. Get yourself all
          transformed with the best and certified trainers.{" "}
        </p>
        <div className=" mt-72 flex justify-between">
          <img src={whatsApp} />
          <img src={arrUp} />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
