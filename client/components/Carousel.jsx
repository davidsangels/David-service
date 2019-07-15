import Style from "../../css/carousel.css";
import React from 'react';

const calculateOffset = (index,finalIndex) => {
  console.log(index);
  let extraOffset;
  let offset;

  const atFarRight = index > finalIndex - 7;
  const atFarLeft = index < 6;
  if (atFarRight) {
    extraOffset = 7 * (48 + 3);
    offset = (finalIndex - 2) * (48 + 3) - extraOffset;
  } else if (atFarLeft) {
    offset = 0;
  } else {
    extraOffset = 6 * (48 + 3);
    offset = index * (48 + 3) - extraOffset;
  }

  return offset;
};
class Carousel extends React.Component {
  constructor (props){
    super(props)
    this.state ={

    }
  }
  render() {

    const offset = calculateOffset(this.props.currentIndex,this.props.images.length - 1);
  return(
    <div className={Style.carousel}>
      <div className={Style.carouselContainer} >
        <div className={Style.imageWrapper}style={{transform: `translateX(-${offset}px)`}}  >
          {this.props.images.map( (img, index) => (
          <div >
            <img className={Style.image} onClick={ ()=> this.props.setIndex(index)}
            src={img.imgUrl}
            key={index} style={this.props.currentIndex === index ? {border: '3px solid black'}: null} />
          </div>
          ))}
        </div>
      </div>
    </div>
      )
    }
}
export default Carousel
