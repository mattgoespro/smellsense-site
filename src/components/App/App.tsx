import { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as LogoIcon } from "src/assets/svg/logo.svg";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import "./App.css";
import { IconButton } from "@mui/material";

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
        <div className="home-button-wrapper icon-wrapper">
          <Link to="/home" className="home-button">
            <LogoIcon></LogoIcon>
          </Link>
        </div>
        <div className="nav-text">SmellSense</div>
        <div>
          <IconButton>
            <HelpOutlineIcon style={{ fill: "#fff" }} />
          </IconButton>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
