import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/mainPage/MainPage';
import Basket from './pages/basket/Basket';

function App() {
  return (
    <>
      <Routes>
          <Route path='/'>
            <Route index element={<MainPage/>}/>
            <Route path='/basket' element={<Basket/>}/>
          </Route>
      </Routes>
    </>
  );
}

export default App;
