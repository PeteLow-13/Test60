import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from "./components/Header";
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Header />
        <main className='py-3'>
        {/* <Route path='/' component={HomeScreen} exact />
          <Route path='/menu' component={MenuScreen} />
          <Route path='/menuItem/:id' component={ProductScreen} />
          <Route path='/about' component={AboutScreen} />
          <Route path='/contact' component={ContactScreen} /> */}
        </main>
        <Footer />
    </Router>
  );
}

export default App;
