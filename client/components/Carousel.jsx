
import React from 'react'

class Carousel extends React.Component {
  constructor (props){
    super(props)
    this.state ={

    }
  }
  render() {
    const {currentIndex, images } = this.props
  return(
    <div className='carousel'>
      <div className='carousel-container' >
        <div className='image-wrapper' style={{transform: `translateX(-${this.props.offset}px)`}}  >
          {this.props.images.map((img, index) => (<div>
            <img className='image' onClick={()=> this.props.changeView(img.imgUrl)}
            src={img.imgUrl}
            key={index} />
          </div>
          ))}
        </div>
      </div>


    </div>
      )
    }
}
export default Carousel
