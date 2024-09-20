import React from "react";

const Home = () => {
  return (
    <>
      <div className="container mx-auto flex-1 flex flex-col  pl-20 space-x-4 md:flex-row items-center  p-4">
        <div className="flex-1 ">
          <h1 className="text-4xl  md:text-6xl font-bold">
            Lessons and insights
            <br />
            <span className="text-green-600">from 8 years</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded">
            Register
          </button>
        </div>
        <div className="flex-1 mt-8 md:mt-0">
          <img src="Home.svg" alt="Illustration" />
        </div>
        
      </div>
    </>
  );
};

export default Home;
