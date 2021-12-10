import './App.css';
import Home from './components/navigation/Home';
import NavCollection from './components/navigation/NavCollection';
import NavStores from './components/navigation/NavStores';
import NavMen from './components/navigation/NavMen';
import NavWomen from './components/navigation/NavWomen';
import NavCartContent from './components/navigation/NavCartContent';
import NavLoginContent from './components/navigation/NavLoginContent';
import NavStoreCollection from './components/NavStoreCollection';
import NavStoresCreate from './components/navigation/NavStoresCreate';
import NavProductsCreate from './components/navigation/NavProductsCreate';

import { Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="collection" element={<NavCollection/>} />
      <Route path="stores" element={<NavStores/>} />
      <Route path="men" element={<NavMen/>} />
      <Route path="women" element={<NavWomen/>} />
      <Route path="cart" element={<NavCartContent/>} />
      <Route path="login" element={<NavLoginContent/>} />

      <Route path="stores/:name" element={<NavStoreCollection/>} />

      <Route path="stores/create" element={<NavStoresCreate/>} />
      <Route path="products/create" element={<NavProductsCreate/>} />

  
     
    </Routes>
  )
}

export default App;
