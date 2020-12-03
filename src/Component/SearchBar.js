import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };

  onChangeValue = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmitInput(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label className="ui dividing header">Image Search</label>
            <div className="ui fluid icon input">
              <input type="test" value={this.state.term} onChange={this.onChangeValue}></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
