import './App.css';
import Banner from './component/Banner';
import Header from './component/Header';
import About from './component/About';
import MapComponent from './component/MapComponent';
import Services from './component/Services';
import FixedIcons from './component/FixedIcons';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Services />
      
      <FixedIcons />
      <MapComponent />
      <Footer/>
      
    </div>
  );
}

export default App;
