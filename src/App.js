import "./App.css";
import Footer from "./Footer";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header row">
          <h1 className="text-center">Dictionary</h1>
        </header>
        <main className="App-main">
          <Dictionary defaultKeyword="word" />
        </main>
        <br />
        <Footer />
      </div>
    </div>
  );
}
