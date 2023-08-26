import "./App.css";
import { Link, Outlet } from "react-router-dom";

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
            <Link to="products">Products</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
