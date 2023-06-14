import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import Header from './components/header';
import MainHeader from './components/mainHeader';
import Footer from './components/footer';
import Videos from './components/videoPage/videos';
import Equipment from './components/equipment/equipment';
import Lesson from './components/lessonPage/lesson';


function App() {
  return (
    <div className="App">
      <MainHeader />
      <Header />
      <Main />   
      <Footer /> 
      <Videos />
      <Equipment />
      <Lesson />
    </div>
  );
}

export default App;
