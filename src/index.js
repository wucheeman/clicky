
  import React from "react";
  import ReactDOM from "react-dom";
  import App from "./App";

  ReactDOM.render(<App />, document.getElementById("root"));


/* From 'game tutorial
///////////////////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


Index.js code

  import React from "react";
  import ReactDOM from "react-dom";
  import App from "./App";

  ReactDOM.render(<App />, document.getElementById("root"));
function Square (props) {
  return (
    <button
      className="square"
      // causes square to display 'x'
      onClick={() => props.onClick()}
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(16).fill(null),
    };
  }

  //method passed to Square as callback for handling clicks
  handleClick(i) {
    // generates copy of board state
    // TDOD: decide if this is really needed
    const squares = this.state.squares.slice();
    // sets the display value of squares[i];
    squares[i] = 'X';	
    this.setState({squares: squares});
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    //const status = 'Next player: X';

    return (
      <div>
        {/* <div className="status">{status}</div> */
      // THIS CURLY BRACKET NEEDS TO GO UP to PREVIOUS LINE WHEN UNCOMMENTED  -->  }

/*
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(4)}
        </div>
        <div className="board-row">
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div className="board-row">
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
          {this.renderSquare(12)}
        </div>
        <div className="board-row">
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
          {this.renderSquare(16)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */
          // THIS CURLY BRACKET AND DIV NEED TO GO UP to PREVIOUS LINE WHEN UNCOMMENTED  -->  }}</div>
/*
          <ol>{/* TODO */
          // THIS CURLY BRACKET AND ol NEED TO GO UP to PREVIOUS LINE WHEN UNCOMMENTED  -->  }}</div>}</ol>

/*
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);



*/
