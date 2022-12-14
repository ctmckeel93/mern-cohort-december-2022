import "./App.css";
import Form from "./components/Form";
import JeffForm from "./components/exercise2/JeffForm";
import Dnd from "./components/exercise2/Matt";
import BaconForm from "./components/exercise2/EggsAreSides";
import RosieForm from "./components/exercise2/Rosie";
import DisplayList from "./components/DisplayList";
import { useState } from "react";

function App() {
    const [reindeerList, setReindeerList] = useState([]);

    const removeFromList = (id) => {
        const filteredList = [...reindeerList].filter((deer) => {
            return deer.id !== id;
        });
        setReindeerList(filteredList);
    };

    const updateList = (e, name, index) => {
        e.preventDefault();
        const copiedList = [...reindeerList];
        copiedList[index] = { ...copiedList[index], name: name };
        setReindeerList(copiedList);
    };

    const addToList = (record) => {
        setReindeerList([...reindeerList, record]);
    };
    return (
        <div className="App border border-dark container-md d-flex flex-column justify-content-around">
            <Form list={reindeerList} addToList={addToList} />
            <DisplayList
                updateList={updateList}
                removeFromList={removeFromList}
                list={reindeerList}
            />
            {/* <JeffForm />
            <BaconForm />
            <Dnd />
            <RosieForm /> */}
        </div>
    );
}

export default App;
