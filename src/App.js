
import './App.css';
import StepWizard from "react-step-wizard";
import Nav from './components/Nav';
import { Wizard } from './components/Wizard';

function App() {
  return (
    <div className="App">
      <Nav />
      <Wizard />
    </div>
  );
}

export default App;
