import React from "react";

const AllCustomer = () => {
  return (
    <>
      <CustomerSection />
      <BlogSection />
    </>
  );
};

const CustomerSection = () => {
  return (
    <section className="bg-gray-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src="TimSmith.jpg"
            alt="Customer Logo"
            className="w-full md:w-80 h-auto md:h-80 object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-2 md:p-4">
          <p className="text-gray-700 mb-4">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit.
          </p>
          <p className="text-green-700 mb-2">Tim Smith</p>
          <p className="mb-4">British Dragon Boat Racing Association</p>
          <div className="flex flex-wrap justify-start space-x-4 mb-4">
            <img src="1.svg" alt="Icon 1" className="w-10 h-10 md:w-12 md:h-12" />
            <img src="2.svg" alt="Icon 2" className="w-10 h-10 md:w-12 md:h-12" />
            <img src="3.svg" alt="Icon 3" className="w-10 h-10 md:w-12 md:h-12" />
            <img src="4.svg" alt="Icon 4" className="w-10 h-10 md:w-12 md:h-12" />
            <img src="5.svg" alt="Icon 5" className="w-10 h-10 md:w-12 md:h-12" />
            <img src="6.svg" alt="Icon 6" className="w-10 h-10 md:w-12 md:h-12" />
            <img src="7.svg" alt="Icon 7" className="w-10 h-10 md:w-12 md:h-12" />
            <a href="#" className="mt-2 text-green-600">
              Meet all customers →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const BlogSection = () => {
  return (
    <div>
      <section className="bg-white py-8 md:py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Caring is the new marketing
          </h2>
          <p className="text-gray-600 mb-8 px-4 md:px-0">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community is increasing their
            membership income, and lots more.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
            <BlogCard
              image="laptopPerson1.jpg"
              title="Creating Streamlined Safeguarding Processes with OneRen"
              link="#"
            />
            <BlogCard
              image="laptopHand2.jpg"
              title="What are your safeguarding responsibilities and how can you manage them?"
              link="#"
            />
            <BlogCard
              image="laptop3.jpg"
              title="Revamping the Membership Model with Triathlon Australia"
              link="#"
            />
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center bg-gray-100 py-8 px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-6">
            Pellentesque suscipit fringilla libero eu.
          </h1>
          <button className="mt-6 px-4 md:px-6 py-2 md:py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700">
            Get a Demo →
          </button>
        </div>
      </div>
    </div>
  );
};

const BlogCard = ({ image, title, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
        <a href={link} className="text-green-600 hover:underline">
          Read more →
        </a>
      </div>
    </div>
  );
};

export default AllCustomer;
