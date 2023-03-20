import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignIn from './components/pages/auth/SignIn';
import SignUp from './components/pages/auth/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
