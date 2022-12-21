import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Redirect from "./components/Redirect";
import Hello from "./components/Hello";
import Nav from "./components/Nav";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route index element={<Redirect />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/hello" element={<Hello />} />
                    <Route path="/hello/:name" element={<Hello />} />
                    <Route path="/hello/:name/:age" element={<Hello />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
