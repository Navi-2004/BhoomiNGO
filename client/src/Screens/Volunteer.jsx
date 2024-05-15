import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Volunteer= () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', { name, email, phone, message });
        // Reset form fields
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    return (
        <div>
            <Header />
        <div className="bg-gray-100 py-8">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Volunteer Form</h1>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded-lg px-8 py-6">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 rounded border-gray-300 focus:outline-none focus:border-blue-500"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 rounded border-gray-300 focus:outline-none focus:border-blue-500"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-3 py-2 rounded border-gray-300 focus:outline-none focus:border-blue-500"
                            placeholder="Your Phone"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full px-3 py-2 rounded border-gray-300 focus:outline-none focus:border-blue-500"
                            placeholder="Your Message"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </form>
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default Volunteer;
