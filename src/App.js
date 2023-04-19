import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Plans from './components/Plans'
import Card from './components/Card'
import Footer from './components/Footer'



function App() {
  const imgSrc = 'images/1.jpg';
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Plans/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
