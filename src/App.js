import "./App.css";
import Dashboard from "./pages/Dashboard";

function App() {
    if(JSON.parse(localStorage.getItem("checkedID"))===null){
    console.log(localStorage.getItem("checkedID"));
    var checkedId = [];
    localStorage.setItem("checkedID", JSON.stringify(checkedId));}

    return (
        <div className="App">
            <Dashboard />
        </div>
    );
}

export default App;
