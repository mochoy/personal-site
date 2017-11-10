import React, { Component } from 'react';
import './index.css';

export default class Portfolio extends Component {
	render () {
		let bgColor = this.props.data[0].backgroundColor;
		let projectItems = this.props.data[1].data.map(this.renderProjectItems);
		return (
			<div 
				id="Projects" 
				className='section'
				style={{backgroundColor: bgColor}}
				>
				<h3 className="title">Projects</h3>
				<div id="projects-container" className="flex-container-center">
					{projectItems}
				</div>
			</div>

		)
	}

	renderProjectItems(item){
		return (
			<div 
				className="project flex-item project-overlay"
				style={{backgroundImage: 'url(' + require(`assets/${item.img}`) + ')'}}
				>
				<h3 className="project-title">{item.title}</h3>
				<p className="project-description">{item.description}</p>
				<a className="project-code" href={item.code}>Code</a>
			</div>
		)
	}


}
