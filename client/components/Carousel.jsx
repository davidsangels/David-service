import React from 'react';
// hase a  x button on click changes modal click to false
// has left right arrows
// has main image
// has caro
import $ from 'jquery';

const pstyle = {
  height: "24px",
  width: "24px",
  fill: "rgb(72, 72, 72)"
};

const Right = () =>{
  return (
    <div>
      <svg style={pstyle}>
        <path
          d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
          fillRule="evenodd" />
      </svg>
    </div>
  );
}

const Left = () => {
  return (
    <div>
      <svg style={pstyle}>
        <path
          d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
};
class Carousel extends React.Component {
  constructor (props) {
    super(props)
    this.state ={
      coord: 1,
    }
    this.animate = this.animate.bind(this);
  }
  componentDidMount() {
     $('div').css('border', '1px solid black')
  }
  animate(event) {
    let coord = event.target.parentElement.getBoundingClientRect().x

    let newCoord = coord - 3;
    event.target.parentElement.style.transform = `translateX(-${newCoord}px)`;
    this.setState({
      coord: newCoord
    });
  }

  render() {
    return (
    <div className="imageContainer">
      <div className='row'>
        <div className='leftParent'>
          <div className='left'><Left/></div>
        </div>
        <div className='center'>
          <img className="View"
            src= {this.props.currentView} />
        </div>
        <div className='rightParent'>
          <div className='right'><Right/></div>
        </div>
      </div>
      <div className='row2'>
        <div class='mariod'>
          <div className='scrollass'>
            {this.props.images.map((img) => (
              <div>
                <img
                className='thumbnail'
                src={img.imgUrl}/>
              </div>
              ))}
          </div>
        </div>
      </div>
    </div>


//     <div className="wholeView">

//       <div className='currentView'>
//         <Right/>
//         <img className="View" src= {this.props.currentView} />
//         <Left  onClick={()=>this.props.buttonChangeView(1)} />
//       </div>
// `
//       <div className="thumbNails">
//         {this.props.images.map( (img) =>(
//           <div className='frame'>
//             <img onClick={ ()=> this.props.changeView(img.imgUrl)}className='thumbs' src={img.imgUrl}  />
//           </div>))};
//       </div>
//     </div>
    );
  }
}
export default Carousel;
