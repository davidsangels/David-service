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
    index: 3,
    }
    this.switchToCarousel =this.switchToCarousel.bind(this);
    this.changeView= this.changeView.bind(this);
    this.buttonChangeView =this.buttonChangeView.bind(this);
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
  changeView(url){
    console.log(this.state.currentView)
    this.setState({
      currentView: url,
    })
  }
  buttonChangeView(num){
    console.log(this.state.currentView)
    for (var i = 0; i < this.state.data; i++  ){
      if (this.state.data.imgUrl === this.state.currentView){
        console.log('yes')
       let view =[...this.state.data];
        this.setState({
          currentView: view[i+num].imgUrl
        })
      }
    }
  }

  render() {

    let views = () => {
      if (this.state.view === false) {
        return (
          <div className='container'>
          {this.state.mainImg.map(img=>(

           <div className='mainContainer'>
             <img onClick={() => this.switchToCarousel(img.imgUrl)} className='mainImg' src={img.imgUrl} />
           </div>

          ))}
           <div className='secondaryImages'>
             {this.state.frontImages.map(img=>(
              <div className='secondary' >

                <img onClick={() => this.switchToCarousel(img.imgUrl)} className='img' src={img.imgUrl} />
              </div>

             ))}
           </div>
         </div>
        )
      }else {
        return (
          <div>
            <Carousel
              buttonChangeView={this.buttonChangeView}
              changeView={this.changeView}
              currentView={this.state.currentView}
              images={this.state.data} />
          </div>
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


