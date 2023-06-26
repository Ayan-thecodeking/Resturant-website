import './App.css';
import Home from './Components/Routes/Home';
import Menu from './Components/Routes/Menu';
import About from './Components/Routes/About';
import Contact from './Components/Routes/Contact';
import { Route, Routes } from "react-router-dom";
function App() {
  return (

    <div className="container">
      <Routes>
        <Route path='/' element={<Home />
        } />
        <Route path='/menu' element={<Menu />
        } />
        <Route path='/about' element={<About />
        } />
        <Route path='/contact' element={<Contact />
        } />
        
      </Routes>
    </div>


  );
}

export default App;
