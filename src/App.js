import './App.css';
import Footer from './components/Footer';
import Moviepage from './components/Moviepage';
import Navigation from './components/Navigation';
import Searched from './components/Searched';
import ShowMore from './components/ShowMore';
import Home from './pages/Home';
import { BrowserRouter , Route , Routes} from 'react-router-dom';

function App() {
    
  return (
    <BrowserRouter basename='/MovieAmaze'>
      <div className="App">
        <Navigation/>
        <Routes>
          <Route path='/' element= {<Home/>} />
          <Route path='/searched/:search' element= {<Searched/>} />
          <Route path='/Movies/:name' element= {<Moviepage/>} />
          <Route path='/showmore/:movie' element= {<ShowMore/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;