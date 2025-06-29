import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./routes/Navigation";


function App() {
 
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
