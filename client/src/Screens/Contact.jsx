import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const ContactPage = () => {
    return (
        <div>
            <Header />
        <div className="bg-gray-100 py-8">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Contact Us</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Location</h2>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <iframe
                                title="dummy-map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7531533432725!2d106.82432371426768!3d-6.187712195506685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f46c215f5d99%3A0xb2dfe5803e5fb2f9!2sMonas!5e0!3m2!1sen!2sid!4v1642899195390!5m2!1sen!2sid"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">Contact Information</h2>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <p className='text-black-800 mb-10 mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deleniti error, hic quisquam corrupti reic eligendi sapiente ullam et doloremque, natus atque placeat rem officiis impedit animi? Possimus doloremque dignissimos magnam ad ea. Accusamus voluptas ab vel consequuntur saepe quas modi sequi, nisi ea! Deserunt, aperiam nisi!</p>
                            <p className="text-gray-800 mb-4">
                                <strong>Address:</strong> 123 Main Street, City, Country
                            </p>
                            <p className="text-gray-800 mb-4">
                                <strong>Phone:</strong> +1 (123) 456-7890
                            </p>
                            <p className="text-gray-800 mb-4">
                                <strong>Email:</strong> info@example.com
                            </p>
                            <p className="text-gray-800">
                                <strong>Working Hours:</strong> Monday to Friday: 9am - 5pm
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    );
};

export default ContactPage;
