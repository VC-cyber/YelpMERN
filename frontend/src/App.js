import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages & ocmponents
import Home from './pages/Home'
import ReviewPage from './pages/ReviewPage'

import Navbar from './components/Navbar'

import LoginButton from './components/login'
import LogoutButton from './components/logout'
import { useEffect } from 'react'
import {gapi} from 'gapi-script'

const clientID = "333416024560-o22qubk3q1ln6n0jf545gq619ag1lbkn.apps.googleusercontent.com";

function App() {
  
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientID,
        scope: ""
      })
    };
    gapi.load('client:auth2', start)
  });

  return (
    <div className="App">
      <LoginButton/>
      <LogoutButton/>
      <BrowserRouter>
        <Navbar />
        <div className = "pages">
          
          <Routes>
            <Route 
              path="/api/reviews/:id"
              element={<ReviewPage />}
            />
            <Route 
              path='/' 
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

