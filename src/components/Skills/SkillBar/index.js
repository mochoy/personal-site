import React, { Component } from 'react';

import './index.css';

export default class SkillBar extends Component {
	render () {
		console.log(this.props)

		const { 
			skills,
			height, 
			width, 
			containerClassName,
			skillBarClassName,
			titleClassName,
			titleWidth,
			barClassName} = this.props;

		return (
			<div className={"" + containerClassName}>
				{skills.map(skill => {
					return (
						<div className={"skill-bar " + skillBarClassName}
							style={{
								height: height || "50px",
								width: height || "100%",

							}}>	

							<div className={"skill-bar-title " + titleClassName}
								style={{
									width: titleWidth || "100px",
								}}>	
								Yes
							</div>

							<div className={"skill-bar-bar " + barClassName}
								style={{
									height: "100%",
									width: "100%",
									backgroundColor: "red"
								}}>
							</div>

						</div>
					)
				})}
			</div>

		)
	}

}
