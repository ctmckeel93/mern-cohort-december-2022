// https://beta.reactjs.org/learn/extracting-state-logic-into-a-reducer
// https://beta.reactjs.org/reference/react/useReducer
// https://beta.reactjs.org/learn/passing-data-deeply-with-context
// https://beta.reactjs.org/reference/react/useContext
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from './context/AppContext';
import { CountProvider } from './context/CountContext';
import Header from './components/Header';
import Register from './components/Register';
import Counters from './views/Counters';
import UseReducerCount from './components/UseReducerCount.jsx';
import UseContextCount from './components/UseContextCount';

function App() {
  // Kevin did amazing on this lecture
  console.log("Kevin did amazing on this lecture");
  return (
    <div className="App container w-75 m-5">
      <BrowserRouter>
        <AppProvider>
          <CountProvider>
            <Header />
          </CountProvider>
        </AppProvider>
        <hr />
        <CountProvider>
          <Routes>
            <Route path="/" element={<Counters />} />
            <Route path="/use_context_count" element={<UseContextCount />} />
            <Route path="/use_reducer_count" element={<UseReducerCount />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </CountProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
