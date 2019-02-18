import React, { Component } from "react";
import styled from "styled-components";

const IMG_WIDTH = "700px";
const IMG_HEIGHT = "400px";

const CardDiv = styled.div`
  width: ${IMG_WIDTH};
  height: ${IMG_HEIGHT};
  background-color: #000;
  ${"" /* overflow: hidden; */}
`;

const Images = styled.div`
  ${"" /* display: flex;
  overflow-x: visible;
  transition-property: transform;
  will-change: transform; */}
  display: grid;
  grid-template-columns: repeat(4, 100%);
  transform: translateX(${props => props.imovement});
`;

const Image = styled.img`
  object-fit: contain;
`;

class Card extends Component {
  state = {
    images: [
      require("../images/img1.jpg"),
      require("../images/img2.jpg"),
      require("../images/img3.jpg"),
      require("../images/img4.jpg")
    ],
    currentIndex: 0,
    movement: 0
  };

  handleWheel = e => {
    this.handleMovement(e.deltaX);
    // console.log(e.deltaX);
  };

  handleMovement = delta => {
    this.setState(state => {
      const maxLength = state.images.length - 1;
      let nextMovement = state.movement + delta;
      // console.log(delta);
      console.log(nextMovement);
      if (nextMovement < 0) {
        nextMovement = 0;
      }

      if (nextMovement > maxLength * IMG_WIDTH) {
        nextMovement = maxLength * IMG_WIDTH;
      }

      return {
        movement: nextMovement
      };
    });
    // debugger;
  };

  render() {
    const { images, movement } = this.state;
    return (
      <>
        <CardDiv onWheel={this.handleWheel}>
          <Images imovement={`${movement * -1}px`}>
            {images.map(i => (
              <Image key={i} src={i} alt="" />
            ))}
          </Images>
        </CardDiv>
      </>
    );
  }
}

export default Card;
