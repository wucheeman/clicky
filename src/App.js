import React from "react";
import Navbar from "./components/Navbar";
import Board from './components/Board';
// TODO: delete?
// import Jumbotron from "./components/Jumbotron";
// import Card from "./components/Card";
// import GameSquare from './components/GameSquare';

const App = () => (
  <div className="container">
    <Navbar />
    <br />
    <br />
    <Board />
    <br />
    {/* <img src={require('./apple.svg')} alt='apple' /> */}
    {/* <img src={require('/images/image-name.png')} /> */}
    {/* <Jumbotron /> */}
    {/* <Card /> */}
    {/* <GameSquare /> */}
  </div>
);

export default App;
