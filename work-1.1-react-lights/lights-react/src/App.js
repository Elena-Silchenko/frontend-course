import "./App.css";

import Square from "./Square";

function App() {
  return (
    <div className="main">
      <div className="border">
        <Square color="red" />
        <Square color="yellow" />
        <Square color="green" />
      </div>
    </div>
  );
}

export default App;
