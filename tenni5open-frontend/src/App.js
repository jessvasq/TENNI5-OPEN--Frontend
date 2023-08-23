import './App.css';
import Main from './components/main';
import MainHeader from './components/mainHeader';
import Videos from './components/videoPage/videos';
import Equipment from './components/equipment/equipment';
import Lesson from './components/lessonPage/lesson';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <MainHeader />
      <Main />   
      <Videos />
      <Equipment />
      <Lesson />
      <Footer />
    </div>
  );
}

export default App;
