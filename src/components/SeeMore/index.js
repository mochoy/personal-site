import React, { Component } from 'react';

import './index.css';

export default class SeeMore extends Component {
	render () {
		return (
			<div className="see-more-container">
				<h2 className="center-text see-more-text">See More</h2>
				<p className="center-text see-more-chevron-p"><i className="center-text chevron down see-more-chevron"></i></p>
			</div>
		)
	}


}
