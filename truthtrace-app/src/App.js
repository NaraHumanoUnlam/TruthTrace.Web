import './App.css';
import Header from './components/header/header.tsx';
import Footer from './components/footer/footer.tsx';
import logo from './assets/images/logo.png'; 

function App() {
  return (
    <div className="App">
      <Header src={logo}/>
      <Footer />
    </div>
  );
}

export default App;
