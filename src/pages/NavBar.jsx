import * as React from "react";
import { useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import "./styles/NavBar.css";

const pages = ["Top", "Experience", "Projects", "Links"];

function NavBar() {
  const appBarRef = useRef(null);

  const navigateToPage = (page) => {
    const section = document.getElementById(
      page.toLowerCase().replace(/\s+/g, "-")
    );
    if (section) {
      const navbarHeight = appBarRef.current.offsetHeight;
      const sectionPosition = section.offsetTop - navbarHeight;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    }
  };

  return (
    <AppBar ref={appBarRef} id="nav-app-bar" className="section">
      <Container id="nav-container">
        <Toolbar id="nav-toolbar">
          <Box id="nav-box">
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={() => navigateToPage(page)}
                className="nav-button"
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
