
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Home/Home';
import RequireAuth from './RequireAuth/RequireAuth';
import SocialLogin from './SocialLogin/SocialLogin';

function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element=
      {<RequireAuth>
        <Home></Home>
      </RequireAuth>}>
      </Route>
      <Route path='/home' element={<RequireAuth>
        <Home></Home>
      </RequireAuth>}></Route>
      <Route path='/social' element={<SocialLogin></SocialLogin>}></Route>
      </Routes>
      

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
