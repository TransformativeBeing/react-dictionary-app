import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header row">
          <h1>Dictionary</h1>
          <h4>What words are you curious to discover!</h4>
        </header>
        <main className="App-main">
          <Dictionary />
        </main>
        <br />
        <footer className="App-footer">Coded by Jessica Nolte</footer>
      </div>
    </div>
  );
}
