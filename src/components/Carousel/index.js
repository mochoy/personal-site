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
        <div className="carousel-slides-container center">
					<img
	          className="carousel-img center-img"
	          src={require(`assets/${this.state.currentImg}`)}
						onChange={this.onChangeCarouselSlide}
	        />
          <a
						className="carousel-tog-btn carousel-tog-btn-left"
						onClick={(e) => this.handleChangeSlide(e, -1)}>
							&#10094;
					</a>
          <a
						className="carousel-tog-btn carousel-tog-btn-right"
						onClick={(e) => this.handleChangeSlide(e, 1)}>
							&#10095;
					</a>
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
