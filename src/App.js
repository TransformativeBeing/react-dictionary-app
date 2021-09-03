import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main className="App-main">
          <Dictionary />
        </main>
        <footer className="App-footer"></footer>
      </div>
    </div>
  );
}

export default App;
