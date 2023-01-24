
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import { Login } from './Components/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';

import NotFound from './Components/NotFound/NotFound';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { useEffect } from 'react';
import { userService } from './Service/userService'

function App() {

  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      (async function () {
        const userCreated = await userService.createUserIfNotExist(user.sub);
        console.log(userCreated);
      })()
    }
  }, [isAuthenticated])
  
  return (
    
    <div className="App">
      <BrowserRouter>
      {isAuthenticated && <Navbar />}
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile/>}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
