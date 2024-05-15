import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext.jsx";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  const Navigate=useNavigate();
  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
        console.log(email,password);
      const { data } = await axios.post('http://localhost:5000/login', { email, password });
    //   setUser(data);
    localStorage.setItem('user',JSON.stringify(data));
      console.log(data);
      Navigate('/');
      alert('Login successful');
      
      setRedirect(true);
    } catch (e) {
    //   alert('Login failed');
    console.log("Login failed");
    // Navigate('/');
      console.log(e);
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <div>
        <Header />
    <div className="mt-8 flex items-center justify-center m-96 mt-48">
      <div className="w-full max-w-md">
        <h1 className="text-4xl text-center mb-6 ">Login</h1>
        <form onSubmit={handleLoginSubmit}>
          <input
            className="w-full mb-4 px-3 py-2 rounded border-gray-300 focus:outline-none focus:border-blue-500"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={ev => setEmail(ev.target.value)}
          />
          <input
            className="w-full mb-4 px-3 py-2 rounded border-gray-300 focus:outline-none focus:border-blue-500"
            type="password"
            placeholder="Password"
            value={password}
            onChange={ev => setPassword(ev.target.value)}
          />
          <button
            className="w-full py-2 px-4 bg-indigo-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            type="submit"
          >
            Login
          </button>
          <div className="text-center mt-4 text-gray-500">
            Don't have an account yet? <Link className="underline text-blue-500" to={'/register'}>Register now</Link>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    </div>
  );
}
