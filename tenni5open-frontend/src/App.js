import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';
// import Chat from './components/Chat';

function App() {
  return (
    <div className="App">
      <h1>TENNI5 OPEN</h1>
      <Header />
      <Main />   
      <Footer /> 
      {/* <Chat />  */}
    </div>
  );
}

export default App;
