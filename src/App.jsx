import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <div className="column-center py-4">
          <div class="card-panel teal">
            <span class="white-text">
              <Link to="/lab01" className="home-link">Лабороторна робота №1</Link>
            </span>
          </div>
          <div class="card-panel teal">
            <span class="white-text">
              <Link to="/lab02" className="home-link">Лабороторна робота №2</Link>
            </span>
          </div>
          <div class="card-panel teal">
            <span class="white-text">
              <Link to="/lab03" className="home-link">Лабороторна робота №3</Link>
            </span>
          </div>
          <div class="card-panel teal">
            <span class="white-text">
              <Link to="/lab04" className="home-link">Лабороторна робота №4</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
