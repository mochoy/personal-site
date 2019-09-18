import React, { Component } from 'react';

import './index.css';

export default class SkillBar extends Component {
	render () {
		const { HEIGHT, 
			WIDTH, 
			CONTAINER_CLASSNAME,
			SKILL_BAR_CLASSNAME,
			TITLE_CLASSNAME,
			TITLE_WIDTH,
			BAR_CLASSNAME} = this.props;

		return (
			<div className={"" + CONTAINER_CLASSNAME}>
				<div className={"skill-bar " + SKILL_BAR_CLASSNAME}
					style={{
						height: HEIGHT || "50px",
						width: WIDTH || "100%",

					}}>	

					<div className={"skill-bar-title " + TITLE_CLASSNAME}
						style={{
							width: TITLE_WIDTH || "100px",
						}}>	
						Yes
					</div>

					<div className={"skill-bar-bar " + BAR_CLASSNAME}
						style={{
							height: "100%",
							width: "100%",
							backgroundColor: "red"
						}}>
					</div>

				</div>
			</div>

		)
	}

}
