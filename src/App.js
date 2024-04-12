import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Carousel from './Components/Carousel';
import About from './Components/About';
import VideoAbout from './Components/VideoAbout';
import GalleryGrid from './Components/Grid';
import FeaturedResources from './Components/FeaturedResources';
import FAQ from './Components/Faq';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel/>
      <About/>
      <VideoAbout/>
      <GalleryGrid/>
      <FeaturedResources/>
      <FAQ/>
    </div>
  );
}

export default App;
