import * as React from "react";
import { useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import "./styles/NavBar.css";

const pages = ["About Me", "Experience", "Projects", "Contact Me"];

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
    <AppBar ref={appBarRef} className="app-bar">
      <Container className="container">
        <Toolbar className="toolbar">
          <Box className="box">
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={() => navigateToPage(page)}
                className="button"
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
