import './App.scss';
import { Header } from "./components/header/header.jsx";
import Home from "./components/home/home.jsx";
import About from "./components/about/about.jsx";
import Contact from "./components/contact/contact.jsx";

function App() {
  return (
    <div className="app container">
      <Header />
      <main id="main" className="app-container">
      <Home />
      <About />
      <Contact />
      </main>
    </div>
  );
}

export default App;
