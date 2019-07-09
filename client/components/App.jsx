// functional stateful class
import React from 'react';
import $ from  'jquery'
import Carosel from './Carosel.jsx'

class App extends React.Component {
  constructor (props){
    super(props)
    this.state = {
    data: [],
    frontImages: [],
    mainImg: [],
    page: 1
    }
  }
  // component mount does ajax request
  componentDidMount() {
  $.ajax({
    method: 'POST',
    url: '/data',
    data: {id: this.state.page},
    success: (success) => {
      console.log(success)
      this.setState({
      data: success,
      frontImages: [success[1]],
      mainImg: [success[0]]
      })
    }
  })
  }

  render() {
    // state change on click?
    return(
      <div className='container' >
       {this.state.mainImg.map(img=>(<img className='mainImg' src={img.imgUrl} />))}

        <div className='secondaryImgs'>
          {this.state.frontImages.map(img=>(<img className='img' src={img.imgUrl} />))}
        </div>
      </div>
    )
  }
}
export default App;


