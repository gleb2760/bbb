
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  
  return (
    <div className="App">
        <Header/>
        
      <div className="container">
        <Content/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
