import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  });

  return (
    <div className="App">
      <nav>
        <div className="nav-text">Welcome to SmellSense</div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
