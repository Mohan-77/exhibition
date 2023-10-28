import './App.css';
import Home from './components/Home';
import NavLinks from './components/NavLinks';
import 'font-awesome/css/font-awesome.min.css';
import ShowCases from './components/ShowCases';
import Collection from './components/Collection';
import Author from './components/Author';
import UpcomingEvent from './components/UpcomingEvent';
import Promo from './components/Promo';
import Footer from './components/Footer';
import FooterButtom from './components/FooterButtom';


function App() {
  return (
    <div className="App">
      <NavLinks />
      <Home />
      <ShowCases />
      <Author/>
      <Collection />
      <UpcomingEvent />
      <Promo />
      <Footer />
      <FooterButtom />
    </div>
  );
}

export default App;
