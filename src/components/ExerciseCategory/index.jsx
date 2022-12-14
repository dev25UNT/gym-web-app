import React from "react";
import img1 from "../../assets/images/femaleRunning.jpg";
import img2 from "../../assets/images/femaleWithCoach.jpg";
import img3 from "../../assets/images/fitness-class.jpg";
import img4 from "../../assets/images/malePhysique.jpg";
import img6 from "../../assets/images/physiotherapy.jpg";
import img5 from "../../assets/images/athleticBrunette.jpg";
import "./exerciseCategory.css";

const ExerciseCategory = () => {
  return (
    <div className="bg-black flex pl-32 pr-32  pb-6 justify-center">
      <div className="m-8">
        <div className="relative">
          <img className="rounded-lg m-8" src={img4} />
          <div class="overlay">BODYBUILDING</div>
        </div>
        <div className="relative">
          <img className="rounded-lg m-8" src={img3} />
          <div class="overlay">AEROBICS</div>
        </div>
      </div>
      <div className="m-8">
        <div className="relative">
          <img className="rounded-lg m-8" src={img5} />
          <div class="overlay">YOGA</div>
        </div>
        <div className="relative">
          <img className="rounded-lg m-8" src={img1} />
          <div class="overlay">CARDIO</div>
        </div>
      </div>
      <div className="m-8">
        <div className="relative">
          <img className="rounded-lg m-8" src={img2} />
          <div class="overlay">TRAINING</div>
        </div>
        <div className="relative">
          <img className="rounded-lg m-8" src={img6} />
          <div class="overlay">PHYSIOTHERAPY</div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCategory;
