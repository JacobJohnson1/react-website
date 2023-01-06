import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import Footer from './components/Footer';
import Posts from './components/Posts';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Posts />     
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
