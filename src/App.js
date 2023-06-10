
import "./App.css";
import Calc from "./components/Calc";
import Counter from "./components/Counter";
import {Routes, Route, Link} from 'react-router-dom'
import Homepage from "./components/Homepage";
import WeatherApp from "./components/WeatherApp";

function App() { 
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="calc" className="nav-item">Calculator </Link>
        <Link to="counter" className="nav-item">Counter </Link>
        <Link to="weather" className="nav-item">Weather </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="calc" element={<Calc/>}/>
        <Route path="counter" element={<Counter/>}/>
        <Route path="weather" element={<WeatherApp/>}/>
      </Routes>
    </div>
  );
  
} 
 
export default App; 

