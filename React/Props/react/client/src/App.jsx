import "./App.css";
import List from "./components/List";
import Hello from "./components/Hello";
// import array from "./data/corey";
import robins from "./data/jeff";
import cameraList from "./data/dairam";
import jularray from "./data/julian";
import nbaTeamArray from "./data/chris_tuskan";
import lakers from "./data/anthony";
import aVeryUniqueArrayByRosie from "./data/rosie";
import pokemon from "./data/angela";
import monicaArray from "./data/Monica";
import starters from "./data/matt";

function App() {
    const dessertList = [
        "Ice cream",
        "Cake",
        "Pecan Pie",
        "Pumpkin Pie",
        "Horchata",
        "Apple Pie",
        "Lemon bread",
    ];
    return (
        <div className="App">
            <Hello />
            <List list={dessertList} myName={"Corey Mckeel"} />
            <List list={robins} myName={"Jeff Steele"} />
            <List list={nbaTeamArray} myName={"Chris Tuskan"} />
            <List list={cameraList} myName={"Dairam Montijo"} />
            <List list={aVeryUniqueArrayByRosie} myName={"Rosie Choi"} />
            <List list={jularray} myName={"Julian Victoriano"} />
            <List list={lakers} myName={"Anthony Kim"} />
            <List list={pokemon} myName={"Angela Bradford"} />
            <List list={monicaArray} myName={"Monica Doan"} />
            <List list={starters} myName={"Matthew Hensley"} />
        </div>
    );
}
export default App;
