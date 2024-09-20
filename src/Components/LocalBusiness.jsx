import React from "react";
import {
  FaUsers,
  FaHandshake,
  FaCalendarCheck,
  FaCreditCard,
} from "react-icons/fa";

const LocalBusiness = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 p-4">
        <div className="w-full md:w-1/2 p-4 md:p-8 order-2 md:order-1">
          <img
            src="pixcelgrade.svg"
            alt="Two people shaking hands"
            className="rounded-3xl object-cover w-full"
          />
        </div>
        <div className="w-full md:w-1/2 text-left order-1 md:order-2">
          <p className="mb-4 font-semibold text-2xl md:text-4xl">
            The unseen of spending three years at Pixelgrade
          </p>
          <p className="mt-4 md:mt-8 text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className="border rounded-md mt-4 text-black bg-green-400 p-2 hover:bg-green-500 transition-colors">
            Learn More
          </button>
        </div>
      </div>
      
      <div className="bg-gray-200 p-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-700">
            Helping a local
          </h2>
          <h2 className="text-2xl md:text-4xl font-semibold text-green-500">
            business reinvent itself
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-500">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:gap-14 mt-8 md:mt-0">
          <div className="flex items-center space-x-4">
            <FaUsers className="text-green-500 text-3xl md:text-4xl" />
            <div>
              <h3 className="text-xl md:text-3xl font-semibold text-gray-700">
                2,245,341
              </h3>
              <p className="text-sm md:text-base text-gray-500">Members</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaHandshake className="text-green-500 text-3xl md:text-4xl" />
            <div>
              <h3 className="text-xl md:text-3xl font-semibold text-gray-700">46,328</h3>
              <p className="text-sm md:text-base text-gray-500">Clubs</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaCalendarCheck className="text-green-500 text-3xl md:text-4xl" />
            <div>
              <h3 className="text-xl md:text-3xl font-semibold text-gray-700">828,867</h3>
              <p className="text-sm md:text-base text-gray-500">Event Bookings</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaCreditCard className="text-green-500 text-3xl md:text-4xl" />
            <div>
              <h3 className="text-xl md:text-3xl font-semibold text-gray-700">
                1,926,436
              </h3>
              <p className="text-sm md:text-base text-gray-500">Payments</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 p-4">
        <div className="w-full md:w-1/2 p-4 md:p-8 order-2 md:order-1">
          <img
            src="design.svg"
            alt="Design example"
            className="rounded-3xl object-cover w-full"
          />
        </div>
        <div className="w-full md:w-1/2 text-left order-1 md:order-2">
          <p className="mb-4 font-semibold text-2xl md:text-4xl">
            How to design your site footer like we did
          </p>
          <p className="mt-4 md:mt-8 text-base md:text-lg">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button className="border rounded-md mt-4 text-black bg-green-400 p-2 hover:bg-green-500 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default LocalBusiness;
