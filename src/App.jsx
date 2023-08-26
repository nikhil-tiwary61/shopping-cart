import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Welcome to shopping app</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link>Categories</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
