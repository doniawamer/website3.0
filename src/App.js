import './App.scss';
import Header from "./components/header/header.jsx";
import Home from "./components/home/home.jsx";
import About from "./components/about/about.jsx";

function App() {
  return (
    <div className="app container">
      <Header />
      <main id="main" className="app-container">
      <Home />
      <About />
      </main>
    </div>
  );
}

export default App;
