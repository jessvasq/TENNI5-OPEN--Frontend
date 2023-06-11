import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';
import Videos from './components/videoPage/videos';

function App() {
  return (
    <div className="App">
      <h1>TENNI5 OPEN</h1>
      <Header />
      <Main />   
      <Footer /> 
      <Videos />
    </div>
  );
}

export default App;
