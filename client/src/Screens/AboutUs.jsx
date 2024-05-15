import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import About from '../Components/About';
import Testimonials from '../Components/Testimonials';

const AboutUs = () => {
    return (
        <div>
            <Header></Header>
        <div className="bg-gray-100">
            <div className="container mx-auto py-8">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">About Our NGO</h1>
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
                    <p className="text-lg text-gray-800 mb-6 border-cyan-200">
                        Welcome to our NGO! We are dedicated to making a positive impact in our community.
                    </p>

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h2>
                        <p className="text-gray-800">
                            Our mission is to provide support and resources to those in need, and to create a
                            sustainable and inclusive society.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Achievements</h2>
                        <ul className="list-disc list-inside text-gray-800">
                            <li>Implemented clean water projects in 10 villages</li>
                            <li>Provided education to over 500 children</li>
                            <li>Organized health camps in remote areas</li>
                        </ul>
                    </div>
                    {/* Add more sections and features as needed */}
                </div>

            </div>

        </div>
        <About />
 <Testimonials  />
        <Footer />
        </div>
    );
};

export default AboutUs;
