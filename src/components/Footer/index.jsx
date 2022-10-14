import React from "react";

const Footer = () => {
  return (
    <div className="bg-testimonial pr-20 pl-20 ">
      <div className="flex justify-between items-center border-b-2  pb-12 border-white">
        <div className="pt-8">
          <h1 className="text-2xl font-black">FITNESS</h1>
          <div className="mt-6 flex">
            <h4 className="mr-3 mt-3 ">About</h4>
            <h4 className="m-3">Pricing</h4>
            <h4 className="m-3">Membership</h4>
            <h4 className="m-3">Achievements</h4>
            <h4 className="m-3">Contact us</h4>
          </div>
        </div>
        <div>
          <h1>Get the freshest news from us</h1>
          <div className="mt-2">
            <input
              className="m-2 pt-2 pb-2 pr-5 pl-5 rounded-lg "
              type="text"
              placeholder="Your email address..."
            />
            <button className=" rounded-lg  pt-2 pb-2  pr-5 pl-5 bg-orange-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">
        <div className="flex">
          <h3 className="mr-4 mt-4 mb-4 pr-6 border-r-2">
            Terms and Conditions
          </h3>
          <h3 className="m-4 border-r-2  pr-6">Privacy Policy</h3>
          <h3 className="m-4 border-r-2  pr-6">Accessibility</h3>
          <h3 className="m-4 border-r-2  pr-6">Legal</h3>
        </div>
        <h2>Design with love © TanahAirStudio 2020. All right reserved</h2>
      </div>
    </div>
  );
};

export default Footer;
