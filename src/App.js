import "./App.css";
import Checkbox from "./components/Checkbox";
import ToDo from "./components/ToDo";

function App() {
  return (
    <div className='container'>
      <div className='App'>
        <ToDo />
        <Checkbox />
      </div>
    </div>
  );
}

export default App;
