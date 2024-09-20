import React from "react";
import { FaUsers, FaBuilding, FaHandsHelping } from "react-icons/fa";

const OurClients = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8">
      <section className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Our Clients</h1>
        <p className="mt-2 text-base sm:text-lg md:text-xl">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="flex flex-wrap justify-center mt-8 gap-4">
          <img src="1.svg" alt="" className="w-24 h-auto sm:w-32 md:w-40" />
          <img src="2.svg" alt="" className="w-24 h-auto sm:w-32 md:w-40" />
          <img src="3.svg" alt="" className="w-24 h-auto sm:w-32 md:w-40" />
          <img src="4.svg" alt="" className="w-24 h-auto sm:w-32 md:w-40" />
          <img src="5.svg" alt="" className="w-24 h-auto sm:w-32 md:w-40" />
          <img src="6.svg" alt="" className="w-24 h-auto sm:w-32 md:w-40" />
          <img src="7.svg" alt="" className="w-24 h-auto sm:w-32 md:w-40" />
        </div>
      </section>
      <section className="text-center mt-12 sm:mt-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Manage your entire community <br className="hidden md:block" /> in a single system
        </h2>
        <p className="mt-2 text-base sm:text-lg md:text-xl">Who is Nextcent suitable for?</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-8">
          <div className="p-4 sm:p-6 border rounded-lg">
            <div className="flex justify-center mb-4">
              <FaUsers className="h-10 w-10 sm:h-12 sm:w-12 text-green-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold">Membership Organisations</h3>
            <p className="mt-2 text-sm sm:text-base">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="p-4 sm:p-6 border rounded-lg">
            <div className="flex justify-center mb-4">
              <FaBuilding className="h-10 w-10 sm:h-12 sm:w-12 text-green-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold">National Associations</h3>
            <p className="mt-2 text-sm sm:text-base">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="p-4 sm:p-6 border rounded-lg">
            <div className="flex justify-center mb-4">
              <FaHandsHelping className="h-10 w-10 sm:h-12 sm:w-12 text-green-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold">Clubs And Groups</h3>
            <p className="mt-2 text-sm sm:text-base">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurClients;
