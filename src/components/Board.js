import React from 'react';
// import ReactDOM from 'react-dom';
import '../index.css';
import './Square';
import squares from './squares.json';
// import img from '../apple.svg';


function Square (props) {
  return (
    <button
      className="square"
      // causes square to display 'x'
      onClick={() => props.onClick()}
    >
      <img alt={props.alt} src={props.src} />
      {/* {props.value} */}
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
  // i was passed, removed here
  handleClick() {
    // generates copy of board state
    // TDOD: decide if this is really needed
    // const squares = this.state.squares.slice();
    // sets the display value of squares[i];
    // with image, still records click; no longer displays
    //squares[i] = 'X';	
    this.square.clicked = true;
    this.setState({squares: squares});
  }

  renderSquare(square) {
    return (
    //   <Square
    //   value={this.state.squares[i]} 
    //   src={require('../apple.svg')}
    //   alt='apple'
    //   onClick={() => this.handleClick(i)}
    // />
      <Square
        id={square.id}
        key={square.id}
        alt={square.alt}
        src={square.src}
        // src={require('../images/apple.svg')}
        // src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/William-Tecumseh-Sherman.jpg/189px-William-Tecumseh-Sherman.jpg'
        clicked={square.clicked}
        onClick={this.handleClick}
      />
    );
  }

  render() {
    //const status = 'Next player: X';

    return (
      <div>
        {/* <div className="status">{status}</div> */}

        <div className="board-row">
          {this.renderSquare(squares[0])} 
          {this.renderSquare(squares[1])}
          {this.renderSquare(squares[2])}
          {this.renderSquare(squares[3])}
        </div>
        <div className="board-row">
          {this.renderSquare(squares[4])}
          {this.renderSquare(squares[5])}
          {this.renderSquare(squares[6])}
          {this.renderSquare(squares[7])}
        </div>
        <div className="board-row">
          {this.renderSquare(squares[8])}
          {this.renderSquare(squares[9])}
          {this.renderSquare(squares[10])}
          {this.renderSquare(squares[11])}
        </div>
        <div className="board-row">
          {this.renderSquare(squares[12])}
          {this.renderSquare(squares[13])}
          {this.renderSquare(squares[14])}
          {this.renderSquare(squares[15])}
        </div>
      </div>
    );
  }
}

export default Board;