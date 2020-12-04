import React from "react";

class ImageCard extends React.Component {

    state = { spans: 0 };
    imgRef = React.createRef();
  

  componentDidMount() {
    this.imgRef.current.addEventListener("load", this.setSpan);
  }

  setSpan = () => {
    const height = this.imgRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { alt_description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imgRef} alt={alt_description} src={urls.regular}></img>
      </div>
    );
  }
}

export default ImageCard;
