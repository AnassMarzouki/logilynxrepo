import Navbar from './navbar';
import WelcomeMessage from './welcome';
import Portfolio from './portfolio';
import Pricing from './pricing';
import Proposition from './proposition';
import Testimonial from './testimonial';
import Contact from './contact';
import Faq from './faq';


import './App.css';

function App() {
  return (
    <>
    <Navbar />
    <div className="global-container">
      <WelcomeMessage />
      <Proposition />
      <Testimonial />
      <Portfolio />
      <Pricing />
      <Contact />
      <Faq />
    </div>
    </>
  );
}

export default App;
