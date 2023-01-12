import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Word from "./components/Word";
import Square from "./components/Square";
import Math from "./components/Math";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/:word" element={<Word />} />
                    <Route
                        path="/square/:color"
                        element={<Square colorChange={"Aquamarine"} />}
                    />
                    <Route path="/math" element={<Math />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
