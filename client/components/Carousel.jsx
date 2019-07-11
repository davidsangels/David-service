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
    return (
    <div className="wholeView">

      <div className='currentView'>
        <p>X</p>
        <img className="View" src= {this.state.currentView} />
        <p className='exit'>X</p>
      </div>
`
        <div className="thumbNails">
           {this.props.images.map( (img) =>(
            <div className='frame'>
              <img className='thumbs' src={img.imgUrl}  width="100px" />
            </div>))}



      </div>

    </div>
    )
  }
}
export default Carousel;
