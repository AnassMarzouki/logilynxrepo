import Layout from './components/layout';
import WelcomeMessage from './welcome';
import Pricing from './pricing';
import Faq from './faq';
import Contact from './contact';
import About from './about';
import PageNotFound from './notfound';
import Portfolio from './portfolio';

import { BrowserRouter, Routes, Route} from 'react-router-dom';


import './App.css';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="*" element = {<PageNotFound />} />
          <Route path="/" element={<WelcomeMessage />} />
          <Route path="pricing" element={<Pricing />}/>
          <Route path="FAQs" element={<Faq />}/>
          <Route path="contact-us" element={<Contact />}/>
          <Route path="about-us" element={<About />}/>
          <Route path="portfolio" element ={<Portfolio />}>

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
