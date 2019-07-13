import React from 'react';
import Carousel from './Carousel.jsx'
import $ from 'jquery';

const pstyle = {
  height: "24px",
  width: "24px",
  fill: "rgb(72, 72, 72)"
};
const exitStyle = {
  height: '24px',
  width: '24px',
  display: 'block',
  fill: 'rgb(72, 72, 72)'
}
 const Exit = () => {
  return(
    <div>
      <svg style={exitStyle}>
        <path
        d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
        fillRule="evenodd" ></path>
        </svg>
  </div>


  )
 }
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
class Gallery extends React.Component {
  constructor (props) {
    super(props)
    this.state ={
    currentIndex: 0,
    }

  }
  componentDidMount() {
  let index = this.props.currentIndex;
    this.setState({
    currentIndex: index,
  })
  }


  render() {
    return (
      <div className='superdiv'>
        <div className="imageContainer">
              <div className='leftParent'>
              <div onClick={() => this.props.changeIndex(-1)} className='left'>
                <Left classname='lefty'/>
              </div>
              </div>
              <img className="view"
                src= {this.props.currentView} />
             <div className='rightParent'>
               <div className='exitdiv' onClick={this.props.exitGallery} >
                 <Exit  />
               </div>
               <div onClick={() => this.props.changeIndex(1)} className='right'>
                 <Right/>
               </div>
             </div>
        </div>
          <div>
            <Carousel
              offset ={this.props.offset}
              changeView={this.props.changeView}
              currentView={this.props.currentView}
              images={this.props.images}
              currentIndex={this.props.currentIndex}
              />
          </div>
          <div className='info'>
            <p
            className='count'>{`${this.props.currentIndex + 1 }/${this.props.images.length}`}
            </p>
          </div>
          <div
            className='description'>{this.props.images[this.props.currentIndex].imgDescription}
          </div>
      </div>
    );
  }
}
export default Gallery;
