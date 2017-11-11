import React, { Component } from 'react';
import './index.css';

export default class Carousel extends Component {
	render () {
		let data = this.props.data;
    let imgs = data.imgs;
    let carouselSlides = imgs.map(this.renderCarouselSlides);
		return (
			<div className="Carousel">
        <div className="carousel-slides-container">
          {carouselSlides}
          <button onClick={(e) => this.changeSlide(e, -1)}>prev</button>
          <button onClick={(e) => this.changeSlide(e, 1)}>next</button>
        </div>
			</div>
		)
	}

  renderCarouselSlides (item) {
    return (
      <div className="carousel-slides">
        <img
          className="carousel-img"
          src={require(`assets/${item}`)}
        />
      </div>
    )
  }

  changeSlide (e, dir) {
    console.log(e);
    console.log(dir);
  }
}
