import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import MainHeader from './components/mainHeader';
import Videos from './components/videoPage/videos';
import Equipment from './components/equipment/equipment';
import Lesson from './components/lessonPage/lesson';


function App() {
  return (
    <div className="App">
      <MainHeader />
      <Main />   
      <Videos />
      <Equipment />
      <Lesson />
    </div>
  );
}

export default App;
