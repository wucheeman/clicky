import React from "react";
import Navbar from "./components/Navbar";
import Board from './components/Board';
// import Jumbotron from "./components/Jumbotron";
// import Card from "./components/Card";

const App = () => (
  <div className="container">
    <Navbar />
    <br />
    <br />
    <Board />
    {/* <Jumbotron /> */}
    {/* <Card /> */}
  </div>
);

export default App;
