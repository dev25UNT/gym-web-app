import React from "react";
import "./App.css";
import BannerSection from "./components/BannerSection";
import BMICalculator from "./components/BMICalculator";
import ClientReview from "./components/ClientReviewSection";
import ExerciseCategory from "./components/ExerciseCategory";
import Footer from "./components/Footer";
import IntroSection from "./components/IntroSection";
import PlanSection from "./components/PlanSection";
import Testimonial from "./components/TestimonialSection";

function App() {
  return (
    <div className="bg-black">
      <BannerSection />
      <Testimonial />
      <ExerciseCategory />
      <IntroSection />
      <PlanSection />
      <BMICalculator />
      <ClientReview />
      <Footer />
    </div>
  );
}

export default App;
