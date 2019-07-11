// functional stateful class
import React from 'react';
import $ from  'jquery'
import Carousel from './Carousel.jsx'

class App extends React.Component {
  constructor (props){
    super(props)
    this.state = {
    data: [],
    frontImages: [],
    mainImg: [],
    page: 1,
    view: false,
    currentview: '',
    test: 1,
    }
    this.switchToCarousel =this.switchToCarousel.bind(this);
    this.changeCurrentView = this.changeCurrentView.bind(this)
  }
  // component mount does ajax request
  componentDidMount() {
  $.ajax({
    method: 'POST',
    url: '/data',
    data: {id: this.state.page},
    success: (success) => {
      console.log(success)
      const frontSlice = success.slice(1,3)
      this.setState({
      data: success,
      frontImages: frontSlice,
      mainImg: [success[0]]
      })
    }
  })
  }
  switchToCarousel (url) {
    console.log(url)
    this.setState({
      currentView: url,
      view: true,
    })
  }
  changeCurrentView(url){
    this.setState({currentView:url})
  }

  render() {

    let views = () => {
      if (this.state.view === false) {
        return (
          <div className='container'>

          {this.state.mainImg.map(img=>(<img onClick={() => this.switchToCarousel(img.imgUrl)} className='mainImg' src={img.imgUrl} />))}

           <div className='secondaryImagesview '>
             {this.state.frontImages.map(img=>(
            <div className="secondaryImage">
              <img onClick={() => this.switchToCarousel(img.imgUrl)} className='img' src={img.imgUrl} />
            </div>

             ))}
           </div>
         </div>
        )
      }else {
        return (
          <Carousel  changeView={this.changeCurrentView}currentView={this.state.currentView} images={this.state.data} />
        )
      }
    }

    return (
    <div>
      {views()}
    </div>
    )
  }
}
export default App;


