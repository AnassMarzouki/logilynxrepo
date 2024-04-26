import Layout from './components/layout';
import WelcomeMessage from './welcome';
import Pricing from './pricing';
import Faq from './faq';
import Contact from './contact';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsLayout from './components/productsLayout';


import './App.css';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<WelcomeMessage />} />
          <Route path="pricing" element={<Pricing />}/>
          <Route path="about" element={<Faq />}/>
          <Route path="portfolio" element={<Contact />}/>
          
          <Route path="products" element ={<ProductsLayout />}>

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
