import './App.scss';
import Header from "./components/header/header.jsx";
import Home from "./components/home/home.jsx";

function App() {
  return (
    <div className="app container">
      <Header />
      <main id="main" className="app-container">
      <Home />
      </main>
    </div>
  );
}

export default App;
