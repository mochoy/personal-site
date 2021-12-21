Now that I should hopefully be done with internship interviews for the rest of my life, here's a mega list of almost every interview question I was asked from 150+  interviews at Facebook, Apple, Amazon, Nvidia, Google, Microsoft, Qualcomm, Analog Devices, Texas Instruments, Northrop Grumman, SpaceX, Tesla, etc. This is going to be a massive step up from ["part 1"](https://www.reddit.com/r/ECE/comments/iwmpw7/technical_internship_interview_questions_at_big/) that I posted a while back now that I have more coursework, internships, and interviews under my belt. 

This was originally going to be part of the Interviews chapter of my [internship search guide](https://montychoy.com/blog/how_to_land_an_electrical_engineering_internship_part_1_the_internship_mindset), but that post just got WAY too long so I decided to create a separate post just for this repository of questions. That post is still chalk full of interview advice and experiences, so check it out when it's ready! And before you get started, take a guess at how many questions this list has! (bonus points if you comment your guess because I'm also curious about your guesses!)

# Disclaimers and Notes
- These questions were for internships, but there's a lot of overlap with full-time (FT) interviews. In fact, I'm doing FT interviews at the time of writing this and they basically ask the same stuff, there are usually just more FT interviews so they have an opportunity to dive deeper and ask more questions. If the questions end up being super similar, I may just rename this post instead of making a new one lol. 
- These questions are reflective of my skillset, strengths, and experiences. I'm doing my undergrad at Cal Poly SLO and did internships at Apple and Microsoft, so these questions are mostly focused on that experience in power electronics, embedded systems hardware, and board layout/design. I'm pretty trash at digital stuff, so those sections will be lacking in comparison.
- I take notes of almost every interview and every question they ask (which I'd recommend you do too!), so this post will just be a reflection of that content. 
- I try to include every applicable question, no matter how dumb it may seem. What you might think is a dumb question may actually be a very good question for someone else to study. I'm just not going to include questions specific to me, like project- or experience-specific questions. 
- I tried my best to organize questions by topic, but there's tons of overlap between each topic. For example, GPIO/output driver design and implementation can be asked in the context of analog electronics, embedded systems, transmission lines, and power electronics. Some of these questions have just been repeated with or without additional context to solidify the topic while others will just be refer to another section.
- I use a few acronyms in this, so aside from the obvious ones (I, V, R, L, C, Z, KVL/KCL, MOSFET, BJT), there's an appendix that lists the acronyms. 
- Some questions I get more than others, so the more common questions will be bolded. 

# How Should You Use this List?

---

Ok that's enough random stuff here's the mega list of 800+ questions! 

# Basic Circuits
- What is ohm law? (do people even get this wrong?? Next time I get asked this I'm going to get it wrong on purpose lmao)
- Conceptually explain ohm's law. 
- What are some basic circuit analyis laws? 
- What are KCL/KVL?
- Basic KCL/KVL circuit problems. 
- What is the equation to find power? 
- Draw a voltage divider circuit. What is the voltage divider equation? Derive it. 
- Basic RLC circuit analysis. 
- Basic LPF/BPF/HPF filter analysis. 
- Passive components' parastics. 
- Basic opamp circuit analysis. 

---

# Passive Components
## Resistors
- Draw the symbol for a resistor. 
- What is resistance? 
- What does resistance depend on?
- Draw a realistic circuit model for a resistor. What are the parastics and where do they come from? 
- What are some common resistor values?
- What are some common resistor packages and sizes?
- What are some common failure modes of a resistor?
- What are pullup/pulldown resistors? How do you spec them? 

## Capacitors
- Draw the symbol for a capacitor. 
- What is capacitance? 
- What is a dielectric? 
- What is the equation for impedance of a capacitor?
- What is the differential equation for a capacitor?
- Does a capacitor have positive of negative reactance?
- What is the continuity condition? What do inductors resist change to?
- How does a capacitor behave when initially excited and at DC steady-state? 
- What is an inductors impedance at DC vs infinitely high frequency? Plot this behavior. 
- Draw a realistic circuit model for a capacitor. What are the parastics and where do they come from? 
- What is a capacitor's self resonant frequency? 
- What is a bypass/decoupling capacitor? What about a bulk capacitor? What is the difference? 
- What is an AC coupling capacitor? 
- What sort of signals can capacitors pass through and block? What sort of filter behavior is this? 
- Build a LPF/HPF using a single capacitor.
- What are some common failure modes of a capacitor?
- What is the continuity condition? What do capacitors resist change to?

## Inductors
- Draw the symbol for an inductor. 
- What is inductance?
- What is the equation for impedance of an inductor?
- What is the differential equation for an inductor?
- Does an inductor have positive of negative reactance?
- What is the continuity condition? What do inductors resist change to?
- How does an inductor behave when initially excited and at DC steady-state? 
- What is an inductors impedance at DC vs infinitely high frequency? Plot this behavior. 
- What happens when an inductor saturates? 
- Draw a realistic circuit model for an inductor. What are the parastics and where do they come from? 
- What do cores do on inductors? 
- What are typical core materials?
- What are the main loss mechanisms of an inductor? Where do they arise from?
- What is ACR? Where does it arise from and how is it impacted by frequency? 
- What sort of signals can inductors pass through and block? What sort of filter behavior is this? 
- Build a LPF/HPF using a single inductor.
- What are some common failure modes of an inductor?

---

# Physics/Chemistry
Basic physics/chemistry questions, not including device physics or basic circuit physics which has their own sections. 

- What is a conductor/insulator/semiconductor?
- What is the skin effect?
- What is the photoelectric effect?
- Explain any dielectric losses and how they occur. 
- How does electrcity work? 
- How does lightning work? 
- Which atom bands do electrons move? 

---

# Semiconductor Devices
## Device Physics
- What is the difference between P-type semiconductors vs N-type semiconductors? 
- What is a depletion region and how does it form? 
- What materials are typically used for semiconductors?
- What is doping? 
- How does doping improve performance? 
- What elements are typically used for doping? 
- What is charge mobility?
- What charge carriers are dominant in P-type semiconductors vs N-type semiconductors?
- Which charge carriers are more mobile: holes or electrons?
- Why do N-type semiconductors typically have lower resistance? 

## Diodes
- How does a diode work? 
- What are some use cases of a diode?
- Draw IV curve. 
- What are the different operation regions?
- Given a forward/reverse voltage and threshold voltage, determine what operation region it's in.  
- What are the different kinds of diodes?
- What is the typical forward voltage drop across a diode? Why is it this value? How does it differ for different diodes? 
- How can you build an ideal diode? 

## BJTs
- Draw a NPN/BJT symbol. 
- What are the terminals?
- What are some use cases of a BJT? 
- What is the difference between a BJT and MOSFET? 
- Draw IV curve.
- How does it work?
- What is the difference between an NPN and PNP?
- What are the different modes of operation? 
- What is current gain/beta? 

## MOSFETs
- Draw a PFET/NFET symbol.
- What are the terminals?
- Which two terminals are often connected together and why? 
- What are some use cases of a MOSFET?
- Why are MOSFETs used so often?
- What is the difference between a BJT and MOSFET? 
- Draw IV curve for MOSFET
- How does it work?
- What is the difference between an N-channel and P-channel?
- What is the difference between enhancement-mode and dehancement mode? 
- What are the different modes of operation? 
- Given Vgs and Vt, how will the FET behave? What operating region will it be in? Load-line analysis. 
- What is the internal body diode? Where does it come from?
- Why are MOSFETs sensitive to overvoltage conditions applied at the gate? 

---

# Analog Circuits/Electronics
- Often times, I'm given an unnamed circuit and asked to explain how it works and what type of circuit it is. Here are a few of them I've gotten (and know what they're called):
  - Charge pump
  - Level shifter
  - LDO
  - RLC filters
  - Current mirror

## CMOS 
- What is CMOS? Draw a CMOS buffer. 
- Why are these so often used?
- What type of MOSFETs are typically used on the high-side? What about the low-side? Why? 
- TTL vs CMOS? 
- What is shoot-through on a CMOS logic gate? How can it be prevented?
- CMOS efficiency analysis. How does operational frequency impact efficiency? What about logic/swing levels? Rise/fall times? 
- How can you achieve faster slew rates? 
- Design CMOS input protection circuits against ESD/overvoltage events.
- Draw voltage/current output waveforms for a CMOS buffer connected to a series RC load. Which FETs are conducting during a positive/negative step? 

## Amplifiers
- What is common-mode and differential gain? What are their ideal values?
- What is the gain-bandwidth product? 
- What determines slew rate and rise/fall time?
- Pros/cons of fast/slow slew rates? 
- How to bias an amplifier? 
- Why are BJTs more often used for amplifiers than MOSFETs? 

### Opamps
- What is an opamp? How does it work?
- Draw an opamp. What are the two input terminals?
- What connections are required to wire up an opamp?
- What are the three rules of an ideal opamp? 
- Draw an inverting/non-inverting opamp circuit. 
- What is the DC gain of an ompamp? 
- How does an open-loop opamp behave? What type of circuit is it?
- Why are non-inverting configurations often preferred? 

## Filters
- Draw mag/phase response of a first-order filter. 
- Draw a circuit for a first-order LPF/HPF. 
- What is the dropoff rate of a first-order low-pass filter? 
- What does the bandwidth characterize? 
- What is the 3dB rolloff point? What happens after that? How much of the signal gets through? 

## PLL
- What can you use increase clock frequency? 
- How does a PLL work? 
- What blocks does a PLL have? 
- Draw a block diagram.
- What happens if your PLL locks too fast or too slow? 
- Why is crushing the clock window bad? How can this impact other circuits that may be connected to the clock? 

---

# Power Electronics
- What type of load (resistive, inductive, capacitive) can a SoC/CPU typically be characterized as? 
- What is the condition for maximum power transfer?
- Often times on a power rail, there are many capacitors connected to ground. What are these capacitors and why are there so many? Why can you just put one massive capacitor? 
- What is bulk capacitance? 
- What is inductive flyback? When can this be unwanted? When can it be wanted? How can you protect against it?
- What is PWM? What are its characteristics?
- What novel semiconductors are being explored for power electronics? What are their tradeoffs?

## General Power Supply
Assume DC-DC for nearly every question unless specified or implied. AC power supplies are rarely brought up during my interviews given their use cases and relevance to my experience. 

- What are some ways to steo up/down voltage? What about for a power rail? 
- Why shouldn't you use a voltage divider to step down voltage for a power rail? 
- When is a voltage divider applicable to step down voltage? 
- Design a power supply. 
- Why is supply voltage overshoot/undershoot often undesired? When can it be tolerated? What type of loads are more sensitive to overshoot/undershoot?
- What parameters would you want to track in a power supply?
- When buying/designing a power supply, what specs do you look out for?
- Why is energy conservation important? How is it applicable? 
- Given three of the following: input voltage, input current, output voltage, and output current, calculate the fourth value that isn't given. 

### Power Supply Topologies
- Name some voltage regulators. 
- **What is the difference between a buck converter vs LDO? What are the tradeoffs?**
- When can an LDO be more efficient than a buck converter?
- What type of circuits can convert AC-AC/AC-DC/DC-DC/DC-AC?
- What is a bridge rectifier? How does it work? 
- In many embedded systems, why are step-down regulators more common than step-up regulators?

### Efficiency
- What is efficiency in a power supply? How can it be measured? Why is it important? 
- Given two of the following: input power, output power, and efficiency, calculate the third value that isn't given. 
- What happens to any lost power? Why is this bad?
- What is quiescent current?

### Power Architecture
- Given a supply spec (input supply voltage, output supply voltage(s), output current(s)), design power architecture.
- If you need multiple output supplies of different voltages from a single input supply, what are some solutions? 
- If you need multiple output supplies of the same voltage but different noise performance, what are some solutions? 
- If I have a high dropout voltage but require high efficiency and a very clean output supply rail, what are some solutions?
- What is an intermediate bus converter and when is it needed? 
- What is power sequencing? When/why is it needed? How is the sequence determined? How much time between each rail turning on/off is needed? 
- How can you implement power sequencing? 

## Buck Converters
Buck converter board routing is in PCB Design/Layout section. I often refer to the "on state" where the high-side FET is on and the diode/low-side FET is off and the "off state" where the high-side FET is off and the diode/low-side FET is on. 

- What is a buck converter?
- How does a buck converter work? 
- Draw a circuit for a buck converter. 
- What are some applications?
- What is a single-input multiple-output (SIMO) buck converter?

### Duty Cycle/Output Voltage
- What determines the output voltage and why?
- What is duty cycle? 
- How to calculate duty cycle?
- What happens at 100% and 0% duty cycle? 
- Given a Vout/Vin ratio, how can the duty cycle be calculated? 
- Given duty cycle and Vin, can you find Vout? 
- What is a DC load-line? What are its tradeoffs? 

### Circuit Analysis
- Draw the waveforms for: 
  - Inductor voltage/current
  - Switch node voltage under asynchronous and synchronous rectification
  - Capacitor voltage/current
  - FET gate voltage
  - Diode current/voltage
  - Input supply voltage/current
  - Output load voltage/current
  - Low-side NFET voltage/current if using synchronous rectification
- What is the purpose of the output inductor/capacitor? 
- What direction does current flow in the inductor/capacitor in the on and off states? 
- Why is the inductor current a linear ramp? What determines this behavior?
- Why is the output capacitor voltage a linear ramp? 
- When does the output capacitor charge/discharge? 
- What is the inductor polarity? 
- When does the inductor sink/supply current? 
- What is the input capacitor needed? What happens if it's removed? 
- What is voltage/current ripple? (from circuit analysis perspective)
- What determines inductor current slope? 
- What determines capacitor voltage slope? 
- Why is the diode needed? What if it's removed? 
- If the diode is replaced with an ideal diode, how does it impact performance? 
- What is the switch node voltage potential in the off state?
- Where is inductor current sourced from in the off state?

### Power Bridge
Many of these questions assume that synchronous rectification is implemented, but some also compare the behavior/performance between a low-side NFET and diode.

- What type of power bridge is often implemented? Why? 
- Why is the diode needed? What if it's removed? 
- Explain synchronous rectification. What are its pros/cons? 
- NFET vs PFET for high-side FET? What are pros and cons? 
- What are the pros and cons of a symmetrical power bridge?
- Design a circuit to properly drive a high-side NFET. What considerations must be taken into account? 
- What happens if both the NFET and PFET are on at the same time? How do you avoid this? 
- What happens to the internal body diode in the off state? Draw the switch node voltage waveform. 
- What considerations must be taken given the internal body diode behavior? 
- What can you do to decrease the effect of the internal body diode? 

### Efficiency, Ripple, and Switching Frequency
- Why are buck converters more efficient than LDOs? 
- How to size inductors/capacitors to meet ripple spec? 
- Component-by-component analysis on efficiency and ripple impact. 
- What are some ways to increase efficiency? 
- What are some ways to decrease ripple?
- How does switching frequency impact efficiency/ripple?
- What components are most responsible for efficiency losses? 
- Why should ripple be decreased? 
- When does ripple not as matter as much? 
- What limits the switching frequency on the upper and lower ends? Why can't the switching frequency be 1THz or 1Hz? 
- How does switching frequency impact performance? 
- How does dropout voltage impact efficiency, ripple, etc? What about output current an input/output voltage? 

### Voltage/Current Sensing
- How is the output voltage typically sensed? What network is typically used and why is it needed? 
- What happens if the voltage-sensing resistor divider has too high resistance? What if too low?
- How can the output current be sensed? 
- When should output current be sensed? Before or after the output inductor? Or somewhere else? 
- Which voltages/currents are important to be considered in the control loop and for what purpose?

### PFM Operation
- What are the different operation modes? 
- What is the difference between discontinuous and continuous operation? 
- What can you do to increase efficiency at light loads? 
- Explain PFM operation.
- What is the difference between PFM and PWM? 
- How does the ripple compare between PFM and PWM? 
- What happens to the inductor current? 
- Describe the charge/discharge cycle of inductor and capacitor. 

### Controls/Stability
- What does stability refer to in a buck? What happens when a buck is stable/unstable/marginally stable? 
- What type of system is the output LC filter? 
- How do inductor/capacitor values impact stability? 
- Explain different control topologies. 
- What is the difference between voltage-mode and current-mode control? Why are they often both implemented simultaneously?
- What is slope compensation and when is it needed? (what kinda person asks undergrads this?)
- Explain subharmonic oscillation. 
- Explain what happens during a load transient event. 
- How is transient response characterized?
- What is a feedforward capacitor? When is it needed?

### Multiphase Buck Converters
- What is a multiphase buck converter? 
- What are the pros/cons/tradeoffs vs single-phase buck converters? 
- How do they work and what challenges are presented? 
- When should they be used?
- How do they increase output current?
- How do they impact efficiency?
- How do they impact heat density?
- How do they impact transient response? 

### Designing Buck Converters
- What components are typically integrated in the IC and which are typically external? 
- How do you select a buck converter IC? 
- How should you spec the output inductor/capacitor? What about input capacitor? What are some considerations?
- Why is the inductor's saturation current important to consider? What about ACR vs DCR?
- What determines minumum/maximum L/C? 
- How does the output L/C impact stability? 
- How is the output voltage/current sensed? (more in Voltage/Current Sensing section)
- Design a buck converter. 
- What's a simple circuit to implement the switching? How can you make it switch with a higher/lower duty cycle based on the feedback voltage?

### Debugging, Validating, and Characterizing Buck Converters
- What are some failure modes of buck converters? How can they be detected and prevented?
- What can you do to debug a buck converter that isn't regulating? What could be going wrong?
- How do you validate/characterize a buck converter? What properties/behaviors do you look out for? 
- How does a buck converter age? What happens to its performance? 
- How does buck performance vary with process, voltage, and temperature (PVT)?

## Boost Converters
Many of the boost converter questions can be similar to bucks, but I barely have any experience with boosts so they aren't covered as much in my interviews. 

- What is a boost converter? How does it boost voltage? 
- How does a boost converter work?
- Draw a boost converter circuit. 
- What are some applications?
- Why are they less efficient than buck converters? 
- What is the purpose of the diode? The inductor? The capacitor?
- What happens to the inductor flyback voltage? Why is this important?

## Low-Dropout Regulators (LDOs)
- What does LDO stand for? What does "low-dropout" refer to? How can this be an advantage?
- How does an LDO work?
- An LDO can often be modeled as a single passive component, what is this passive component? 
- What are some tradeoffs of LDOs compared to other stepdown regulators?
- If I implement an LDO IC, what additional components are typically needed?
- What happens to any power losses? 
- LDO efficiency analysis. How does output current and dropout voltage impact efficiency? 

## Charge Pumps
- How does a charge pump work? 
- Draw a circuit for a charge pump. 
- What are they used for? 
- Charge pump efficiency anaylsis. 

## Batteries
- What are some common battery chemistries? Which are rechargable and which are single use? How do you determine which to use?
- How do you characterize a battery? 
- What are some desirable characteristics in a battery?
- When buying a battery, what specs do you look out for? 
- How do you measure battery voltage/current? 
- What do you have to monitor in a battery to ensure it's operating safely? 
- How do you charge/discharge a battery safely? 

### Lithium Polymer (LiPo)
- What is the common bettery chemistry used in rechargable consumer electronics? Why?
- What does LiPo stand for? What does this mean?
- What are some tradeoffs of a LiPo compared to other batteries? 
- What are some other common Lithium-based battery chemistries? What are their tradeoffs?
- Can LiPos be used forever? What happens as they age?
- What materials are LiPos made out of?
- What is the internal resistance? Why is it important? How does it vary with temperature, aging, frequency, etc?

#### Monitoring
- What is the typical cell voltage of a LiPo? What are its ranges and why? 
- How does temperature impact LiPo performance? 
- What important characteristics do you want to monitor in a LiPo circuit?
- How can you determine the state of charge (SoC)? Why is this often so difficult? 
- Why is SoC measurement accuracy so important?
- When it SoC measurement accuracy more desired? When does it not matter as much?
- How is capacity measured? 
- How can you determine the health of a LiPo?
- Why are charging/monitoring ICs important? What can they do? 

#### Charging/Discharging
- What is a LiPo's C rating?
- Explain the LiPo discharge and charge curve. 
- When do LiPos charge fastest? 
- How fast can you safely charge a LiPo?
- What happens when you overcharge the battery? 
- How do you charge a LiPo? What steps and precautions are needed?
- What are the constant-current and constant-voltage procedures in the charge curve? 
- What should you monitor when charging a LiPo?
- Design a circuit to charge/discharge a LiPo. 
- What is storage charging?
- Why are charging/monitoring ICs important? What can they do? 

#### Safety
- What are the dangers of Lithium-based battery chemistries? How can these be prevented?
- Why is it important to properly handle and dispose LiPos?
- Why is it so dangerous to puncture LiPos?
- What happens if you overdischarge/overcharge a LiPo?
- What happens when you short circuit a LiPo?
- Why is heat such a big concern?

## Inductive Loads
Mostly on DC inductive loads like brushed DC motors and solenoids. I've only been asked a tiny bit of AC inductive loads in the context of brushless motors. Most of these questions arise because of my personal projects with motors and solenoids, only a few roles I've interviewed for actually use motors/solenoids. I was also asked most of these questions during my freshman year before I started taking interview notes and before I had any internship or school experience, so these questions are mostly from memory. Most of these questions will be for motors (since I've been asked mostly about them), but there's a good amount of overlap with solenoids.

- What is a motor/solenoid? What can they be used for?
- Describe how a motor/solenoid works. 
- Why are coils often used? What's so special about that configuration?

### Characterization/Behavior
- When does a motor/solenoid draw the most current?
- When does a motor/solenoid draw the least amount of current? 
- Describe what happens to a motor/solenoid at steady-state under minimum and maximum current draw?. 
- What type of loads are motors/solenoids?
- What is flyback voltage?
- What is back EMF? 
- If I hook up a 12V supply (with infinite current output) to a motor/solenoid with a coil resistance of 1 ohm, will I see 12A of curent being draw? Why? When would I see 12A? When wouldn't I? 
- What is inrush current?
- When do motors/solenoids draw the most amount of current?
- Inductors oppose instantaneous changes in current, but motors/solenoid still experience very fast and large inrush currents. Why is this? 

### Brushed DC Motors
- What's the difference between a motor and generator?
- What's the difference between a motor and solenoid?
- What are the parts of a motor? Which parts rotate and which parts remain static?
- Name a few types of motors. What are they each used for?
- What are linear motors?
- What sort of motors are typically used for phone's vibration motor? 
- Draw a torque vs RPM curve. What are its implications? Repeat for current and voltage vs torque and RPM.
- What electrical parameter corresponds to high torque? Why? What about high RPM?
- How do you spec a motor?
- Why are motors so noisy? How can you reduce this noise?
- What is arcing?

#### Brushes
- What are brushes? 
- What are brushes made out of?
- What are some concerns about brushes?
- Why do brushes wear out?
- When should you replace brushes vs replace the whole motor?
- How do brushes maintain contact with the commutator?

### Brushless DC (BLDC) Motors
- How do BLDC motors work? 
- How do you control BLDC motors?
- How do you control a BLDC motor from a microcontroller? What other components do you need?
- What are some advantages of brushless vs brushed motors?
- What are the poles of the motor? How can they impact performance?
- How do you spec a BLDC motor?

#### Electronic Speed Controllers (ESCs)
- What is an electronic speed controller (ESC)? 
- Why are ESCs often required for brushless motors?
- What's the difference between an ESC and a single-phase motor driver? What additional functionality may an ESC offer?
- What components/subsystems does an ESC have?
- How do you interface with ESCs? What other components/contollers are needed? How do they communicate?
- Design an ESC. 
- How do you spec an ESC?

### Stepper Motors
- What is a stepper motor? 
- How does it work?
- What are its applications?
- What are its advantages compared to other types of motors?
- How do you control a stepper motor from a microcontroller? What other components do you need? 
- How do you spec a stepper motor?
- How do stepper motors hold a certain position?

### Servo Motors
- What is a servo motor? 
- How does it work?
- What are its applications?
- What are its advantages compared to other types of motors?
- How do you control a servo motor from a microcontroller? What other components do you need? 
- How do you spec a servo motor?
- How are servo motors so precise in their movement?

### Single-Phase Inductive Drives
PCB design/layout on inductive drives is in the PCBs section. 

- How do you drive an inductive load?
- What if you need motor braking? 
- What if you need to drive the motor in both directions? 
- What are the different kinds of motor braking?
- What sort of protection circuitry do you need? 
- Tradeoffs between different drive circuits: electromechanical relay (EMR), solid-state relay (SSR), MOSFET, BJT, insulated-gate bipolar transistor (IGBT), etc. 
- What optimizations can you do for solenoid drives to increase plunger velocity and cycle rate?
- If you're using a driver IC, how do you spec it? What properties should you look for? 
- If you're designing a motor/solenoid drive with discrete components, how do you spec your transistors? 
- What limits the switching frequency? 
- How do you increase the switching frequency?

#### Half/H-Bridge
There's a good amount of overlap with the Power Bridge subsection of Buck Converters as well, since the power bridge of a buck is often just a half bridge. 

- Draw an H-bidge ciruit.
- Draw a half-bidge ciruit.
- How does a half/H-Bridge work? 
- What's the difference between an H-bridge and half-bridge? What are the tradeoffs?
- How can you brake a motor using a half-bridge? What about an H-bridge? Which can brake the motor faster? How does this stress the motor?
- When can you use an asymmetrical half-bridge? When do you need a symmetrical H-bridge?
- What are the advantages of using a high-side NFET? What additional challenges are presented? 
- Design a circuit to properly drive a high-side NFET. Why is it needed?
- What happens if you turn both the PFET and NFET on the same side at the same time? How do you prevent this?1

#### Control from Embedded Device
Often times you want to control a big motor/solenoid from a small embedded device. This section focuses on some of the more power electronics side of things while the Embedded Systems section will focus a bit more on the embedded side of things. 

- Design a circuit to drive an inductive load from a microcontroller GPIO. 
- Why would a pulldown resistor be nessary?
- Why would you want a series resistor between the GPIO and MOSFET gate? What is parasitic oscillation in the context and where can it arise from? What does the series resistor do?
- Why is isolation important?
- What sort of isolations would you want?
- What is galvanic isolation?
- What are some challenges when using a high-side PFET and a much higher supply voltage to power the motor?
- Design a circuit to properly drive a high-side PFET. Why is this needed?

### Safety and Monitoring
- What are some failure modes of motors/solenoids? How can they be avoided?
- What are some dangers when using motors/solenoid?
- What properties do you want to measure when using a motor/solenoid? 
- How can these properties be monitored? What sensors/components can you use?
- How would you alter the behavior of the motor/solenoid based on the observed data?
- How do you determine how much current a motor/solenoid is drawing?
- How can you detect the temperature of a motor/solenoid?
- Which temperatures do you want to/can you measure?
- Since the motor/solenoid may be moving, you might not always want physical contact between the sensor and motor/solenoid. What are some contactless ways to meaure temperature? 
- How do motors perform as they age?
- What kind of stress may a motor experience in its lifetime?
- Motor/solenoids often require many loops in the coils, so the coil wires will be very thin. Motors/solenoids also draw lots of current, possibly more than the coils can support. How do you reconcile this? Do coils on the motors always burn out?

#### Speed/Position
- When/why would knowing the speed and/or position of a motor/solenoid be useful?
- How can you measure the RPM of a motor?
- How can you determine the position of a motor?
- What is a rotary encoder? How can it be used to measure motor speed?
- How can you use BEMF to measure motor speed?
- How can you measure the speed of a solenoid?
- How can you measure the position of a solenoid?

## Current Sensing
- How can you to measure current?
- Why do you want to measure current?
- How does inductive/magnetic current sensing work? What are its pros and cons? 
- Describe tradeoffs between different current sensing mechanisms. 

### Sense Resistor
Sense resistor PCB layout/routing is in PCB Design/Layout section

- How does a sense resistor work to sense current? 
- What are its pros and cons? 
- How do you spec a current sense resistor? What happens if it's too big/small? 
- Given a range of input currents and ADC input voltage range, find an apporpriate sense resistor value. 
- What is the difference between high-side and low-side current sensing? What are the advantages/disadvantages of each? When do you need to use one vs the other? 
- How can you use drain-source measurements of a MOSFET to determine current? What are the pros and cons of this setup? 

### Current Sense Ampliferies (CSA)
- What is a current sense amplifer (CSA)? 
- When do you need a CSA? 
- What is the difference between a CSA and a regular opamp? 
- How do you spec a CSA?
- Given a range of input currents, a sense resistor value, and ADC input voltage range, find an apporpriate CSA gain. 

---

# Printed Circuit Boards (PCBs)
- What is a PCB? Name some applications.
- What are the tradeoffs of PCBs vs solderless breadboards vs soldered breadboards vs just soldering everything together with wires? 
- What are the parasitic elements present on a PCB? 

## Stackup
- What are the layers of a PCB? what are they made of?
- How to choose how many layers for PCB? 
- How to choose board stackup? 
- What should be routed on each layer? What should be routed on inner layers vs top/bottom layer?
- Which layer(s) should be the ground layer(s)?
- Which layers should high-speed signals be routed?
- Which layters should power planes be on?
- What components would require a higher layer count?

## Design/Layout/Routing
- What are some general rule of thumbs for board routing?
- How do you decide which subsystems go where on a PCB?

### Grounding
- What is grounding on a PCB? Why is it so important?
- Describe some basic grounding layout techniques. 
- What is a ground plane? Pros/cons?
- What are the tradeoffs between using a ground plane vs ground traces to connect all ground potentials?
- In addition to providing a common reference potential, what are some other functionalities of ground planes? 
- Why can you use your ground plane to shield your signals? 
- Which layers typically have ground planes and why? 
- Why are ground probe points important? 
- When/why should you separate your ground reference potentials?
- What are some ground layout schemes? 
- What is star grounding? 
- What are the tradeoffs between combining analog, digital, and power grounds vs separating them?
- What happens if your ground plane potential differs throughout your board? 
- What can be the source of ground plan potential variation?
- How do you avoid too much variation?
- How can you design your system to be more resilient against ground disturbances?

### Routing Diff Pairs and High-Speed Signals
Diff pairs and high-speed design from board layout/design perspective, as opposed to signals or SI perspective. Diff pairs are often used for high-speed signals, so there will be a good amount of overlap with the Transmission Lines (TL) section. 

- What are some rules of thumb when routing high-speed signals?
- Should you put vias through high-speed traces?
- What shape should these high-speed traces be? Why?
- What is a differential pair? What are advantages/disadvantages? 
- How should it be routed? What are some layout guidelines that may differ from single-ended high-speed signals?
- What is serpentining? Why is it important for diff pairs?
- Describe transmission line components on a PCB. 
- If external termination components are used, where should they be placed? On the source, sink, or somewhere in between?

### Sense Resistor Layout/Routing
- How do you route a current sense resitors? 
- What is a kelvin connection for a sense resistor? What are the tradeoffs?

### Power Supply Layout/Routing
- How do you route decoupling and bulk capacitors? 
- What can you do at the board-level to reduce heating of a power supply?
- Heat sinks
- Thermal refief

### Inductive Loads Layout/Routing

## Vias
- What is a via? Why are they needed?
- What are the different types of vias? What are their tradeoffs? 
- If I need to via between inner layers, what type of vias would I use? 
- When would I want filled vias? 
- When would I want plugged vias? 
- What are some common failure modes of vias? 
- When do I not want to use vias? 
- Can you put a via on a surface-mount pad?

## Materials
- What material would I want for conduction layers? 
- What materials are often used for the insulation materials?
- What does "FR4" mean? 
- Why are PCBs often green? What other colors could they be? 

## Manufacturing
- What is the difference between surface-mount and through-hole components? Any tradeoffs?
- Describe the PCB fab process.  How are PCBs made?
- Describe the PCB assembly process.
- What is DRC? 
- How are components soldered on a PCB? 
  - How are double-sided components soldered on a PCB? 
  - What about mixed assembly boards? 
- What is panelization?
- What are mousebites? 
- What are fiducials? 

## Design for Manufacturing (DFM)
- How can you design a PCB for manufacturing? 
- What are a few test stations you would see on an electronics manufacturing/assembly line? 
- How are PCBs tested? When does this happen?

### Test Points
- What are test points? What are their use cases?
- What are layout guidelines for them? 
- When should/shouldn't you use them?
- Who/what uses test points?

## EMI Shields

## Debugging and Reworking PCBs
- What are some common failure modes of a PCB?
- If there's a short on the PCB, how can it be detected, found, and root caused?

## Electrical Computer-Aided Design (ECAD) Software

---

# Signals
- What is the Fourier Transform? 
- Draw spectral content of square wave/pulse train.
- What is PWM? What are its characteristics?
- Why are square waves so noisy? What can you do to decrease noise? What about decreasing noise at a particular frequnecy content? 
- What is the highest frequency component of a real vs ideal square wave? 
- If I want to measure a sine wave, what should be the sample rate? 

## Differential Signaling
Diff pairs from signals perspective, as opposed to board layout/design or SI perspective. 

- What is a differential pair? How does it work? 
- What is the difference between a single-ended and differential signal?
- When are they often used? 
- How do they improve noise immunity? 
- What does the common-mode voltage refer to? 
- What does the differential voltage refer to? 

---

# Signal Integrity/Power Integrity (SI/PI)
- What is SI/PI? Why is it important?

## Signal Integrity (SI)
- How to characterize quality of a signal?
- Explain ground bounce? 
- What happens if signal rising edge is too slow? Too fast? 
- Why is monotonicity during a signal transition important? 
- What is hysteresis and why is it used? 
- What are setup and hold times? What happens if they're violated? 

### Diff Pairs (SI Perspective)
Diff paris from SI perspective, as opposed to board layout/design or signals perspective.

## Power Integrity (PI)
Lots of crossover with Power Electronics section
- How to characterize quality of power supply? 
- What is power sequencing? Why is it important? 

---

# Transmission Lines/High-Speed Design
- When is transmission line (TL) analysis valid? 
- What is characteristic impedance?
- What are reflections? Why do I care about them? 
- Draw some signals with/without reflections. 
- What causes reflections? 
- How can I control the characteristic impedance of a TL? 
- What is the difference and pros/cons of series vs parallel termination? 
- What is the difference and pros/cons of source vs sink termination/matching?
- What are standard termination/characteristic impedances?
- How does R, L, and C impact characteristic impendace? How does that differ on a microstrip vs coax TL? 
- Describe the parasitic R, L, and C components that impact characteristic impedance. 
- What is impedance matching? Why do I care about it and when should it be used? 

---

# Embedded Systems
- What are some components/subsystems you'd find in an embedded system? 
- What are some examples of embedded systems?
- What are some common microcontrollers/microprocessors?
- What is the difference between a microcontroller and a microprocessor? 
- What are the blocks of a microcontroller and microprocessor? 
- How does a microcontroller interact with external peripherals? 
- When do use MCU vs ASIC vs FPGA?
- What are some common logic levels?

## Communication Buses
- **What are the three common communication protocols? How do they (I2C, SPI, UART) work?**
- What is the difference between I2C and SPI? 
- Which is faster? Why?
- How do different chips talk to each other?

### I2C
- What is I2C? What does it stand for? 
- **How does it work? Explain its operation.**
- Why are pullups needed? How do you spec them? 
- How do you increase rise time on I2C? 
- Why would rise time be too slow on I2C?
- If the logic low state of signal doesn't reach logic-low threshold of device, what could be happening? 
- How many pins/wires are needed? What if I have more slaves? 
- How interface with slaves?
- How many slaves can there be? 
- When would you need more masters?
- Explain address/data frames. 
- Explain NACK/ACK. 
- Explain clock stretching. 
- What are advantages of the open-drain output drivers? 
- What are typical logic levels? 

### SPI
- What is SPI? What does it stand for? 
- How many slaves can there be? 
- How to interface with slaves? 
- How does daisy-chaining work? 
- What are typical logic levels? 

### UART
- Oversampling?

## GPIOs
- What is a GPIO? What does it stand for and what are its use cases?
- What does "GP" refer to? 

### Design/Implementation
A lot on GPIO design is very applicable, more in-depth questions are covered in the CMOS and Amplifiers subsections of Analog Electronics. These questions will just be surface-level that are more applicable in embedded applications.

- Draw a GPIO circuit. How does it work? 
- What are the two most common types of GPIO implementations? What are their tradeoffs? 
- What does open-drain/push-pull mean?
- When are pullup/pulldown resistors necessary? How do you size them?
- What are some typical configurable GPIO settings? 
- What is bus contention? 

## Timers and Interrupts

## Peripherals
- Draw a circuit to connect a sensor to a microcontroller. 
- Draw a circuit to drive a LED from a microcontroller. What about a high-power LED? What if I want to change the brightness?
- Draw a circuit to drive a motor from a microcontroller. What if isolation is required? What if I want to change the speed?

## ADC
Most of my ADC/DAC questions have been in the context of embedded systems, not too much on analog design or anything. 
- How does an ADC work? 
- How does a flash ADC work?
- How does a SAR ADC work?
- Design an ADC. 
- Reading the ADC from your microcontroller returns some value. Given the value and the ADC supply voltages, convert this reading into a voltage. 

## DAC
Most of my ADC/DAC questions have been in the context of embedded systems, not too much on analog design or anything. 
- How does a DAC work?
- Design a DAC. 

## Debugging Embedded Systems
- If a microcontroller isn't booting up, what should you check for? 

---

# Sensors
- What is a tranducer?
- What is sensor fusion?
- Calibration, validation, testing

## Gyroscope/Acceleromter

## Light

## Camera

## LIDAR

---

# Digital
I get so few digital questions (not including embedded systems) that I can group everything into one section. 

- What is the difference between analog and digital? 

## Digital Electronics
- How can you interface two devices with different logic levels? 
- Design a level shifter. 
- Design a single-FET level shifter (passives are allowed).
- What are setup and hold times? What happens if they're violated? 
- What is the difference between a flip-flop and latch? 
- How does a flip flop/latch work? 
- Design a memeory cell. 
- Why are clocks needed? 
- What happens if a clock is too fast?
- What is a register?
- What is metastability?

### Logic Gates (Digital Perspective)
- Draw a NOT/AND/etc gate symbol. 
- Draw a NOT/AND/etc gate from transistors. 
- Draw the truth table for NOT/AND/etc gate. 
- What is the universal logic gate? 
- Convert some binary/hex/oct/decimal number to a different base. 

## Digital Logic
- What is a truth table? 
- Do the K-map for a given truth table. 
- What is an FSM? 
- What is the difference between a Mealy and Moore FSM? 

## RTL
- Desribe any experience you have with RTL. 
- Design a clock divider. 
- Design an arbiter. What are the different types and their pros/cons? 

## Assembly
- What is assembly? How does it differ from programming languages like C or Python?
- Describe what this program is doing. How long will it take to run? How many times will {some subroutine} get executed?

## VLSI Power/Performance
- How does clock frequency impact power, performance, and thermals? 
- Why are multiple clock domains needed?
- How does supply voltage impact power, performance, and thermals? 
- Why are multiple supply voltages needed?
- How does process, voltage, and temperature (PVT) impact power, performance, and thermals? 
- What are process corners? What do they refer to? 
- What are typical temperature ranges for validation? 
- What can you do to decrease power consumpution? 
- What can you do to throttle performance? 
- What sort of temperature control loops are commonly implemented? 

## Computer Architecture
- What is a CPU?
- What are some blocks in a CPU?
- What is an ALU?
- What is a cache? 
- What are registers?
- What is the fetch/execute cycle? 
- What is RAM? What does "random access" refer to?
- Explain the memory hierarchy. 
- Describe the five-stage pipeline.
- How can you offload tasks from the CPU? What are things you can do in parallel and what are the tradeoffs? 
- What can you do to increase the throughput of a CPU?
- What is pipelining? 
- What is branch prediction? Describe some branch prediction algorithms. 
- What are interrupts? When can they be used and why are they important?

---

# Coding
## Object-Oriented Programming (OOP)

---

# System Architecture

---

# Measurement
- What sample rate/bandwidth will I need to measure a signal? 
- How should I measure X signal? 
- What is a diff probe? When do I need it?
- What is an active probe? When do I need it?
- What does the 10x attenuation do on a probe?
- How does an oscillicope work? 
- How can I measure current? 
- Probe input impedance - what should it be any why? 
- When would I want different probe impedance? 
- What is the difference between bandwidth and sampling rate?

---

# General Debug


---

# Non-Technical
## Intro

## Behavioral

## Technical/Behavioral

---

# Misc.

---

# Appendix
- BLDC - Brushless DC Motor
- C - Capacitor/Capacitance or the programming language
- CSA - Current Sense Amplifer
- DFM - Design for Manufacturing
- ECAD - Electrical Computer-Aided Design 
- EMR - Electromechanical Relay
- ESC - Electronic Speed Controller
- FTE/FT - Full-Time Engineer/Full-Time
- IGBT - Insulated-Gate Bipolar Transistor
- L - Inductor/Inductance
- LDO - Low-Dropout Regulator
- LiPo - Lithium Polymer
- OOP - Object-Oriented Programming
- PCB - Printed Circuit Board
- PI - Power Integrity
- PVT - Process/Voltage/Temperature
- R - Resistor/Resistance
- SI - Signal Integrity
- SI/PI - Signal Integrity/Power Integrity
- SoC - State of Charge (for a battery) or System on Chip
- SSR - Solid-State Relay
- TL - Transmission Line
