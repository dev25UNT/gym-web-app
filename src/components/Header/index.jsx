import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between mr-36 ml-36 bg-transparent">
      <h1 className="font-extrabold uppercase text-2xl mt-14 bg-transparent">
        Fitness
      </h1>
      <div className="flex mt-14 bg-transparent">
        <h2 className="mr-14 font-medium uppercase text-base bg-transparent">
          Login
        </h2>
        <h2 className="font-medium uppercase text-base bg-transparent">
          Register
        </h2>
      </div>
    </div>
  );
};

export default Header;
