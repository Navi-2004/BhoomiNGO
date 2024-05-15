import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', {
        name: name,
        email: email,
        password: password,
      });
      alert('Registration successful. Now you can log in');
    } catch (e) {
      console.log(e);
      alert('Registration failed. Please try again later');
    }
  }

  return (
    <div>
        <Header />
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form onSubmit={registerUser}>
          <input
            className="w-full mb-4 px-3 py-2 rounded border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={ev => setName(ev.target.value)}
          />
          <input
            className="w-full mb-4 px-3 py-2 rounded border-gray-300 focus:outline-none focus:border-blue-500"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={ev => setEmail(ev.target.value)}
          />
          <input
            className="w-full mb-4 px-3 py-2 rounded border-gray-300 focus:outline-none focus:border-blue-500"
            type="password"
            placeholder="password"
            value={password}
            onChange={ev => setPassword(ev.target.value)}
          />
          <button
            className="w-full py-2 px-4 bg-indigo-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            type="submit"
          >
            Register
          </button>
          <div className="text-center py-2 text-gray-500">
            Already a member? <Link className="underline text-blue-500" to={'/login'}>Login</Link>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    
</div>
  );
}
