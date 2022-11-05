import React from "react";
import CountUp from "react-countup";

const Testimonial = () => {
  const testimonialCount = [
    {
      count: 12,
      text: "Years Experience",
    },
    {
      count: 200,
      text: "Exercise Equipment",
    },
    {
      count: 1000,
      text: "Happy Customers",
    },
    {
      count: 20,
      text: "Expert Trainers",
    },
  ];


  return (
    <div className="bg-testimonial flex justify-between pl-32 pr-32 pt-11 pb-10">
      {testimonialCount.map((testimoni, index) => {
        return (
          <div className="text-center" key={index}>
            
              <h2 className="text-5xl font-bold"><CountUp start={0} end={testimoni.count} /> +</h2>
              <h2>{testimoni.text}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Testimonial;
