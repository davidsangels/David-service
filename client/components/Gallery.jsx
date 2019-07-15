import React from 'react';
import Carousel from './Carousel.jsx'
import Style from '../../css/gallery.css'

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
const Gallery = (props) => {

    return (
      <div className={Style.superdiv}>
        <div className={Style.imageContainer}>
          <div className={Style.leftParent}>
            <div onClick={props.prevIndex} className={Style.left}>
              <Left classname={Style.lefty}/>
            </div>
          </div>
          <img className={Style.view}
          src= {props.images[props.currentIndex].imgUrl} />
             <div className={Style.rightParent}>
               <div className={Style.exitdiv} onClick={props.exitGallery} >
                 <Exit  />
               </div>
               <div onClick={props.nextIndex} className={Style.right}>
                 <Right/>
               </div>
             </div>
        </div>
        <div>
          <Carousel
            offset={props.offset}
            changeView={props.changeView}
            currentView={props.currentView}
            images={props.images}
            currentIndex={props.currentIndex}
            setIndex={props.setIndex}
          />
        </div>
        <div className={Style.info}>
          <p className={Style.count}>
          {`${props.currentIndex + 1 }/${props.images.length}`}
          </p>
        </div>
        <div
          className={Style.description}>{props.images[props.currentIndex].imgDescription}
        </div>
      </div>
    );
}
export default Gallery;
