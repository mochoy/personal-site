import React, { Component } from 'react';

import './index.css';


export default class LinkBtn extends Component {
	render () {
		return (
			<div className="LinkBtn">
				<a href={this.props.link} target="_blank">
					<button className={"linkBtn " + this.props.className}
						type="button">
						<p className={"link-btn-txt " + this.props.textClassName}>{this.props.text}</p>
					</button>
				</a>
			</div>
		)
	}


}
