import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import DisplayList from "./components/DisplayList";
import Nav from "./components/Nav";
import DisplayOne from "./components/DisplayOne";
import UpdateForm from "./components/UpdateForm";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route index />
                    <Route path="/candies/create" element={<Form />} />
                    <Route path="candies" element={<DisplayList />} />
                    <Route path="/candies/:id" element={<DisplayOne/>}/>
                    <Route path="/candies/update/:id" element={<UpdateForm/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
