import './App.css';
import Home from './components/navigation/Home';
import NavCollection from './components/navigation/NavCollection';
import NavStores from './components/navigation/NavStores';
import NavMen from './components/navigation/NavMen';
import NavWomen from './components/navigation/NavWomen';
import { Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="collection" element={<NavCollection/>} />
      <Route path="stores" element={<NavStores/>} />
      <Route path="men" element={<NavMen/>} />
      <Route path="women" element={<NavWomen/>} />
    </Routes>
  )
}

export default App;
