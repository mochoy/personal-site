import React, { Component } from 'react';

import './index.css';

export default class SkillBar extends Component {
	render () {
		const { 
			skills,
			height, 
			width, 
			containerClassName,
			skillBarClassName,

			titleClassName,
			titleWidth,
			titleBackgroundColor,

			barClassName,
			barBackgroundColor} = this.props;

		const TITLE_WIDTH = titleWidth || "120px";
		const TITLE_BACKGROUND_COLOR = titleBackgroundColor || "#04C2C9";

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
									width: TITLE_WIDTH,
									backgroundColor: TITLE_BACKGROUND_COLOR
								}}>	
								{skill.name}
							</div>

							<div style={{width: "100%"}}>
								<div className={"skill-bar-bar " + barClassName}
									style={{
										// left: TITLE_WIDTH,
										height: "100%",
										width: skill.level + "%",
										// width: "10%",
										backgroundColor: "red"
									}}>
								</div>
							</div>
							

							

						</div>
					)
				})}
			</div>

		)
	}

}
