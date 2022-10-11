import './styles/App.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import FirstCase from './pages/Case1/FirstCase';
import OpenPost from './pages/OpenPost';
import NotFound from './pages/NotFound';
import Login from './pages/Login/Login';
import SecondCase from './pages/Case2/SecondCase';





function App() {

  return (
        <div className='wrapper'>
            <Routes>
              <Route path="/" element={<Navigate to="/login" />}/>
              <Route path='/home'  element={<Home />} />
              <Route path='/posts' element={<FirstCase/>}/>
              <Route path='/dynamic' element={<SecondCase/>}/>
              <Route path='post/:id' element={<OpenPost/>}/>
              <Route path='*' element={<NotFound/>}/>
              <Route path='/login' element={<Login/>} />
            </Routes>    
        </div> 
  );
}

export default App;
