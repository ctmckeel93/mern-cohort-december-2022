import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import LoginPage from './components/LoginPage';
import Logout from './components/Logout';
import ShowUsers from './components/ShowUsers';
import { UserProvider } from './context/UserContext';
import Nav from './components/Nav';
import CreateRoom from './components/CreateRoom';
import PrivateChat from './components/PrivateChat';
import Lobby from './components/Lobby';

function App() {

  const [authorized, setAuthorized] = useState("");
  console.log("Having too much fun with this");
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Nav/>
          <Routes>
              <Route index element={<LoginPage authorized={authorized} setAuthorized={setAuthorized}/>}/>
              <Route path="/logout" element={<Logout/>}/>
              <Route path="/users" element={<ShowUsers setAuthorized={setAuthorized}/>}/>
              <Route path="/rooms" element={<CreateRoom/>}/>
              <Route path="/rooms/all" element={<Lobby/>}/>
              <Route path="/rooms/:roomid" element={<PrivateChat/>}/>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
