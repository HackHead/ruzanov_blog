import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/organisms/Navigation';
import SignIn from './components/pages/auth/SignIn';
import SignUp from './components/pages/auth/SignUp';
import Home from './components/pages/home';
import Blog from './components/pages/blog';
import Communities from './components/pages/communities';
import _404 from './components/pages/errors/404';
import Subscribtions from './components/pages/subscriptions';
function App() {
  
  return (
    <div className='App'>
      <Router>
      <Navigation/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/communities' element={<Communities />} />
          <Route path='/subscribtions' element={<Subscribtions />} />
          <Route path='*' element={<_404/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
