import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <div className="column align-items-center">
          <div class="w3">
            <div class="card-panel teal">
              <span class="white-text">
              <Link to="/lab01" className="home-link">Лабораторна робота №1</Link>
              </span>
            </div>
          </div>
          <div class="w3">
            <div class="card-panel teal">
              <span class="white-text">
              <Link to="/lab02" className="home-link">Лабораторна робота №2</Link>
              </span>
            </div>
          </div>
          <div class="w3">
            <div class="card-panel teal">
              <span class="white-text">
              <Link to="/lab03" className="home-link">Лабораторна робота №3</Link>
              </span>
            </div>
          </div>
          <div class="w3">
            <div class="card-panel teal">
              <span class="white-text">
              <Link to="/lab04" className="home-link">Лабораторна робота №4</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
