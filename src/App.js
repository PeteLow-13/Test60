import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import FerriesScreen from './screens/FerriesScreen';
import PlacesScreen from './screens/PlacesScreen';
import LocationScreen from './screens/LocationScreen';
import BusinessScreen from './screens/BusinessScreen';
import VideoScreen from './screens/VideoScreen';

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <main className='py-3'>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/places' component={PlacesScreen} />
          <Route path='/places' component={PlacesScreen} />
          <Route path='/location' component={LocationScreen} />
          <Route path='/video' component={VideoScreen} />
          <Route path='/ferries' component={FerriesScreen} />
          <Route path='/about' component={AboutScreen} />
          <Route path='/contact' component={ContactScreen} />
        </main>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
