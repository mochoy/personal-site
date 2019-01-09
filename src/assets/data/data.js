export const  data = {
	homeData: [
		{
	    "key": 0,
	    "navbarData": [
	      {
	        "key": 0,
	        "link": "About",
	        "text": "About"
	      },
	      {
	        "key": 1,
	        "link": "Projects",
	        "text": "Projects"
	      },
	      {
	        "key": 2,
	        "link": "Blasters",
	        "text": "Blasters"
	      },
	      {
	        "key": 3,
	        "link": "Architecture",
	        "text": "Architecture"
	      },
	      {
	        "key": 4,
	        "link": "Tutorials",
	        "text": "Tutorials"
	      }
	    ]
	  }
	],
	about: [
		{
			id: 0,
			name: "github",
			imgSrc: "github logo.png",
			link: "https://github.com/mochoy"
		}, 
		{
			id: 1,
			name: "linkedin",
			imgSrc: "linkedin.png",
			link: "https://www.linkedin.com/in/montychoy/"
		},
		{
			id: 2,
			name: "email",
			imgSrc: "email.png",
			link: "mailto:mochoy@calpoly.edu"
		},
		{
			id: 3,
			name: "facebook",
			imgSrc: "facebook.png",
			link: "https://www.facebook.com/monty.choy"
		},
		{
			id: 4,
			name: "instagram",
			imgSrc: "instagram.jpg",
			link: "https://www.instagram.com/darn_bok_choi_is_taken/"
		},
		{
			id: 5,
			name: "paypal",
			imgSrc: "paypal.jpg",
			link: "https://paypal.me/suild"
		},
		{
			id: 6,
			name: "suild",
			imgSrc: "Suild Logo.png",
			link: "https://suild.com"
		}
	],
	transImgData: [
	  "Buildings.jpg",
	  "Bridge.jpg",
	  "GreatAmerica.jpg",
	  "DiagonalThing.jpg",
	  "Cookie.jpg",
	  "Lighthouse.jpg",
	  "Portland.jpg",
	  "Beach.jpg"
	],
	projectData: [
		{
		  "key": 0,
		  "img": "webControllerNerfBlaster.jpg",
		  "title": "Web-Controlled Nerf Blaster",
		  "description": "Web application to control power outputs to control rate-of-fire and firing power of a highly modified Nerf blaster.",
		  "event": "Cal Poly Arduino Fest 2018",
		  "links": [
		  	{
		  		"name": "Code",
		  		"link": "https://github.com/mochoy/cal-poly-arduino-fest"
		  	}
  		],
  		filterCategories: [
  			[
			 		"Nerf Blasters",
			 		"Web",
			 		"Electronics",
			 		"Hardware",
			 		"Software"
			 	],
  			[
  				"Arduino",
  				"C++",
  				"JavaScript",
  				"CSS"
			 	],
			 	[
			 		"React",
			 		"Node.js",
			 		"Express",
			 		"Arduino"
			 	]
  		]
		},
		{
		  "key": 0,
		  "img": "dormDoorman.jpg",
		  "title": "Dorm Doorman",
		  "by": "Josh and Monty",
		  "description": "Uses machine learning and computer vision to unlock a door based upon facial recogition. Also includes Nerf blaster to engage unwanted intruders.",
		  "event": "Honorable mention at init() by SLO Hacks",
		  "links": [
		  	{
		  		"name": "Code",
		  		"link": "https://github.com/JoshGrace/SLOhacks-init"
		  	},
		  	{
		  		"name": "Check It Out",
		  		"link": "https://devpost.com/software/dorm-doorman"
		  	}		  	
		  ],
  		filterCategories: [
  			[
			 		"Nerf Blasters",
			 		"Electronics",
			 		"Hardware",
			 		"Software"
			 	],
  			[
  				"Python",
  				"Arduino",
  				"C++"
			 	],
			 	[
			 		"Arduino",
			 		"Open CV"
			 	]
  		]
		},
		{
		  "key": 0,
		  "img": "nerfSuperSoakerTurret.jpg",
		  "title": "Nerf Super Soaker Turret",
		  "description": "Remote-controlled motorized Nerf Super Soaker Thundershock watergun turret. Controlled with a Raspberry Pi with with an onboard camera and microphone allowing for realtime audio and video streaming of water blasting.",
		  "links": [
		  		  	
		  ],
  		filterCategories: [
  			[
  				"Nerf Blasters",
			 		"Electronics",
			 		"Hardware"
			 	],
			 	[
			 		"Python"
			 	],
			 	[
			 		"Raspberry Pi"
			 	]
  		]
		},
		{
		  "key": 0,
		  "img": "smartstryfe.jpg",
		  "title": "Smart Stryfe",
		  "description": "Modified Arduino-powered Nerf Stryfe blaster. Includes a built-in ammo counter, chronograph, voltmeter, and variable motor control. Utilizes custom 3D printed and machined components specially designed for modified Nerf applications and custom Arduino shield.",
		  "links": [
	  	 	{
	  	 		"name": "Code",
	  	 		"link": "https://github.com/mochoy/smart-nerf-stryfes/tree/master/V1"
	  	 	}
		  ],
  		filterCategories: [
  			[
  				"Nerf Blasters",
  				"Electronics",
  				"PCB Design",
  				"Hardware",
  				"Software"
			 	],
			 	[
			 		"C++",
			 		"Arduino"
			 	],
			 	[
			 		"Arduino"
			 	]
  		]
		},
		{
		  "key": 0,
		  "img": "mosfetBoardKit.png",
		  "title": "MOSFET Board Kit",
		  "description": "MOSFET board kits for modified Nerf blasters with protection from trasient inductive spiking, dV/dt, and ESD failure modes. Also logic-level compatible with necessary components to mitigate parasitic oscillation. Released as a product shipped and sold internationally.",
		  "links": [
		  	{
		  		"name": "Check It Out",
		  		"link": "https://suild.com/shop/0"
		  	},
		  	{
		  		"name": "Schematics",
		  		"link": "https://github.com/mochoy/suild-electrical-designs/blob/master/MOSFET%20Board%20v1.2.png"
		  	}
		  ],
  		filterCategories: [
  			[
  				"Electronics",
  				"PCB Design",
  				"Hardware"
			 	],
			 	[

			 	],
			 	[

			 	]
  		]
		},
		{
		  "key": 0,
		  "img": "motorchart.png",
		  "title": "Interactive Motor Chart",
		  "description": "Interactive chart to display specifications, information, and purchase locations of aftermarket Nerf motors for flywheel system applications.",
		  "links": [
		  	{
		  		"name": "Check It Out",
		  		"link": "https://suild.com/motor-chart"
		  	}
		  ],
  		filterCategories: [
  			[
  				"Web",
  				"Software"
			 	],
			 	[
			 		"JavaScript",
			 		"CSS"
			 	],
			 	[
			 		"React",
			 		"Node.js",
			 		"Express",
			 		"MongoDB",
			 		"Lodash"
			 	]
  		]
		},
		{
		  "key": 0,
		  "img": "suildwebsite.png",
		  "title": "Suild.com",
		  "description": "Website to display tutorials and technical documentation and sell custom electronics for modifed Nerf blasters. Launched to the web with over 500 monthly views and growing.",
		  "links": [
		  	{
		  		"name": "Check It Out",
		  		"link": "https://suild.com"
		  	}
		  ],
  		filterCategories: [
  			[
  				"Web",
  				"Software"
			 	],
			 	[
			 		"JavaScript",
			 		"HTML",
			 		"CSS"
			 	],
			 	[
			 		"React",
			 		"Node.js",
			 		"Express",
			 		"MongoDB",
			 		"Lodash"
			 	]
  		]
		},
		{
		  "key": 1,
		  "img": "smartBlaster.jpg",
		  "title": "Smart Blaster",
		  "description": "A hardware and software platform consisting of stackable PCB modules and a library compatible with Teensy and Arduino microcontrollers enabling ammo counting and more for modified Nerf blasters.",
		  "links": [
		  	{
		  		"name": "Code",
		  		"link": "https://github.com/mochoy/smart-blaster"
		  	}
		  ],
  		filterCategories: [
  			[
  				"Nerf Blasters",
  				"Electronics",
  				"PCB Design",
  				"Hardware",
  				"Software"
			 	],
			 	[
			 		"Arduino",
			 		"C++"
			 	],
			 	[
		 			"Arduino"
			 	]
  		]
		},
		{
		  "key": 0,
		  "img": "Awesome-Nerf-Turret.png",
		  "title": "Awesome Nerf Turret",
		  "description": "Remote-controlled Nerf Hyperfire turret powered by Let's Robot's realtime platform that allows for real-time streaming and control of the turret through letsrobot.tv",
		  "event": "Made for Let's Robot",
		  "links": [
		  	{
		  		"name": "Code",
		  		"link": "https://github.com/mochoy/runmyrobot"
		  	}
		  ],
  		filterCategories: [
  			[
  				"Nerf Blasters",
  				"Electronics",
  				"Web",
  				"Hardware",
  				"Software"
			 	],
			 	[
			 		"Python"
			 	],
			 	[
			 		"Raspberry Pi"
			 	]
  		]
		},
		{
		  "key": 2,
		  "img": "arduinoChronograph.jpg",
		  "title": "Cardboard Chrony",
		  "description": "Arduino-powered blastics chronograph able to track and calculate muzzle velocity of Nerf blasters, airsoft guns, paintball guns, and more. Built with an Arduino Nano, side-looking IR emitters and receivers, I2C monochrome OLED display, PVC, and a cardboard box.",
		  "links": [
		  	{
		  		"name": "Code",
		  		"link": "https://github.com/mochoy/arduino-chronograph"
		  	}
		  ],
  		filterCategories: [
  			[
  				"Electronics",
  				"Hardware",
  				"Software"
			 	],
			 	[
			 		"C++",
			 		"Arduino"
			 	],
			 	[
			 		"Arduino"
			 	]
  		]
		},
		{
		  "key": 0,
		  "img": "VyperT28.jpg",
		  "title": "Vyper T-28",
		  "description": "Integration of three Nerf blasters with a built-in Arduino-powered ammo counter, chronograph, and voltemeter.",
		  "links": [
		  	{
		  		"name": "Code",
		  		"link": "https://github.com/mochoy/vyper_t-28"
		  	},
		  	{
		  		"name": "Check It Out",
		  		"link": "https://github.com/mochoy/vyper_t-28"
		  	}
		  ],
  		filterCategories: [
  			[
  				"Nerf Blasters",
  				"Electronics",
  				"PCB Design",
  				"Hardware",
  				"Software"
			 	],
			 	[
			 		"C++",
			 		"Arduino"
			 	],
			 	[
			 		"Arduino"
			 	]
  		]
		},
		{
		  "key": 0,
		  "img": "SmartStrayven.jpg",
		  "title": "Smart Strayven",
		  "description": "Integration of two Nerf blasters with a built-in Arduino-powered ammo counter, chronograph, and voltemeter.",
		  "links": [
		  	{
		  		"name": "Code",
		  		"link": "https://github.com/mochoy/smart-strayven"
		  	}
		  ],
  		filterCategories: [
  			[
  				"Nerf Blasters",
  				"Electronics",
  				"PCB Design",
  				"Hardware",
  				"Software"
			 	],
			 	[
			 		"C++",
			 		"Arduino"
			 	],
			 	[
			 		"Arduino"
			 	]
  		]
		},
		{
		  "key": 2,
		  "img": "nerfAmmoCounter.jpg",
		  "title": "Nerf Ammo Counter",
		  "description": "Arduino-powered ammo counter for modified Nerf blasters. Can store and save various magazine sizes and count up from 0. Ammo displayed on small monochrome OLED display.",
		  "links": [
		  	{
		  		"name": "Code",
		  		"link": "https://github.com/mochoy/nerf-ammo-counter"
		  	},
		  	{
		  		"name": "Check It Out",
		  		"link": "https://www.youtube.com/watch?v=rPU7j7KLtIw"
		  	},
		  	{
		  		"name": "Schematics",
		  		"link": "http://i.imgur.com/Qt0TCzn.jpg"
		  	}
		  ],
  		filterCategories: [
  			[
  				"Nerf Blasters",
  				"Electronics",
  				"Hardware",
  				"Software"
			 	],
			 	[
			 		"C++",
			 		"Arduino"
			 	],
			 	[
			 		"Arduino"
			 	]
  		]
		},
		{
			"key": 4,
			"img": "kingOfNepalNoodle.png",
			"title": "King of Nepal Noodle",
			"description": "In Andoid game code named 'King of Nepal Noodle', evolve through the ages to defend against the enemies from stealing your treasure by controlling your primary tower, building and upgrading more towers, and setting traps in this tower defense gamed played in the portrait orientation.",
		  "links": [
		  	{
		  		"name": "Code",
		  		"link": "https://github.com/mochoy/king-of-nepal-noodle"
		  	}
		  ],
  		filterCategories: [
  			[
  				"Software",
  				"Web",
  				"Games"
			 	],
			 	[
			 		"JavaScript",
			 		"HTML",
			 		"CSS"
			 	],
			 	[
			 		"Phaser",
			 		"Lodash"
			 	]
  		]
		},
		{
			"key": 4,
			"img": "iatw.png",
			"by": "Annie and Monty",
			"title": "Isaac Against the World",
			"description": "A two-player bird's-eye-view shooter web game with guns, explosions, and zombies. Inspired by Boxhead. Made with Phaser.",
			"event": "Mission Bit winter 2015, second place winner of 2016 Congressional App Challenge",
		  "links": [
		  	{
		  		"name": "Code",
		  		"link": "https://github.com/mochoy/isaac-against-the-world"
		  	},
		  	{
		  		"name": "Check It Out",
		  		"link": "https://www.youtube.com/watch?v=poX0YGmnplM"
		  	}
		  ],
  		filterCategories: [
  			[
  				"Software",
  				"Web",
  				"Games"
			 	],
			 	[
			 		"JavaScript",
			 		"HTML",
			 		"CSS"
			 	],
			 	[
			 		"Phaser",
			 		"Lodash"
			 	]
  		]
		},
		{
			"key": 4,
			"img": "fps.png",
			"by": "Monty and Wesley",
			"title": "FPS",
			"description": "First-person survival shooter with tons of guns and zombies powered by Unity. Survive through endless wavies of zombies.",
			"event": "CodeDay 2014",
		  "links": [
		  	{
		  		
		  	}
		  ],
  		filterCategories: [
  			[
  				"Software",
  				"Game"
			 	],
			 	[
			 		"C#"
			 	],
			 	[
			 		"Unity"
			 	]
  		]
		}
	],
	filterCategories: {
		categories: [
			"Nerf Blasters",
			"Games",
			"Web",
			"Electronics",
			"PCB Design",
			"Hardware",
			"Software"
		],
		languages: [
			"JavaScript",
			"C++",
			"HTML",
			"CSS",
			"Python",
			"Arduino",
			"C#"
		],
		technologies: [
			"React",
			"Node.js",
			"Express",
			"Arduino",
			"Raspberry Pi",
			"OpenCV",
			"Phaser",
			"Unity",
			"MongoDB",
			"Lodash"
		]
	},
	blasterData: [
	  {
	    "title": "Blasters",
	    "backgroundColor": "#ffc04c",
	    "id": "Blasters"
	  },
	  {
	    "data": [
	      {
	          "key": 0,
	          "img": "Awesome-Nerf-Turret.png",
	          "title": "Awesome-Nerf-Turret",
	          "description": "A Nerf turret based around the Nerf Hyperfire, controlled and streaming live footage online through Let's Robot's controller scripts. Powered by a Raspberry Pi interfacing with the modified blasters through an electromechanical relay.",
	          "code": "https://github.com/mochoy/runmyrobot"
	      },
	      {
	          "key": 1,
	          "img": "VyperT28.jpg",
	          "title": "Vyper T-28",
	          "description": "A integration between three blasters, the Nerf Demolisher, the Nerf Joltz and the Nerf Rayven, with an added Smart Blaster kit containing an ammo counter, voltmeter, and chronograph. Modifications include the integration, 3D printed parts, full rewire to 16 AWG mutlistranded silicon-insulated wiring, MOSFET motor interfacing, lock removal, lubrication of all moving parts, and running off a 2S LiPo.",
	          "code": "https://github.com/mochoy/vyper_t-28"
	      },
	      {
	        "key": 2,
	        "img": "SmartStrayven.jpg",
	          "title": "Smart Strayven",
	          "description": "A seemless integration between two blasters, the Nerf Styfe and the Nerf Rayven, with an added Smart Blaster kit containing anammo counter, voltmeter, and chronograph. Modifications include the integration, 3D printed parts, full rewire to 16 AWG mutlistranded silicon-insulated wiring, MOSFET motor interfacing, lock removal, lubrication of all moving parts, and running off a 2S LiPo.",
	          "code": "https://github.com/mochoy/smart-strayven"
	      },
	      {
	        "key": 3,
	        "img": "nerfAmmoCounter.jpg",
	        "title": "Nerf Ammo Counter",
	        "description": "Arduino-powered ammo counter built for the Nerf Stryfe including auto-reload detection and magazine size toggling. Blaster modifications include full require, lock removal, lubrication of all moving parts, and running off two IMR batteries.",
	        "code": "https://github.com/mochoy/nerf-ammo-counter"
	      }
	    ]
	  }
	],
	architectureData: [
	  {
	    "name": "Serindipity",
	    "by": "Jet, Monty, and Cherry",
	    "imgs": [
	      {
	        "key": 0,
	        "src": "images/architecture/serendipity/Serendipity1.jpeg"
	      },
	      {
	        "key": 1,
	        "src": "images/architecture/serendipity/Serendipity2.jpg"
	      },
	      {
	        "key": 2,
	        "src": "images/architecture/serendipity/Serendipity3.jpg"
	      },
	      {
	        "key": 3,
	        "src": "images/architecture/serendipity/Serendipity5.jpg"
	      },
	    ],
	    "description1": "A Music Production Hub situated between Pier 1 and Pier 2 in Fort Mason's Historic Landmark District, residing close to the current home of the Fort Mason Center for Arts and Culture (FMCAC) which consolidates various outlets for people to explore their creative and artistic abilities. Serendipity to enhance the FMCAC's mission by creating additional space for musicians to both produce and perform their craft within a unique waterfront setting. Serendipity is a place for musically aspiring Bay Area artists to practice, hone, and challenge their capabilities in a wide-ranging environment equipped to cater to both collaborative interaction and individual experimentation. Serendipity will not only be a gathering place for those to express themselves through sound but will also be a place to learn and draw from musical history. Capitalizing on the site's public waterfront access, a public performace space is a key component of Serendipity.",
	    "description2": "Third place winner of Best Group Design in the 48th annual Architectural Foundation of San Francisco High School Design Competition.",
	    "description3": "This project includes a scale model made of butterboard and foam-core board as well as hand-drafted scale drawings of the interior sectional views, exterior elevation views, landscape view, and plan views of each floor according to architectural design standards."
	  },
	  {
	    "name": "Calaveras County Cabin",
	    "imgs": [
	      {
	        "key": 0,
	        "src": "images/architecture/calaveras cabin/CalaverasCabin1.jpg"
	      },
	      {
	        "key": 1,
	        "src": "images/architecture/calaveras cabin/CalaverasCabin2.jpg"
	      },
	      {
	        "key": 2,
	        "src": "images/architecture/calaveras cabin/CalaverasCabin3.jpg"
	      },
	      {
	        "key": 3,
	        "src": "images/architecture/calaveras cabin/CalaverasCabin4.jpg"
	      },
	    ],
	    "description1": "A small year-round vacation cabin used for fun and relaxation away from the hustle and bustle of the busy and congested metropolitan area. This cabin is a comfortable, well-designed retreat, with an approximate area of 1600 square-feet. This is a flexible and sustainable space, taking advantage of 'green' technology, energy savings, innovative and minimal materials, and attention to space and light. Intgration with the beautiful outdoors are also central to the design.",
	    "description2": "This project includes a scale model made of butterboard and foam-core board as well as hand-drafted scale drawings of the interior sectional views, exterior elevation views, landscape view, and plan views of each floor according to architectural design standards."
	  }
	],
	tutorialsData: [
	  {
	    "title": "Tutorials",
	    "backgroundColor": "white",
	    "id": "Tutorials"
	  },
	  {
	    "data": [
	      {
	          "key": 0,
	          "img": "mosfetTutorial.png",
	          "title": "MOSFETs for Nerf",
	          "description": "An extensive technical write-up on everything there is to know about power MOSFETs for Nerf applications.",
	          "links": [
	          	{
	          		"name": "Check It Out",
	          		"link": "https://suild.com/docs/0"
	          	}
	          ]
	      },
	      {
	          "key": 1,
	          "img": "awesome-nerf-turret-tutorial.png",
	          "title": "Let's Robot powered Nerf Turret",
	          "description": "Follow this tutorial to make an internet-controlled Nerf blaster turret with Let's Robot's robot controllers.",
	          "links": [
	          	{
	          		"name": "Check It Out",
	          		"link": "https://letsrobot.readme.io/docs/awesome-nerf-turret"
	          	}
	          ]
	      },
	      {
	        "key": 2,
	        "img": "nerf-ammo-counter-tutorial.jpg",
	          "title": "Nerf Ammo Counter",
	          "description": "Make your own simple and cheap DIY ammo counter for Nerf blasters.",
	          "links": [
	          	{
	          		"name": "Check It Out",
	          		"link": "https://suild.com/docs/2"
	          	}
	          ]
	      }
	    ]
	  }
	]
}