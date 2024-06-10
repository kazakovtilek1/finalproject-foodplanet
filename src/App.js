import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/mainPage/MainPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <Routes>
          <Route path='/'>
            <Route index element={<MainPage/>}/>
          </Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
