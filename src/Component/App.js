import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "./../apis/Unsplash";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos/", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });

   // console.log(this.state.images);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "50px" }}>
        <SearchBar onSubmitInput={this.onSearchSubmit} />
        <ImageList Images={this.state.images}></ImageList>
      </div>
    );
  }
}

export default App;
