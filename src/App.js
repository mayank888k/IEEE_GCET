import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './components/Body';
import Slider from './components/Slider';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
