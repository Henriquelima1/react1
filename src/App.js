import "./styles.css";

import Navbar from "./components/Navbar/Navbar.js";
import TaskList from "./components/TaskList/TaskList.js";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
          <TaskList title="Pendente"/>
          <TaskList title="Fazendo"/>
          <TaskList title="Completa"/>
      </div>
    </div>
  );
}
