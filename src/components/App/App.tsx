import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as LogoIcon } from "src/assets/svg/logo.svg";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { IconButton, Menu, MenuItem } from "@mui/material";
import "./App.css";

function App() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
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
        <div className="home-button-wrapper">
          <Link to="/home">
            <LogoIcon className="home-button"/>
          </Link>
        </div>
        <div>
          <IconButton
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={(event) => setAnchorEl(event.currentTarget)}
          >
            <HelpOutlineIcon style={{ fill: "#fff" }} />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/about" className="contact-link">
                Training Help
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a
                className="contact-link"
                href="mailto:mattyoung305@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Contact
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a
                className="contact-link"
                href="https://www.termsfeed.com/live/2a4eeb2f-bdeb-40c5-8a5b-823f100d0ba9"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
            </MenuItem>
          </Menu>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
