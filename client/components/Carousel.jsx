import React from 'react';
// hase a  x button on click changes modal click to false
// has left right arrows
// has main image
// has caro
class Carousel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
     middleView: this.props.currentView,
    }
  }
  render(){
    return(
    <div className="fullView">

      <div className='mainView'>
        <span>X</span>
        <div className="frame">
        <img className="currentView" src= {this.props.currentView} />
        </div>

        <span className='exit'>X</span>
      </div>

      <div className="thumbNails" >

        {this.props.images.map( (img) => (
          <div className="preview" >
            <img onClick={() => this.props.changeView(img.imgUrl)}
            className='thumbs' src={img.imgUrl}  width="100px" />
          </div>))}

      </div>

    </div>
    )
  }
}
export default Carousel;
{/* <div className="thumbNails" >
        {this.props.images.map( (img) => (
        <img onClick={ () => this.props.changeView(img.imgUrl)}className='thumbs' src={img.imgUrl}  width="100px" />))}
      </div>

      <div className='bottom'>
        <p>1/10</p>
        <p>description</p>
      </div> */}
