import './App.scss';
import Header  from "./components/header/header.jsx";

function App() {
  return (
    <div className="page-container">
      <a href="www.google.com" className="skip-link">
        Skip link
      </a>
      <Header />
      <main id="main" className="app">
          <div className="app__container">
          </div>
      </main>
    </div>
  );
}

export default App;
