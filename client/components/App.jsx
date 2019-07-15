
import React from 'react';
import $ from  'jquery';
import Gallery from './Gallery.jsx';
import styles from '../../css/app.css';

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
          <div className={styles.container}>
              <div className={styles.mainContainer}>
                <img onClick={() => this.changeView(this.state.mainImg[0].imgUrl)} className={styles.mainImg}
                src={this.state.mainImg[0].imgUrl}/>
              </div>
           <div className={styles.secondaryImages}>
                <div className={styles.secondary1}>
                  <img
                  onClick={() => this.changeView(this.state.frontImages[0].imgUrl)}
                  className={styles.img1} src={this.state.frontImages[0].imgUrl} />
                </div>
                <div className={styles.secondary2}>
                  <img onClick={() => this.changeView(this.state.frontImages[1].imgUrl)}
                  className={styles.img2} src={this.state.frontImages[1].imgUrl} />
                </div>
                {/* <Heart/>
                <Arrow/> */}
                <button className={styles.button1}>Save</button>
                <button className={styles.button2}>Share</button>
                <button className={styles.button3}>View Photos</button>
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
    <div >
      {views()}
    </div>
    )
  }
}
export default App;


