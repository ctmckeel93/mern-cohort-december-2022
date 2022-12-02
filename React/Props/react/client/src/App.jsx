import "./App.css";
import List from "./components/List";
import Hello from "./components/Hello";

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
      <List />
      <List list={dessertList} myName={"Corey Mckeel"} />
    </div>
  );
}

export default App;
