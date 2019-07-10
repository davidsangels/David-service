import React from 'react';
// hase a  x button on click changes modal click to false
// has left right arrows
// has main image
// has caro
class Carousel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

      currentView: this.props.currentView,

    }
  }


  render() {
    return (<div>
      <div className='currentView'>
      <img src= {this.state.currentView} />
      <span className='exit'>x</span>
      </div>
    <div className="thumbNails">
      {this.props.images.map( (img) =>(
      <img className='thumbs' src={img.imgUrl}  width="100px" />))}
    </div>

    </div>
    )
  }
}
export default Carousel;
