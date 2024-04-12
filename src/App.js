import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Carousel from './Components/Carousel';
import About from './Components/About';
import VideoAbout from './Components/VideoAbout';
import GalleryGrid from './Components/Grid';
import FeaturedResources from './Components/FeaturedResources';
import FAQ from './Components/Faq';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import Navbar1 from './Components/Navbar_og';
function App() {
  return (
    <div className="App bg-[#fdfaec]">
      <Navbar/>
      <Banner/>
      <Carousel/>
      <About/>
      <VideoAbout/>
      <GalleryGrid/>
      <FeaturedResources/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
