import React from "react";
import ImageCard from "./../Component/ImageCard";
import "./ImageList.css";

const ImageList = (props) => {
  const image = props.Images.map((image) => {
    return <ImageCard key={image.id} image={image}></ImageCard>;
  });

  return <div className="image-list">{image}</div>;
};

export default ImageList;
