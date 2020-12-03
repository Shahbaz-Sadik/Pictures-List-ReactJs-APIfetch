import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { term: "" };

  onSearchSubmit = (term) => {
    console.log(term);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "50px" }}>
        <SearchBar onSubmitInput={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
