import React, { Component } from 'react';
import './index.css';

export default class Carousel extends Component {
	constructor(props) {
    super(props);

		this.data = this.props.data;
		this.imgs = this.data.imgs;

		this.handleChangeSlide = this.handleChangeSlide.bind(this);
		this.onChangeCarouselSlide = this.onChangeCarouselSlide.bind(this);

		//internal data to render carousel images
		this.state = {
			imgIndex: 0,
			currentImg: this.imgs[0]
		};
	}

	render () {
		return (
			<div className="Carousel">
        <div className="carousel-slides-container">
					<img
	          className="carousel-img center-img"
	          src={require(`assets/${this.state.currentImg}`)}
						onChange={this.onChangeCarouselSlide}
	        />
          <button onClick={(e) => this.handleChangeSlide(e, -1)}>prev</button>
          <button onClick={(e) => this.handleChangeSlide(e, 1)}>next</button>
        </div>
			</div>
		)
	}

  handleChangeSlide (e, dir) {
		let index = this.state.imgIndex;

		if (index === 0 && dir < 0) {
			index = this.imgs.length-1;
		} else if (index === (this.imgs.length-1) && dir > 0) {
			index = 0;
		} else if ( (index !== (this.imgs.length-1)) || (index !== 0) ) {
			index += dir;
		}

		this.setState(
			{
				imgIndex: index,
				currentImg: this.imgs[index]
			}
		);
  }

	onChangeCarouselSlide (e, dir) {
		e.preventDefault();
  }


}
