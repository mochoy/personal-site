import React, { Component } from 'react';
import './index.css';

export default class Carousel extends Component {
	constructor (props) {
		super(props);

    this.smallImgClicked = this.smallImgClicked.bind(this);
    this.renderSmallImgs = this.renderSmallImgs.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseMoved = this.mouseMoved.bind(this);

		this.state = {
			"focusedSmallImgKey": this.validateStartingBigImg(),
			"smallImgsVisible": true,

			"mouseX": 0,
			"mouseY": 0,

			"dy": 0,
			"dx": 0
		}
	}

  validateStartingBigImg() {
    //make sure startingBigImg is passed in and maps to arr of imgs
    if (this.props.options.startingBigImg && this.props.options.startingBigImg < this.props.imgs.length) {
      return this.props.options.startingBigImg;
    }

    return 0;   //default val
  }

	getInitialState () {
		return {hover: false}
	}




  componentDidMount() {
    //set up timer for cycling big imgs if enabled
    if (this.props.options.cycleBigImgs) {
      let thiz = this;    //make sure setInterval callback function has ref to this
      let cycleBigImgsTimer = setInterval(() => this.cycleBigImgs(thiz), 
        this.props.options.cycleBigImgsTimeInterval);

      //store timer in state so it can be accessed later
      this.setState({
        cycleBigImgsTimer: cycleBigImgsTimer
      });
    }
  }

  cycleBigImgs(thiz) {
    let newFocusedSmallImgKey = 0;    //default big img
    //make sure the new big picture being rendered does not overflow bounds of imgs 
    if (thiz.state.focusedSmallImgKey + 1 < thiz.props.imgs.length) {
      newFocusedSmallImgKey = thiz.state.focusedSmallImgKey + 1;
    }

    thiz.setState({
      focusedSmallImgKey: newFocusedSmallImgKey
    })
  }




  willComponentUnmount() {
    //clear interval of big img cycle timer, if it was made
    if (this.props.options.cycleBigImgs) {
      clearInterval(this.state.cycleBigImgsTimer);
    }
    
  }





	render () {
    const imgs = this.props.imgs;
    const options = this.props.options;

    //render smallImgs
    let smallImgs;
    if (options.smallImgs){
      let thiz = this;
    	smallImgs = imgs.map(function(item) {
    		return thiz.renderSmallImgs(item); 
    	});
    } 

    let zoomScale = options.zoomScale ? options.zoomScale : 1.5
    let transformState = this.state.hover ? "scale(" + zoomScale  + ")": "";

    let bigImgStyle = options.style;

    return (
      <div id="Carousel">
        <div className="fluid-carousel-big-img-container">
        	<img 
        		className="carousel-big-img"
        		style={bigImgStyle}
        		src={require(`assets/${imgs[this.state.focusedSmallImgKey].src}`)}
        		onMouseEnter={this.mouseEnter} 
        		onMouseLeave={this.mouseLeave}
        		onMouseMove={this.mouseMoved}/>
        </div>
      	<div className="carousel-small-imgs-container">
      		{smallImgs}
      	</div>
      </div>
    )
  }

  renderSmallImgs (item) {
  	return(
  		<div className="carousel-small-img-container">
  			<CarouselSmallImg 
  				data={item} 
  				focusedKey={this.state.focusedSmallImgKey}
					clicked={this.smallImgClicked}
					visible={this.state.smallImgsVisible}/>
  		</div>
		)
  }

  smallImgClicked (key) {
  	this.setState({"focusedSmallImgKey": key});
  }

  mouseEnter (e) {
    // this.setState({
    //   "hover": true,
    //   "smallImgsVisible": false
    // });
  }

  mouseLeave(e) {
    // this.setState({
    //   "hover": false,
    //   "smallImgsVisible": true
    // });
  }

  mouseMoved (e) {
    this.setState({
      "mouseX": e.screenX,
      "mouseY": e.screenY});
  }

};




//class for small carousel images
class CarouselSmallImg extends Component {
	constructor (props) {
		super(props);

		this.imgSrc = this.props.data.src;
		this.imgKey = this.props.data.key;

		this.carouselSmallImgStyleState = "carousel-small-img"
	}

	render () {
		this.checkIsFocused();

		return (
			<img 
				className={this.carouselSmallImgStyleState} 
				src={require(`assets/${this.imgSrc}`)}
				onClick={(e) => this.smallImgClicked(e)}/>
		)
	}

	checkIsFocused () {
		if (!this.props.visible) {
			this.carouselSmallImgStyleState = "hidden";
		} else if (this.props.focusedKey === this.imgKey) {
			this.carouselSmallImgStyleState = "carousel-small-img-selected carousel-small-img";
		} else {
			this.carouselSmallImgStyleState = "carousel-small-img";
		}
	}

	smallImgClicked (e) {
		this.props.clicked(this.imgKey);
	}
}