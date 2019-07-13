
import React from 'react'

class Carousel extends React.Component {
  constructor (props){
    super(props)
    this.state ={
      currentIndex: 0,
    }
  }
  render() {
  return(
      <div className='carousel-container' >
        <div className='image-wrapper' style={{transform: `translateX(-${this.props.offset}px)`}}  >
          {this.props.images.map((img, index) => (
              <img className='image' onClick={()=> this.props.changeView(img.imgUrl)}
              src={img.imgUrl}
              key={index} />
          ))}
        </div>
      </div>
      )
    }
}
export default Carousel
