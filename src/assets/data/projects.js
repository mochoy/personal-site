const projects = [
  {
    title: "Flywheel Setup Picker",
    date: "Nov 2019 - July 2020",
    event: "Suild Application",
    img: "flywheel_setup_picker.png",
    description: "Full-stack web application to submit, find, vote, and comment on Nerf blaster modification configurations.",
    isFeatured: false,
    links: { 
      open: "https://suild.com/tools/flywheel-setup-picker" 
    },
    categories: ["Software"]
  },
  {
    title: "RISC-V OTTER MCU",
    date: "June 2020",
    event: "Cal Poly CPE 233 - Computer Design",
    img: "risc-v_otter_mcu.png",
    description: "Simple MCU to implement RISC-V ISA modeled in SystemVerilog.",
    isFeatured: false,
    links: {},
    categories: ["Hardware"]
  },
  {
    title: "TeleMentary Box",
    by: "Mark, Monty, Jason, & Ben",
    date: "February 2020",
    event: "Slo Hacks 2020",
    prize: "1st Place Google Cloud Platform",
    img: "telementary_box.jpg",
    description: "Personal security locker to prevent package theft with live-streaming facial detection and gps. I devloped and deployed the front-end web client and GCP cloud functions.",
    isFeatured: true,
    builtWith: ["React", "Google Cloud Platform", "Machine Learning"],
    links: {
      open: "https://devpost.com/software/telementary-box",
      files: "https://github.com/warthogs32/locker"
    },
    categories: ["Hardware", "Software"]
  },
  {
    title: "ATMega328P Eval Board",
    date: "December 2019 - Present",
    img: "atmega328p_eval_board.jpg",
    description: "ATMega328P MCU eval board for prototyping ATMega328P MCU and CH340G USB to UART controller before implementing the MCU into more complex projects.",
    links: {
      files: "https://github.com/mochoy/arduino-clone"
    },
    categories: ["Hardware"],
    filterCategories: [
      [
        "Electronics",
        "PCB Design",
        "Hardware",
      ],
      [
      ],
      [
      ]
    ]
  },
  {
    title: "Select-Fire Rapidstrike Kit",
    date: "June 2019 - Present",
    event: "Suild Product",
    img: "select-fire_rapidstrike_kit.jpg",
    description: "PCB-based electronics product for select-fire control in modified Nerf blasters. Implements DC-DC converter for logic-level supply to power ATMega328P MCU and MOSFET-based PID controlled inductive drives. Sold over 500 units to 10+ countries.",
    isFeatured: true,
    builtWith: ["ATMega328P", "Real-Time Firmware", "PID Controller"],
    links: {
      open: "https://suild.com/shop/4",
      files: "https://github.com/Suild/select-fire-rapidstrike-kit"
    },
    categories: ["Hardware", "Software"],
    filterCategories: [
      [
        "Electronics",
        "PCB Design",
        "Hardware",
        "Nerf Blasters",
        "Software"
       ],
       [
         "Prolog",
         "Arduino",
         "C++"
       ],
       [
         "Arduino"
       ]
    ]
  },
  {
    title: "PWM Module",
    date: "April - May 2019",
    event: "Suild Product",
    img: "pwm_module.jpg",
    description: "Astable 555 with adjustable frequency and duty cycle for solenoid or motor control in modified Nerf blasters. It stacks on top of another custom PCB to safely drive large loads.",
    links: {
      open: "https://suild.com/shop/3",
      files: "https://github.com/Suild/pwm-module"
    },
    categories: ["Hardware"],
    filterCategories: [
      [
        "Electronics",
        "PCB Design",
        "Hardware"
       ],
       [
         "Prolog"
       ],
       [

       ]
    ]
  },
  {
    title: "MOSFET Board +",
    date: "May 2019",
    event: "Suild Product",
    img: "mosfet_board_+.jpg",
    description: "A beefy MOSFET-based inductive load driver for modified Nerf blasters. It's capable of driving up to 3 sets of flywheel motors or solenoids simultaneously!",
    links: {
      open: "https://suild.com/shop/1",
      files: "https://github.com/Suild/mosfet-board-plus"
    },
    categories: ["Hardware"],
    filterCategories: [
      [
        "Electronics",
        "PCB Design",
        "Hardware"
       ],
       [
         "Prolog"
       ],
       [

       ]
    ]
  },
  {
    title: "MOSFET Board 2",
    date: "February 2019",
    event: "Suild Product",
    img: "mosfet_board_2.jpg",
    description: "2nd version of the MOSFET Board. This new version brings a smaller form factor, expanable headers, and compatibility with the new MOSFET Board Ecosystem.",
    links: {
      open: "https://suild.com/shop/0",
      files: "https://github.com/suild/mosfet-boards"
    },
    categories: ["Hardware"],
    filterCategories: [
      [
        "Electronics",
        "PCB Design",
        "Hardware"
       ],
       [
         "Prolog"
       ],
       [

       ]
    ]
  },
  {
    title: "CV Nerf Turret",
    by: "Josh, Monty, & Raymond",
    date: "February 2019",
    event: "Tree Hacks 2019",
    img: "cv_nerf_turret.jpg",
    description: "CV-powered facial-recognition Nerf turret. A CV application runs a host Mac machine and uses an Android phone camera for facial recognition. The host mac communicates with an ATMega328P MCU over USB to rotate the custom laser-cut turret to engage the Nerf blaster.",
    links: {
      files: "https://github.com/mochoy/tree-hacks-cv-nerf-turret"
    },
    categories: ["Hardware", "Software"],
    filterCategories: [
      [
        "Electronics",
        "PCB Design",
        "Hardware",
        "Software"
      ],
      [
        "Arduino",
        "C++",
        "Python"
      ],
      [
        "Arduino",
        "OpenCV"
      ]
    ]
  },
  {
    title: "LiPo Calculator",
    date: "December 2018",
    event: "Suild Application",
    img: "lipo_calculator.png",
    description: "A web application to calculate voltage and output current specs based on cell count, discharge rating, and capacity ratings of a LiPo.",
    links: {
      open: "https://suild.com/tools/lipo-calculator"
    },
    categories: ["Software"],
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
         "MongoDB"
       ]
    ]
  },
  {
    title: "Egg Transporter Robot",
    by: "Drew, Jonathon, Monty, & Jackson",
    date: "October - December 2018",
    event: "Cal Poly EE 151",
    img: "egg_robot.jpg",
    description: "Line-following and obstacle-avoiding robot that transports to radiated factory workers.",
    links: {
      files: "https://github.com/mochoy/ee151-labs/blob/master/EggRobot/EggRobot.ino"
    },
    categories: ["Hardware", "Software"],
    filterCategories: [
      [
         "Hardware",
         "Software",
         "Electronics"
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
    title: "LiPo Checker",
    date: "November 2018",
    event: "Suild Application",
    img: "lipo_checker.png",
    description: "A web application to verify if a given LiPo battery works with a setup of aftermarket Nerf motors. Supports undervolting, overvolting, motor options, and more!",
    links: {
      open: "https://suild.com/tools/lipo-checker",
    },
    categories: ["Hardware", "Software"],
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
         "MongoDB"
       ]
    ]
  },
  {
    title: "Web-Controlled Nerf Blaster",
    date: "November 2018",
    event: "Cal Poly Arduino Fest 2018",
    img: "web_controlled_nerf_blaster.jpg",
    description: "Web application to control power outputs to control rate-of-fire and firing power of a highly modified Nerf blaster.",
    links: {
      files: "https://github.com/mochoy/cal-poly-arduino-fest"
    },
    categories: ["Hardware", "Software"],
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
    title: "Dorm Doorman",
    by: "Josh and Monty",
    date: "November 2018",
    event: "init() by SLO Hacks",
    prize: "Honorable Mention",
    img: "dorm_doorman.jpg",
    description: "Uses machine learning and computer vision to unlock a door based upon facial recogition. Also includes Nerf blaster to engage unwanted intruders.",
    links: {
      open: "https://devpost.com/software/dorm-doorman",
      files: "https://github.com/JoshGrace/SLOhacks-init"
    },
    categories: ["Hardware", "Software"],
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
         "OpenCV"
       ]
    ]
  },
  {
    title: "Nerf Super Soaker Turret",
    date: "Summer 2018",
    img: "nerf_super_soaker_turret.jpg",
    description: "Remote-controlled motorized Nerf Super Soaker Thundershock watergun turret. Controlled with a Raspberry Pi with with an onboard camera and microphone allowing for realtime audio and video streaming of water blasting.",
    links: {},
    categories: ["Hardware"],
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
    title: "Nerf Time",
    by: "Michael, Monty, & Elias",
    date: "July 2018",
    event: "Rapid.io Hackathon",
    img: "nerf_time.jpg",
    description: "Nerf turret controlled remotely using web app with live video steaming using a mobile device.",
    links: {
      files: "https://github.com/MiLeung/NerfTime"
    },
    categories: ["Hardware", "Software"],
    filterCategories: [
      [
        "Nerf Blasters",
        "Electronics",
        "Web",
        "Hardware",
        "Software",
        "Mobile"
       ],
       [
         "Python",
         "JavaScript",
         "Arduino",
         "C++",
         "HTML",
         "CSS"
       ],
       [
         "Arduino",
         "React",
         "Node.js",
         "Express"
       ]
    ]
  },
  {
    title: "Smart Stryfe",
    date: "Summer 2018",
    img: "smart_stryfe.jpg",
    description: "Modified Arduino-powered Nerf Stryfe blaster. Includes a built-in ammo counter, chronograph, voltmeter, and variable motor control. Utilizes custom 3D printed and machined components specially designed for modified Nerf applications and custom Arduino shield.",
    links: { 
      files: "https://github.com/mochoy/smart-nerf-stryfes/tree/master/V1" 
    },
    categories: ["Hardware", "Software"],
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
         "Arduino",
         "Prolog"
       ],
       [
         "Arduino"
       ]
    ]
  },
  {
    title: "Interactive Motor Chart",
    date: "May 2018",
    event: "Suild Application",
    img: "motor_chart.png",
    description: "Interactive chart to display specifications, information, and purchase locations of aftermarket Nerf motors for flywheel system applications.",
    links: {
      open: "https://suild.com/motor-chart"
    },
    categories: ["Software"],
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
         "MongoDB"
       ]
    ]
  },
  {
    img: "suild_website.png",
    title: "Suild.com",
    date: "February 2018 - Present",
    event: "Suild",
    isFeatured: true,
    description: "E-commerce webstore to sell custom designed PCB-based electronics, host interactive web applications, and provide technical documentation. Deployed to the web with over 20,000 annual sessions.",
    builtWith: ["React", "Node.js", "Express", "MongoDB"],
    links: {
      open: "https://suild.com",
    },
    categories: ["Software"],
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
         "MongoDB"
       ]
    ]
  },
  {
    title: "MOSFET Board Kit",
    date: "January - February 2018",
    event: "Suild Product",
    img: "mosfet_board_kit.jpg",
    description: "MOSFET board kits for modified Nerf blasters with protection from trasient inductive spiking, dV/dt, and ESD failure modes. Also logic-level compatible with necessary components to mitigate parasitic oscillation. Released as a product shipped and sold internationally.",
    links: {
      open: "https://suild.com/shop/0"
    },
    categories: ["Hardware", "Software"],
    filterCategories: [
      [
        "Electronics",
        "PCB Design",
        "Hardware"
       ],
       [
         "Prolog"
       ],
       [

       ]
    ]
  },
  {
    title: "MOSFETs for Nerf Applications",
    date: "August 2017",
    event: "Suild Documentation",
    img: "mosfet_tutorial.png",
    description: "An extensive technical write-up on everything there is to know about power MOSFETs for Nerf applications.",
    links: {
      open: "https://suild.com/docs/0"
    },
    categories: ["Hardware"]
  },
  {
    title: "Cardboard Chrony",
    date: "August 2017",
    img: "arduino_chronograph.jpg",
    description: "Arduino-powered blastics chronograph able to track and calculate muzzle velocity of Nerf blasters, airsoft guns, paintball guns, and more. Built with an Arduino Nano, side-looking IR emitters and receivers, I2C monochrome OLED display, PVC, and a cardboard box.",
    links: {
      files: "https://github.com/mochoy/arduino-chronograph"
    },
    categories: ["Hardware", "Software"],
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
    title: "Let's Robot powered Nerf Turret",
    date: "July 2017",
    event: "Suild Documentation",
    img: "awesome_nerf_turret.jpg",
    description: "Follow this tutorial to make an internet-controlled Nerf blaster turret with Let's Robot's robot controllers.",
    links: {
      files: "https://letsrobot.readme.io/docs/awesome-nerf-turret"
    },
    categories: ["Hardware", "Software"]
  },
  {
    title: "Smart Blaster",
    date: "July 2017 - Present",
    img: "smart_blaster.jpg",
    description: "A hardware and software platform consisting of stackable PCB modules and a library compatible with Teensy and Arduino microcontrollers enabling ammo counting and more for modified Nerf blasters.",
    links: {
      files: "https://github.com/mochoy/smart-blaster"
    },
    categories: ["Hardware", "Software"],
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
         "C++",
         "Prolog"
       ],
       [
         "Arduino"
       ]
    ]
  },
  {
    title: "Awesome Nerf Turret",
    date: "Summer 2017",
    event: "Made for Let's Robot",
    img: "awesome_nerf_turret.jpg",
    description: "Remote-controlled Nerf Hyperfire turret powered by Let's Robot's realtime platform that allows for real-time streaming and control of the turret through letsrobot.tv",
    links: {
      files: "https://github.com/mochoy/runmyrobot"
    },
    categories: ["Hardware", "Software"],
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
    title: "Vyper T-28",
    date: "August 2014 - August 2017",
    img: "vyper_t28.jpg",
    description: "Integration of three Nerf blasters with a built-in Arduino-powered ammo counter, chronograph, and voltemeter.",
    links: {
      files: "https://github.com/mochoy/vyper_t-28"
    },
    categories: ["Hardware", "Software"],
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
         "Arduino",
         "Prolog"
       ],
       [
         "Arduino"
       ]
    ]
  },
  {
    title: "Smart Strayven",
    date: "August 2013 - Present",
    img: "smart_strayven.jpg",
    description: "Integration of two Nerf blasters with a built-in Arduino-powered ammo counter, chronograph, and voltemeter.",
    links: {
      files: "https://github.com/mochoy/smart-strayven"
    },
    categories: ["Hardware", "Software"],
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
         "Arduino",
         "Prolog"
       ],
       [
         "Arduino"
       ]
    ]
  },
  {
    title: "Nerf Ammo Counter",
    date: "November 2016",
    img: "nerf_ammo_counter.jpg",
    description: "Arduino-powered ammo counter for modified Nerf blasters. Can store and save various magazine sizes and count up from 0. Ammo displayed on small monochrome OLED display.",
    links: {
      open: "https://www.youtube.com/watch?v=rPU7j7KLtIw",
      files: "https://github.com/mochoy/nerf-ammo-counter"
    },
    categories: ["Hardware", "Software"],
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
    title: "King of Nepal Noodle",
    date: "Summer 2016",
    img: "king_of_nepal_noodle.png",
    description: "In Andoid game code named 'King of Nepal Noodle', evolve through the ages to defend against the enemies from stealing your treasure by controlling your primary tower, building and upgrading more towers, and setting traps in this tower defense gamed played in the portrait orientation.",
    links: {
      open: "https://devpost.com/software/telementary-box",
      files: "https://github.com/mochoy/king-of-nepal-noodle"
    },
    categories: ["Software"],
    filterCategories: [
      [
        "Software",
        "Web",
        "Games",
        "Mobile"
       ],
       [
         "JavaScript",
         "HTML",
         "CSS"
       ],
       [
         "Phaser"
       ]
    ]
  },
  {
    title: "Isaac Against the World",
    by: "Annie & Monty",
    date: "Fall 2016",
    event: "Mission Bit winter 2015",
    award: "2nd Place Congressional App Challenge 2016",
    img: "iatw.png",
    description: "A two-player bird's-eye-view shooter web game with guns, explosions, and zombies. Inspired by Boxhead. Made with Phaser.",
    links: {
      open: "https://www.youtube.com/watch?v=poX0YGmnplM",
      files: "https://github.com/mochoy/isaac-against-the-world"
    },
    categories: ["Hardware", "Software"],
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
         "Phaser"
       ]
    ]
  },
  {
    title: "Zombie FPS",
    by: "Monty & Wesley",
    date: "November 2014",
    event: "CodeDay 2014",
    img: "fps.jpg",
    description: "First-person survival shooter with tons of guns and zombies powered by Unity. Survive through endless wavies of zombies.",
    categories: ["Software"],
    filterCategories: [
      [
        "Software",
        "Games"
       ],
       [
         "C#"
       ],
       [
         "Unity"
       ]
    ]
  },
  {
    title: "CRYENGINE FPS",
    by: "Monty & Oscar",
    event: "CodeDay 2013",
    date: "Winter 2013",
    img: "cryengine_fps.jpg",
    description: "First-person survival shooter made in CRYENGINE.",
    categories: ["Software"],
    filterCategories: [
      [
        "Software",
        "Games"
       ],
       [
         
       ],
       [
         
       ]
    ]
  }
];

export default projects;