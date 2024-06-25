import './App.css';
import { Route , Routes } from 'react-router-dom';
import { Link } from "react-router-dom";
import Home from './components/Home';
import MainHeader from './components/MainHeader';
import Support from './components/Support';
import About from "./components/About";
import Labs from "./components/Labs";
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/labs">labs</Link>
          </li>
          {/* <li>
            <Link to="*">Not Found</Link>
          </li> */}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element ={<MainHeader/>} >

        <Route index element ={<Home/>} />
        <Route path="/Support" element ={<Support/>} />
        <Route path="/about" element ={<About/>} />
        <Route path="/labs" element ={<Labs/>} />
        <Route path="*" element ={<NotFound/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
