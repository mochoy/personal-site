import React, { Component } from 'react';
import './index.css';

export default class Art extends Component {
	render () {
		var artItems = this.props.projectData.map(this.renderProjectItems)
		return (
			<div id="Art">
				<h2 id="title">Art</h2>
			</div>

		)
	}

	renderProjectItems(item){
		return (
			<div>

			</div>
		)
	}


}