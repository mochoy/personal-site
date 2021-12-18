Now that I should hopefully be done with internship interviews for the rest of my life, here's a mega list of almost every interview question I was asked from 200+ internship interviews at Facebook, Apple, Amazon, Nvidia, Google, Microsoft, Qualcomm, Analog Devices, Texas Instruments, Northrop Grumman, SpaceX, Tesla, yeah you get the idea. This is going to be a massive step up from ["part 1"](https://www.reddit.com/r/ECE/comments/iwmpw7/technical_internship_interview_questions_at_big/) that I posted a while back now that I have more coursework, internships, and interviews under my belt. 

This was originally going to be part of the Interviews chapter of my [internship search guide](https://montychoy.com/blog/how_to_land_an_electrical_engineering_internship_part_1_the_internship_mindset), but that post just got WAY too long so I decided to create a separate post just for this repository of questions. That post is still chalk full of interview advice and experiences, so check it out when it's ready! 

I tried my best to organize questions by topic, but there's tons of overlap between each topic. For example, GPIO/output driver design and implementation can be asked in the context of analog electronics, embedded systems, transmission lines, and power electronics. Some of these questions have just been repeated with or without additional context to solidify the topic while others will just be refer to another section.

# Disclaimers and Notes
- These questions were for internships, but there's a lot of overlap with full-time (FT) interviews. In fact, I'm doing FT interviews at the time of writing this and they basically ask the same stuff, there are usually just more FT interviews so they have an opportunity to dive deeper. If the questions end up being super similar, I may just rename this post instead of making a new one. 
- These questions are reflective of my skillset, strengths, and experiences. I'm doing my undergrad at Cal Poly SLO and did internships at Apple and Microsoft, so these questions are mostly focused on that experience in power electronics, embedded systems, and board layout/design. I'm pretty trash at digital stuff, so those sections will be lacking in comparison.
- I take notes of almost every interview (which I'd recommend you do too!) and every question they ask, so this post will just be a reflection of that content. 
- I try to include every question, no matter how dumb it may seem. What you might think is a dumb question may actually be a very good question for someone else to study. 

# Basic Circuits
- What's ohm law? (do people even get this wrong?? Next time I get asked this I'm going to get it wrong on purpose lmao)
- Conceptually explain ohm's law. 
- What are some basic circuit analyis laws? 
- What are KCL/KVL?
- Basic KCL/KVL circuit problems. 
- What's the equation to find power? 
- Draw a voltage divider circuit. What's the voltage divider equation? Derive it. 
- Basic RLC circuit analysis. 
- Basic LPF/BPF/HPF filter analysis. 
- Passive components' parastics. 
- Basic op-amp circuit analysis. 

# Passive Components
## Resistors
- Draw the symbol for a resistor. 
- What is resistance? 
- Draw a realistic circuit model for a resistor. What are the parastics and where do they come from? 
- What are some common resistor values?
- What are some common resistor packages and sizes?

## Capacitors
- Draw the symbol for a capacitor. 
- What is capacitance? 
- What is a dielectric? 
- How does a capacitor behave when initially excited and at DC steady-state? 
- Draw a realistic circuit model for a capacitor. What are the parastics and where do they come from? 
- What is a capacitor's self resonant frequency? 
- Build a LPF/HPF using a single capacitor.
- What's a bypass/decoupling capacitor? What about a bulk capacitor? What's the difference? 

## Inductors
- Draw the symbol for an inductor. 
- What is inductance?
- How does an inductor behave when initially excited and at DC steady-state? 
- What happens when an inductor saturates? 
- Draw a realistic circuit model for an inductor. What are the parastics and where do they come from? 
- What do cores do on inductors? 
- What are typical core materials?
- What are the main loss mechanisms of an inductor? Where do they arise from?
- What is ACR? Where does it arise from and how is it impacted by frequency? 
- Build a LPF/HPF using a single inductor.

# Semiconductor Devices
## Device Physics
- What's the difference between P-type semiconductors vs N-type semiconductors? 
- What's a depletion region and how does it form? 
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
- What's the typical forward voltage drop across a diode? Why is it this value? How does it differ for different diodes? 
- How can you build an ideal diode? 

## BJTs
- Draw a NPN/BJT symbol. 
- What are the terminals?
- What are some use cases of a BJT? 
- What's the difference between a BJT and MOSFET? 
- Draw IV curve.
- How does it work?
- What's the difference between an NPN and PNP?
- What are the different modes of operation? 
- What is current gain/beta? 

## MOSFETs
- Draw a PFET/NFET symbol.
- What are the terminals?
- Which two terminals are often connected together and why? 
- What are some use cases of a MOSFET?
- What's the difference between a BJT and MOSFET? 
- Draw IV curve for MOSFET
- How does it work?
- What's the difference between an N-channel and P-channel?
- What's the difference between enhancement-mode and dehancement mode? 
- What are the different modes of operation? 
- Given Vgs and Vt, how will the FET behave? What operating region will it be in? Load-line analysis. 
- What is the internal body diode? Where does it come from?
- Why are MOSFETs sensitive to overvoltage conditions applied at the gate? 

# Analog Circuits/Electronics
- Often times, I'm given a circuit and asked to explain how it works and what type of circuit it is. Here are a few of them I've gotten (and know what they're called):
  - Charge pump
  - Level shifter
  - LDO
  - RLC filters
  - Current mirror

## CMOS 
- TTL vs CMOS? 
- What's shoot-through on a CMOS logic gate? How can it be prevented?
- CMOS efficiency analysis. How does operational frequency impact efficiency? What about logic/swing levels? Rise/fall times? 
- How can you achieve faster slew rates? 
- Why are MOSFETs sensitive to overvoltage conditions applied at the gate? 
- Design CMOS input protection circuits against ESD/overvoltage events.

## Amplifiers
- What is an opamp? How does it work?
- What are the three rules of an ideal opamp? 
- Draw an inverting/non-inverting opamp circuit. 
- What is the DC gain of an ompamp? 
- What is common-mode and differential gain? What are their ideal values?
- What is the gain-bandwidth product? 
- What determines slew rate and rise/fall time?
- Pros/cons of fast/slow slew rates? 
- How to bias an amplifier? 
- Why are BJTs more often used for amplifiers than MOSFETs? 

## Filters
- Draw mag/phase response of a first-order filter. 
- What's the dropoff rate of a first-order low-pass filter? 
- What does the bandwidth characterize? 
- What is the 3dB rolloff point? What happens after that? How much of the signal gets through? 

## ADC
- How does an ADC work? 
- How does a flash ADC work?
- How does a SAR ADC work?
- Design an ADC. 

## DAC
- How does a DAC work?
- Design a DAC. 

## PLL
- What can you use increase clock frequency? 
- How does a PLL work? 
- What blocks does a PLL have? 
- Draw a block diagram.
- What happens if your PLL locks too fast or too slow? 

# Power Electronics
- What type of load (resistive, inductive, capacitive) can a SoC/CPU typically be characterized as? 
- What is the condition for maximum power transfer?
- Often times on a power rail, there are many capacitors connected to ground. What are these capacitors and why are there so many? Why can you just put one massive capacitor? 

## General Power Supply
- What are some ways to increase/decrease voltage? What about for a power rail? 
- Why shouldn't you use a voltage divider to step down voltage for a power rail? 
- When is a voltage divider applicable to step down voltage? 
- Name some voltage regulators. 
- In many embedded systems, why are step-down regulators more common than step-up regulators?
- What's the difference between a buck converter vs LDO? 
- Design a power supply. 
- Why is supply voltage overshoot/undershoot often undesired? When can it be tolerated? 
- Given a supply spec, design power architecture.

## Buck Converters
Buck converter board routing is in PCB Design/Layout section. I often refer to the "on state" where the high-side FET is on and the diode/low-side FET is off and the "off state" where the low-side FET is off and the diode/low-side FET is on. 

- What is a buck converter?
- How does a buck converter work? 
- Draw a circuit for a buck converter. 
- What are the different operation modes? 
- What's the difference between discontinuous and continuous operation? 
- How do you validate/characterize a buck converter? What properties/behaviors do you look out for? 
- How is the output voltage typically sensed? What network is typically used and why is it needed? 
- What happens if the voltage-sensing resistor divider has too high resistance? What if too low?
- How can the output current be sensed? 
- When should output current be sensed? Before or after the output inductor? Or somewhere else? 

### Duty Cycle/Output Voltage
- What determines the output voltage and why?
- What is duty cycle? 
- How to calculate duty cycle?
- What happens at 100% and 0% duty cycle? 
- Given a Vout/Vin ratio, how can the duty cycle be calculated? 
- Given duty cycle and Vin, can you find Vout? 

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
- What direction does current flow in the inductor/capacitor in the on and off states? 
- Why is the inductor current a linear ramp? What determines this behavior?
- Why is the output capacitor voltage a linear ramp? 
- When does the output capacitor charge/discharge? 
- What is the inductor polarity? 
- When does the inductor sink/supply current? 
- What is voltage/current ripple? (from circuit analysis perspective)
- What determines inductor current slope? 
- What determines capacitor voltage slope? 
- Why is the diode needed? What if it's removed? 
- If the diode is replaced with an ideal diode, how does it impact performance? 
- What is the switch node voltage potential in the off state?
- Where is inductor current sourced from in the off state?

### Power Bridge
Many of these questions assume that synchronous rectification is implemented, but some also compare the behavior/performance between a low-side NFET and diode.

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

### PFM Operation
- What can you do to increase efficiency at light loads? 
- Explain PFM operation.
- What's the difference between PFM and PWM? 
- How does the ripple compare between PFM and PWM? 
- What happens to the inductor current? 
- Describe the charge/discharge cycle of inductor and capacitor. 

### Controls/Stability
- What does stability refer to in a buck? 
- What type of system is the output LC filter? 
- How do inductor/capacitor values impact stability? 
- Explain different control topologies. 
- What's the difference between voltage-mode and current-mode control? Why are they often both implemented simultaneously?
- What is slope compensation and when is it needed? (what kinda person asks undergrads this?)
- Explain subharmonic oscillation. 
- How is transient response characterized?
- Explain what happens during a load transient event. 
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

## Boost Converters
- How does a boost converter work?
- Why are they less efficient than buck converters? 

## LDOs
- What does LDO stand for? 
- How does an LDO work?

## Charge Pumps
- How does a charge pump work? 
- Draw a circuit for a charge pump. 
- What are they used for? 

## Batteries
- What are some common battery chemistries? 
- How do you characterize a battery? 
- What are some desirable characteristics in a battery?
- How do you measure battery voltage/current? 
- What do you have to monitor in a battery to ensure it's operating safely? 

### LiPo
- What is the common bettery chemistry used in rechargable consumer electronics? 
- What is the typical cell voltage of a LiPo? What are its ranges and why? 
- What happens when you overcharge the battery? 
- Explain the LiPo discharge and charge curve. 
- How do you charge a LiPo? What steps and precautions are needed?
- What are the constant-current and constant-voltage procedures in the charge curve? 
- When do LiPos charge fastest? 
- How does temperature impact LiPo performance? 
- What are some tradeoffs in a LiPo? 
- How can you determine the state of charge? 

## Inductive Loads (Motors/Solenoids)
- Design a circuit to drive an inductive load from a microcontroller GPIO. 
- What sort of protection circuitry do you need? 
- Tradeoffs between different drive circuits: relay, MOSFET, BJT, etc. 

## Current Sensing
- How to measure current?
- How does inductive/magnetic current sensing work? What are its pros and cons? 
- Describe tradeoffs between different current sensing mechanisms. 

### Sense Resistor
Sense resistor PCB layout/routing is in PCB Design/Layout section
- How does a sense resistor work to sense current? 
- What are its pros and cons? 
- How do you spec a current sense resistor? What happens if it's too big/small? 
- Given a range of input currents and ADC input voltage range, find an apporpriate sense resistor value. 
- What's the difference between high-side and low-side current sensing? What are the advantages/disadvantages of each? When do you need to use one vs the other? 
- How can you use drain-source measurements of a MOSFET to determine current? What are the pros and cons of this setup? 

### Current Sense Ampliferies (CSA)
- What's a current sense amplifer (CSA)? 
- When do you need a CSA? 
- What's the difference between a CSA and a regular op-amp? 
- How do you spec a CSA?
- Given a range of input currents, a sense resitor value, and ADC input voltage range, find an apporpriate CSA gain. 

# PCB Design/Layout
- How to choose board stackup? 
- What material would I want for conduction layers? 
- Sense resistor routing

## Diff Pairs
- What's a differential pair? 
- How should it be routed? What are advantages/disadvantages? 
- How does it improve noise immunity? 
- When are they typically used? 

# Embedded Systems

## Communication Buses
A lot on GPIO design is very applicable, those are in the Analog Electronics section. 

- What are the three common communication protocols?
- How do they (I2C, SPI, UART) work? 
- What's the difference between I2C and SPI? 
- Which is faster? Why?

### I2C
- Why are pullups needed? How do you spec them? 
- How do you increase rise time on I2C? 
- Why would rise time be too slow on I2C?
- If the logic low state of signal doesn't reach logic-low threshold of device, what could be happening? 
- How many pins are needed? What if I have more slaves? 
- How interface with slaves?
- How many slaves can there be? 
- Explain address/data frames. 
- Explain NACK/ACK. 
- Explain clock stretching. 

### SPI
- How many slaves can there be? 
- How to interface with slaves? 
- How does daisy-chaining work? 

# Signal Integrity/Power Integrity (SI/PI)

## SI
- How to characterize quality of a signal?
- Explain ground bounce? 
- What happens if signal rising edge is too slow? Too fast? 

## PI
- How to characterize quality of power supply? 

# Transmission Lines/High-Speed Design
- When is transmission line (TL) analysis valid? 
- What is characteristic impedance?
- What are reflections? Why do I care about them? 
- What causes reflections? 
- How can I control the characteristic impedance of a TL? 

# Measurement
- What sample rate/bandwidth will I need to measure a signal? 
- How should I measure X signal? 
- What's a diff probe? When do I need it?
- What's an active probe? When do I need it?
- What does the 10x attenuation do on a probe?
- How does an oscillicope work? 
- How can I measure current? 
- Probe input impedance - what should it be any why? 
- When would I want different probe impedance? 

# Digital Electronics
- How can you interface two devices with different logic levels? 
- Design a level shifter. 
- Design a single-FET level shifter (passives are allowed).

## Logic Gates (Digital Perspective)
- Draw a NOT/AND/etc gate symbol. 
- Draw the truth table for NOT/AND/etc gate. 
- What is the universal logic gate? 

# Digital Logic
- Do the K-map for a given truth table. 
- What's an FSM? 
- What's the difference between a Mealy and Moore FSM? 

# RTL

# VLSI

## Computer Architecture
- Describe the five-stage pipeline.

# Behavioral

# Technical/Behavioral

# System Architecture

# Misc.

# Appendix
- CSA - Current Sense Amplifer
- FTE/FT - Full-Time Engineer/Full-Time
- SI/PI - Signal Integrity/Power Integrity
- TL - Transmission Line
