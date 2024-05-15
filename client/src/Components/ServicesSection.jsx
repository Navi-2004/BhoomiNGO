import React from 'react';

const ServicesSection = () => {
  return (
    <section className="services bg-white-500 py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <ServiceItem
            icon="fa-hands-helping"
            title="Donation drives"
            description="One man's trash is another man's treasure. Our needy children get donations every month from the privileged section. You never know, a pen to you, is worth a career to another."
          />
          <ServiceItem
            icon="fa-university"
            title="Teaching"
            description="In today's world, everyone needs to be educated. To survive in this world, More literacy isn't enough. Our kids are taught alphabets to alpha beta gamma. We make sure that at the end of the day, the child doesn't only have fun but learn something of value."
          />
          <ServiceItem
            icon="fa-box"
            title="Project Aahar"
            description="Sponsor a food packet @50 that would comprise of vegetables and three chapatis to save a starving soul in these turbulent times of the corona crisis."
          />
        </div>
      </div>
    </section>
  );
};

const ServiceItem = ({ icon, title, description }) => {
  return (

    <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0 bg-indigo-300">
      <div className="bg-white rounded-lg p-8">
        <div className="text-center">
          <div className="text-blue-500 text-3xl mb-4">
            <i className={`fa ${icon}`}></i>
          </div>
          <h4 className="text-xl font-bold mb-2">{title}</h4>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
