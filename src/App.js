import './App.css';
import Banner from './component/Banner';
import Header from './component/Header';
import About from './component/About';
import MapComponent from './component/MapComponent';
import Services from './component/Services';
import FixedIcons from './component/FixedIcons';
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Services />
      <FixedIcons />
      <MapComponent />
    </div>
  );
}

export default App;
