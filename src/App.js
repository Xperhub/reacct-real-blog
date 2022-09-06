import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Support from './components/Support';
import AllinOne from './components/AllinOne';
import Pricing from './components/Pricing';
import Footers from './components/Footers';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Support/>
      <AllinOne/>
      <Pricing/>
      <Footers/>
    </>
  );
}

export default App;
