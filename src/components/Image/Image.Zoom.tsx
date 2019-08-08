import React from "react";
import ImageWithZoom from "react-medium-image-zoom";
import { useThemeUI } from "theme-ui";

function handleImageZoomBackground(background: string) {
  const images = Array.from(document.getElementsByClassName("Image__Zoom"));

  images.map(img => {
    if (img.previousElementSibling.tagName === "DIV") {
      img.previousElementSibling.style.background = background;
    }
  });
}

function ImageZoom(props) {
  const { theme } = useThemeUI();

  const image = {
    ...props,
    className: "Image__Zoom",
    style: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      visibility: "visible",
    },
  };

  return (
    <ImageWithZoom
      image={image}
      zoomImage={image}
      onZoom={() => handleImageZoomBackground(theme.colors.background)}
      defaultStyles={{
        zoomImage: {
          borderRadius: "5px",
        },
      }}
    />
  );
}

export default ImageZoom;
