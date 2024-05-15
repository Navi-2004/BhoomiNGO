import './App.css';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import { PrimeReactProvider } from 'primereact/api';
import Login from './Screens/Login';
import Register from './Screens/Register';
import AboutUs from './Screens/AboutUs';
import Achievements from './Screens/Achievements';
import Volunteer from './Screens/Volunteer';
import Contact from './Screens/Contact';

import Donate from './Screens/Donate';



        
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/achieve" element={<Achievements />}></Route>
        <Route path="/volunteer" element={<Volunteer />}></Route>
        <Route path="/contact" element={<Contact />} ></Route> 
        <Route path="/donate" element={<Donate />}></Route>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
