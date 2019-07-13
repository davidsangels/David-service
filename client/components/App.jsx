// functional stateful class
import React from 'react';
import $ from  'jquery';
import Gallery from './Gallery.jsx';
/// i change the main img state
class App extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      currentView: '',
      data: [],
      frontImages: [{imgUrl: '1'},'2'],
      mainImg: [{imgUrl: 0}],
      page: 1,
      view: false,
      currentIndex: '',
      offset: 1,
    }
    this.changeIndex = this.changeIndex.bind(this);
    this.changeView = this.changeView.bind(this);
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
    var margin = 3;
    var halfWidth = 24;
    var index;
    for (var i = 0; i < this.state.data.length; i++ ){
      if (this.state.data[i].imgUrl === url){
        index = i;
      }
    }
    var off  ;
    if(index > 0){
      if (index === 2){
      off = halfWidth + margin;
      }else{
        off = ((index - 1) * halfWidth) + (halfWidth + margin);
      }
    }
    this.setState({
      currentView: url,
      view: true,
      currentIndex: index,
      offset: off,
    });
  }
  changeIndex(num) {
  if (this.state.currentIndex > 0 & this.state.currentIndex < this.state.data.length){
    const imgUrl = this.state.data[this.state.currentIndex + num].imgUrl
    const newIndexest = this.state.currentIndex + num
        this.setState({
       currentIndex: newIndexest,
       currentView: imgUrl,
    })
  }else if (this.state.currentIndex === 0 && num === 1 ) {
    const imgUrl = this.state.data[this.state.currentIndex + num].imgUrl
    const newIndexest = this.state.currentIndex + num
    this.setState({
       currentIndex: newIndexest,
       currentView: imgUrl,
    })
  }
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
              <div className='secondary' >
                <img
                onClick={() => this.changeView(this.state.frontImages[0].imgUrl)}
                className='img' src={this.state.frontImages[0].imgUrl} />
                <img onClick={() => this.changeView(this.state.frontImages[1].imgUrl)}
                className='img2' src={this.state.frontImages[1].imgUrl} />
              </div>
           </div>
         </div>
        )
      }else {
        return (
            <Gallery
              changeIndex={this.changeIndex}
              offset = {this.state.offset}
              images={this.state.data}
              currentView={this.state.currentView}
              currentIndex={this.state.index}
              changeView={this.changeView}
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


