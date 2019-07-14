
import React from 'react';
import $ from  'jquery';
import Gallery from './Gallery.jsx';

const heartStyle = {
  height: '15px',
  width: '15px',
  display: 'block',
  overflow:'visible',
};
const arrowStyle = {
  height:'15px',
  width:'15px',
  display:'block',
  overflow:'visible',
}
// const Heart = () => {
//   return(
//     <div>
//       <svg style={heartStyle}>
//         <path d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6" strokeLinejoin="round">
//         </path>
//       </svg>
//     </div>
//   )
// }

const Arrow = () => {
  return(
    <div>
      <svg style={arrowStyle}> <g fillRule="evenodd"><path d="m11.5 16v-15"></path><path d="m7.5 4 4-3 4 3"></path><path d="m5.4 9.5h-3.9v14h20v-14h-3.1"></path></g>
      </svg>
    </div>
  )

}
class App extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      currentView: '',
      data: [],
      frontImages: [{imgUrl: '1'},'2'],
      mainImg: [{imgUrl: 'jjnujnub'}],
      page: 1,
      view: false,
      currentIndex: 0,
    }
    this.changeView = this.changeView.bind(this);
    this.nextIndex = this.nextIndex.bind(this);
    this.prevIndex = this.prevIndex.bind(this);
    this.setIndex = this.setIndex.bind(this);
    this. exitGallery = this.exitGallery.bind(this)
  }
  componentDidMount() {
  $.ajax({
    method: 'POST',
    url: '/data',
    data: {id: this.state.page},
    success: (success) => {
      const frontSlice = success.slice(1,3)
      this.setState({
      data: success,
      frontImages: frontSlice,
      mainImg: [success[0]],
      })
    }
  })
  }
  changeView(url){
    let index = 0;
    for (var i = 0; i < this.state.data.length; i++ ){
      if (this.state.data[i].imgUrl === url){
        index = i;
      }
    }
    this.setState({
      currentView: url,
      view: true,
      currentIndex: index,
    });
  }
  exitGallery(){
    this.setState({
      view: false
    })
  }
  nextIndex() {
    const atLastImage = this.state.currentIndex === this.state.data.length - 1;
    if (atLastImage) {
      this.setState({
        currentIndex: 0,
       });
    } else {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
      }));
    }
  }
  prevIndex() {
    const atFirstImage = this.state.currentIndex === 0;
    const finalIndex = this.state.data.length - 1;
    if (atFirstImage) {
      this.setState({
        currentIndex: finalIndex,
      });
    } else {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
      }));
    }
  }
  setIndex(num) {
    this.setState({ currentIndex: num });
  }

  render() {
    let views = () => {
      if (this.state.view === false) {
        return (
          <div className='container'>
              <div className='mainContainer'>
                <img onClick={() => this.changeView(this.state.mainImg[0].imgUrl)} className='mainImg'
                src={this.state.mainImg[0].imgUrl}/>
              </div>
           <div className='secondaryImages'>
                <div className='secondary1'>
                  <img
                  onClick={() => this.changeView(this.state.frontImages[0].imgUrl)}
                  className='img1' src={this.state.frontImages[0].imgUrl} />
                </div>
                <div className='secondary2'>
                  <img onClick={() => this.changeView(this.state.frontImages[1].imgUrl)}
                  className='img2' src={this.state.frontImages[1].imgUrl} />
                </div>
                {/* <Heart/>
                <Arrow/> */}
                <button className='button1'>Save</button>
                <button className='button2'>Share</button>
                <button className='button3'>View Photos</button>
           </div>
         </div>
        )
      }else {
        return (
          <Gallery
          changeIndex={this.changeIndex}
          offset={this.state.offset}
          images={this.state.data}
          currentView={this.state.currentView}
          currentIndex={this.state.currentIndex}
          changeView={this.changeView}
          prevIndex={this.prevIndex}
          nextIndex={this.nextIndex}
          setIndex={this.setIndex}
          exitGallery={this.exitGallery}
        />
        )
      }
    }
    return (
    <div className='super'>
      {views()}
    </div>
    )
  }
}
export default App;


