import React from "react";

import "./screen.scss";

class GameScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      start: false,
      wordsArray: [],
      currentWord: ""
    };
  }

  startGame = () => {
    this.setState({
      start: true
    });
  };

  handleWord = () => {
    console.log(this.state);
    if (this.state.wordsArray.length === 5) {
      return;
    }
    this.setState({
      wordsArray: [...this.state.wordsArray, ""],
      currentWord: this.state.wordsArray.length
    });
  };

  render() {
    return (
      <div className="flex game-top">
        <div className="container">
          <div
            className="start flex"
            style={{ display: this.state.start ? "none" : "" }}
          >
            <div className="modal" onClick={this.startGame}>
              Start
            </div>
          </div>
          <div className="logo-img-div">
            <img src="XMLID_1_@1X.png" alt="logo" />
          </div>
          <div className="give-me-five-div">
            <img src="Give me Five@1X.png" alt="hi-five" />
          </div>
          <div className="bar-1" />
          <div className="bar-2" />
          <div className="flex wrap">
            {["p", "L", "P", "T", "S", "A", "c", "e", "h", "d"].map((a, id) => {
              return (
                <div
                  className="alphabets"
                  key={id}
                  onClick={
                    () =>
                      this.setState(
                        {
                          wordsArray: this.state.wordsArray.map((w, id) => {
                            return id == this.state.currentWord ? w + a : w;
                          })
                        },
                        () =>
                          console.log(
                            this.state.wordsArray,
                            this.state.currentWord
                          )
                      )
                    // this.state.wordsArray.map()
                  }
                >
                  {a}
                </div>
              );
            })}
          </div>
          <div className="words-div">
            {this.state.wordsArray.map((w, id) => {
              console.log(w, id, "from map");
              return (
                <div
                  className={`flex space-between align-baseline ${
                    id == this.state.currentWord ? "border" : ""
                  }`}
                  key={id}
                  onClick={() => this.setState({ currentWord: id })}
                >
                  <p className="words-para">{w == -1 ? "" : w}</p>
                  <div className="total-letters flex">{w.length}</div>
                </div>
              );
            })}
          </div>
          <p className="new-word" onClick={this.handleWord}>
            + Add new word
          </p>
          <div className="hi-5-img-div">
            <img src="Rectangle 33@1X.png" alt="hi-five-boy" />
          </div>
        </div>
      </div>
    );
  }
}

export default GameScreen;
