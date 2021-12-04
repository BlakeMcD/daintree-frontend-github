import './App.css';
import Home from './components/navigation/Home';
import NavCollection from './components/navigation/NavCollection';
import NavStores from './components/navigation/NavStores';
import NavMen from './components/navigation/NavMen';
import NavWomen from './components/navigation/NavWomen';
import NavCart from './components/navigation/NavCart';

import { Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="collection" element={<NavCollection/>} />
      <Route path="stores" element={<NavStores/>} />
      <Route path="men" element={<NavMen/>} />
      <Route path="women" element={<NavWomen/>} />
      <Route path="cart" element={<NavCart/>} />
  
     
    </Routes>
  )
}

export default App;
