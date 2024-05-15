import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const Donate = () => {
    const [amount, setAmount] = useState('');

    const handleDonate = (e) => {
        e.preventDefault();
        // Perform payment processing or donation submission here
        console.log('Donation amount:', amount);
        // Reset form fields
        setAmount('');
    };

    return (
        <div>
            <Header />
        <div className="bg-gray-100 py-8">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Donate Now</h1>
                <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                    <form onSubmit={handleDonate}>
                        <div className="mb-4">
                            <label htmlFor="amount" className="block text-gray-700 font-bold mb-2">Enter Amount</label>
                            <input
                                type="number"
                                id="amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="w-full px-3 py-2 rounded border-gray-300 focus:outline-none focus:border-blue-500"
                                placeholder="Enter donation amount"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Donate
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    );
};

export default Donate;
