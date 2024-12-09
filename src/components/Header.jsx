import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" style={{ background: "#5c67f2" }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          LearnPress Education
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Courses</Button>
        <Button color="inherit">Contact</Button>
        <Button color="inherit">Profile</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
