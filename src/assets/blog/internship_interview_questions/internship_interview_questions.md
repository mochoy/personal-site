Now that I should hopefully be done with internship interviews for the rest of my life, here's a mega list of almost every interview question I was asked from 200+ internship interviews at Facebook, Apple, Amazon, Nvidia, Google, Microsoft, Qualcomm, Analog Devices, Texas Instruments, Northrop Grumman, SpaceX, Tesla, yeah you get the idea. This is going to be a massive step up from ["part 1"](https://www.reddit.com/r/ECE/comments/iwmpw7/technical_internship_interview_questions_at_big/) that I posted a while back now that I have more coursework, internships, and interviews under my belt. 

This was originally going to be part of the Interviews chapter of my [internship search guide](https://montychoy.com/blog/how_to_land_an_electrical_engineering_internship_part_1_the_internship_mindset), but that post just got WAY too long so I decided to create a separate post just for this repository of questions. That post is still chalk full of interview advice and experiences, so check it out when it's ready! 

I tried my best to organize questions by topic, but there's tons of overlap between each topic. For example, GPIO/output driver design and implementation can be asked in the context of analog electronics, embedded systems, transmission lines, and power electronics. Some of these questions have just been repeated with or without additional context to solidify the topic while others will just be refer to another section.

# Disclaimers and Notes
- These questions were for internships, but there's a lot of overlap with full-time (FT) interviews. In fact, I'm doing FT interviews at the time of writing this and they basically ask the same stuff. If the questions end up being super similar, I may just rename this post instead of making a new one. 
- These questions are reflective of my skillset, strengths, and experiences. I'm doing my undergrad at Cal Poly SLO and did internships at Apple and Microsoft, so these questions are mostly focused on that experience in analog electronics, power electronics, and embedded systems. I'm pretty trash at digital stuff, so those sections will be lacking in comparison.
- I take notes of almost every interview (which I'd recommend you do!) and every question they ask, so this post will just be a reflection of that content. 
- I try to include every question, no matter how dumb it may seem. What you might think is a dumb question may actually be a very good question for someone else to study. 

# Basic Circuits
- What's ohm law? (do people even get this wrong??)
- What's the equation to find power? 
- What's the voltage divider equation?
- Basic RLC circuit analysis. 
- Basic LPF/BPF/HPF filter analysis. 
- Passive components' parastics. 
- Basic op-amp circuit analysis. 
- What happens when an inductor saturates? 

# Semiconductor Devices
- What's a depletion region and how does it form? 
- What materials are typically used for semiconductors?
- What is doping? 
- How does doping improve performance? 
- What elements are typically used for doping? 
- Which charge carriers are more mobile - holes or electrons?
- What's the difference between P-type semiconductors vs N-type semiconductors? 
- Why do N-type semiconductors typically have lower resistance? 

## Diodes
- How does a diode work? 
- What are the different kinds of diodes?
- What's the typical forward voltage drop across a dioide? Why is it this value? 
- How can you build an ideal diode? 

## BJTs
- Draw a NPN/BJT symbol. 
- What's the difference between a BJT and MOSFET? 
- Draw IV curve.
- How does it work?
- What's the difference between an NPN and PNP?
- What are the different modes of operation? 

## FETs
- Draw a PFET/NFET symbol. 
- What's the difference between a BJT and MOSFET? 
- Draw IV curve for MOSFET
- How does it work?
- What's the difference between an N-channel and P-channel?
- What's the difference between enhancement-mode and dehancement mode? 
- What are the different modes of operation? 
- Internal body diode
- Given Vgs and Vt, how will the FET behave?

# Analog Circuits/Electronics

## Logic Gates (Analog Perspective)
- TTL vs CMOS? 
- What's shoot-through on a CMOS logic gate? How can it be prevented?
- CMOS efficiency analysis. How does operational frequency impact efficiency? What about logic/swing levels? Rise/fall times? 

## Amplifiers
- What determines slew rate and rise/fall time?
- Pros/cons of fast/slow slew rates? 
- How to bias an amplifer? 

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
- What happens if your PLL locks too fast or too slow? 

# Power Electronics
- What are some ways to increase/decrease voltage? What about for a power rail? 
- What's the difference between a buck converter vs LDO? 
- Design a power supply. 

## Buck Converters
Buck converter board routing is in PCB Design/Layout section. 

- How does a buck converter work? 
- How to measure output voltage? 
- What limits the switching frequency on the upper and lower ends? 
- Why are buck converters more efficient than LDOs? 
- How does switching requency impact performance? 
- What determines the output voltage?
- How to calculate duty cycle?
- What's the difference between discontinuous and continuous operation? 
- NFET vs PFET for high-side FET? What are pros and cons? 
- How do you validate/characterize a buck converter? What properties/behaviors do you look out for? 
- How is the output voltage typically sensed? What network is typically used? 
- How can the output current be sensed? 
- Design a circuit to properly drive a high-side NFET. 

### Circuit Analysis
- Why is the diode needed? What if it's removed? 
- If the diode is replaced with an ideal diode, how does it impact performance? 
- What is the switch node voltage potential in the off state?
- Where is inductor current sourced from in the off state?
- What direction does current flow in the inductor/capacitor? 
- Draw the waveforms for: 
  - Inductor voltage/current
  - Switch node voltage
  - Capacitor voltage/current
  - FET gate voltage
  - Diode current/voltage
  - Input supply voltage/current
  - Output load voltage/current
  - Low-side NFET voltage/current if using synchronous rectification
- Why is the inductor current a linear ramp?
- Why is the output capacitor voltage a linear ramp? 
- When does the output capacitor charge/discharge? 
- What is the inductor polarity? 
- When does the inductor sink/supply current? 
- What is voltage/current ripple? (from circuit analysis perspective)
- What determines inductor current slope? 
- What determines capacitor voltage slope? 
- Explain synchronous rectification. What are its pros/cons? 
- What happens if both the NFET and PFET are on at the same time? How do you avoid this? 
- What happens to the internal body diode in the off state?

### Efficiency and Ripple
- How to size inductors/capacitors to meet ripple spec? 
- Component-by-component analysis on efficiency and ripple impact. 
- What are some ways to increase efficiency? 
- What are some ways to decrease ripple?
- How does switching frequency impact frequency/ripple?
- What components are most responsible for efficiency losses? 
- Why should ripple be decreased? 
- When does ripple not as matter as much? 

### PFM Operation
- What can you do to increase efficiency at light loads? 
- Explain PFM operation.
- What's the difference between PFM and PWM? 
- How does the ripple compare between PFM and PWM? 
- What happens to the inductor current? 
- Describe the charge/discharge cycle of inductor and capacitor. 

### Controls/Stability
- How do inductor/capacitor values impact stability? 
- Explain different control topologies. 
- What is slope compensation and when is it needed?
- Explain subharmonic oscillation. 
- How is transient response characterized?
- What is a feed-forward capacitor? 

### Multiphase Buck Converters
- What is a multiphase buck converter? 
- How do they work and what challenges are presented? 
- When should they be used?
- How do they increase output current?
- How do they impact transient response? 

## Boost Converters

- How does a boost converter work?

## LDOs

- What does LDO stand for? 
- How does an LDO work?

## Charge Pumps

- How does a charge pump work? 
- Draw a circuit for a charge pump. 
- What are they used for? 


## Batteries

## Inductive Loads (Motors/Solenoids)

- Design a circuit to drive an inductive load from a microcontroller GPIO. 
- What sort of protection circuitry do you need? 
- Tradeoffs between different drive circuits: relay, MOSFET, BJT, etc. 

# PCB Design/Layout

- How to choose board stackup? 
- What material would I want for conduction layers? 

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

# Signal Integrity/Power Integrity (SI/PI)

## SI
- How to characterize quality of a signal?
- Explain ground bounce? 
- What happens if signal rising edge is too slow? Too fast? 

## PI
- How to characterize quality of power supply? 

# Digital Electronics

## Logic Gates (Digital Perspective)


# Digital Logic
- Do the K-map for this 

# RTL

# VLSI

## Computer Architecture
- Describe the five-stage pipeline.

# Behavioral

# Technical/Behavioral

# System Architecture

# Misc.

# Appendix
- FTE/FT - Full-Time Engineer/Full-Time
- SI/PI - Signal Integrity/Power Integrity
- TL - Transmission Line
