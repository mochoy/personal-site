Now that I should hopefully be done with internship interviews for the rest of my life, here's a mega list of almost every interview question I was asked from 150+  interviews at Facebook, Apple, Amazon, Nvidia, Google, Microsoft, Qualcomm, Analog Devices, Texas Instruments, Northrop Grumman, SpaceX, Tesla, etc. This is going to be a massive step up from ["part 1"](https://www.reddit.com/r/ECE/comments/iwmpw7/technical_internship_interview_questions_at_big/) that I posted a while back now that I have more coursework, internships, and interviews under my belt.

This was originally going to be part of the Interviews chapter of my [internship search guide](https://montychoy.com/blog/how_to_land_an_electrical_engineering_internship_part_1_the_internship_mindset), but that post just got WAY too long so I decided to create a separate post just for this repository of questions. That post is still chalk full of interview advice and experiences, so check it out when it's ready! And before you get started, take a guess at how many questions this list has! (bonus points if you comment your guess because I'm also curious about your guesses!)

# Disclaimers and Notes
- These questions were for internships, but there's a lot of overlap with full-time (FT) interviews. In fact, I'm doing FT interviews at the time of writing this and they basically ask the same stuff, there are usually just more FT interviews so they have an opportunity to dive deeper and ask more questions. If the questions end up being super similar, I may just rename this post instead of making a new one lol.
- These questions are reflective of my skillset, strengths, and experiences. I'm doing my undergrad at Cal Poly SLO and did internships at Apple and Microsoft, so these questions are mostly focused on that experience in power electronics, embedded systems hardware, and board layout/design. I'm pretty trash at digital stuff, so those sections will be lacking in comparison.
- I take notes of almost every interview and every question they ask (which I'd recommend you do too!), so this post will just be a reflection of that content.
- I try to include every applicable question, no matter how dumb it may seem. What you might think is a dumb question may actually be a very good question for someone else to study. I'm just not going to include questions specific to me, like project- or experience-specific questions.
- I tried my best to organize questions by topic, but there's tons of overlap between each topic. For example, GPIO/output driver design and implementation can be asked in the context of analog electronics, embedded systems, transmission lines, and power electronics. Some of these questions have just been repeated with or without additional context to solidify the topic while others will just be refer to another section.
- I use a few acronyms in this, so aside from the obvious ones (I, V, R, L, C, Z, KVL/KCL, MOSFET, BJT,), there's an appendix that lists the acronyms.
- Some questions I get more than others, so the more common questions will be bolded.

# How Should You Use this List?

---

Ok that's enough random stuff here's the mega list!

# The Basics/Fundementals
## Basic Circuits
1. What is ohm law? (do people even get this wrong?? Next time I get asked this I'm going to get it wrong on purpose lmao)
2. Conceptually explain ohm's law.
3. What are some basic circuit analyis laws?
4. What are KCL/KVL?
5. Basic KCL/KVL circuit problems.
6. What is the equation to find power?
7. Why is power loss often due to current, not voltage?
8. Draw a voltage divider circuit. What is the voltage divider equation? Derive it.
9. Basic RLC circuit analysis.
10. Basic LPF/BPF/HPF filter analysis.
11. Passive components' parastics.
12. Basic opamp circuit analysis.

## Passive Components
### Resistors
13. Draw the symbol for a resistor.
14. What is resistance?
15. What does resistance depend on?
16. Draw a realistic circuit model for a resistor. What are the parastics and where do they come from?
17. What are some common resistor values?
18. What are some common resistor packages and sizes?
19. What are some common failure modes of a resistor?
20. What are pullup/pulldown resistors? How do you spec them?

### Capacitors
21. Draw the symbol for a capacitor.
22. What is capacitance?
23. What is a dielectric?
24. What is the equation for impedance of a capacitor?
25. What is the differential equation for a capacitor?
26. Does a capacitor have positive of negative reactance?
27. What is the continuity condition? What do inductors resist change to?
28. How does a capacitor behave when initially excited and at DC steady-state?
29. What is an inductors impedance at DC vs infinitely high frequency? Plot this behavior.
30. Draw a realistic circuit model for a capacitor. What are the parastics and where do they come from?
31. What is a capacitor's self resonant frequency?
32. What is a bypass/decoupling capacitor? What about a bulk capacitor? What is the difference?
33. What is an AC coupling capacitor?
34. What sort of signals can capacitors pass through and block? What sort of filter behavior is this?
35. Build a LPF/HPF using a single capacitor.
36. What are some common failure modes of a capacitor?
37. What is the continuity condition? What do capacitors resist change to?

### Inductors
38. Draw the symbol for an inductor.
39. What is inductance?
40. What is the equation for impedance of an inductor?
41. What is the differential equation for an inductor?
42. Does an inductor have positive of negative reactance?
43. What is the continuity condition? What do inductors resist change to?
44. How does an inductor behave when initially excited and at DC steady-state?
45. What is an inductors impedance at DC vs infinitely high frequency? Plot this behavior.
46. What happens when an inductor saturates?
47. Draw a realistic circuit model for an inductor. What are the parastics and where do they come from?
48. What do cores do on inductors?
49. What are typical core materials?
50. What are the main loss mechanisms of an inductor? Where do they arise from?
51. What is ACR? Where does it arise from and how is it impacted by frequency?
52. What sort of signals can inductors pass through and block? What sort of filter behavior is this?
53. Build a LPF/HPF using a single inductor.
54. What are some common failure modes of an inductor?

## Physics/Chemistry
Basic physics/chemistry questions, not including device physics or basic circuit physics which have their own sections.

55. What is a conductor/insulator/semiconductor?
56. What is the skin effect?
57. What is the photoelectric effect?
58. Explain any dielectric losses and how they occur.
59. How does electrcity work?
60. How does lightning work?
61. Which atom bands do electrons move in?

## Semiconductor Devices
### Device Physics
62. What is the difference between P-type semiconductors vs N-type semiconductors?
63. What is a depletion region and how does it form?
64. What materials are typically used for semiconductors?
65. What is doping?
66. How does doping improve performance?
67. What elements are typically used for doping?
68. What is charge mobility?
69. What charge carriers are dominant in P-type semiconductors vs N-type semiconductors?
70. Which charge carriers are more mobile: holes or electrons?
71. Why do N-type semiconductors typically have lower resistance?

### Diodes
72. How does a diode work?
73. What are some use cases of a diode?
74. Draw IV curve.
75. What are the different operation regions?
76. Given a forward/reverse voltage and threshold voltage, determine what operation region it's in.
77. What are the different kinds of diodes?
78. What is the typical forward voltage drop across a diode? Why is it this value? How does it differ for different diodes?
79. How can you build an ideal diode?

### BJTs
80. Draw a NPN/BJT symbol.
81. What are the terminals?
82. What are some use cases of a BJT?
83. What is the difference between a BJT and MOSFET?
84. Draw IV curve.
85. How does it work?
86. What is the difference between an NPN and PNP?
87. What are the different modes of operation?
88. What is current gain/beta?

### MOSFETs
89. Draw a PFET/NFET symbol.
90. What are the terminals?
91. Which two terminals are often connected together and why?
92. What are some use cases of a MOSFET?
93. Why are MOSFETs used so often?
94. What is the difference between a BJT and MOSFET?
95. Draw IV curve for MOSFET
96. How does it work?
97. What is the difference between an N-channel and P-channel?
98. What is the difference between enhancement-mode and dehancement mode?
99. What are the different modes of operation?
100. Given Vgs and Vt, how will the FET behave? What operating region will it be in? Load-line analysis.
101. What is the internal body diode? Where does it come from?
102. Why are MOSFETs sensitive to overvoltage conditions applied at the gate?

---

# Analog Circuits/Electronics
103. Often times, I'm given an unnamed circuit and asked to explain how it works and what type of circuit it is. Here are a few of them I've gotten (and know what they're called):
  - Charge pump
  - Level shifter
  - LDO
  - RLC filters
  - Current mirror

## CMOS
104. What is CMOS? Draw a CMOS buffer.
105. Why are these so often used?
106. What type of MOSFETs are typically used on the high-side? What about the low-side? Why?
107. TTL vs CMOS?
108. What is shoot-through on a CMOS logic gate? How can it be prevented?
109. CMOS efficiency analysis. How does operational frequency impact efficiency? What about logic/swing levels? Rise/fall times?
110. How can you achieve faster slew rates?
111. Design CMOS input protection circuits against ESD/overvoltage events.
112. Draw voltage/current output waveforms for a CMOS buffer connected to a series RC load. Which FETs are conducting during a positive/negative step?

## Amplifiers
113. What is common-mode and differential gain? What are their ideal values?
114. What is the gain-bandwidth product?
115. What determines slew rate and rise/fall time?
116. Pros/cons of fast/slow slew rates?
117. How to bias an amplifier?
118. Why are BJTs more often used for amplifiers than MOSFETs?

### Opamps
119. What is an opamp? How does it work?
120. Draw an opamp. What are the two input terminals?
121. What connections are required to wire up an opamp?
122. What are the three rules of an ideal opamp?
123. Draw an inverting/non-inverting opamp circuit.
124. What is the DC gain of an ompamp?
125. How does an open-loop opamp behave? What type of circuit is it?
126. Why are non-inverting configurations often preferred?

## Filters
127. Draw mag/phase response of a first-order filter.
128. Draw a circuit for a first-order LPF/HPF.
129. What is the dropoff rate of a first-order low-pass filter?
130. What does the bandwidth characterize?
131. What is the 3dB rolloff point? What happens after that? How much of the signal gets through?

## PLL
132. What can you use increase clock frequency?
133. How does a PLL work?
134. What blocks does a PLL have?
135. Draw a block diagram.
136. What happens if your PLL locks too fast or too slow?
137. Why is crushing the clock window bad? How can this impact other circuits that may be connected to the clock?

---

# Power Electronics
138. What type of load (resistive, inductive, capacitive) can a SoC/CPU typically be characterized as?
139. What is the condition for maximum power transfer?
140. Often times on a power rail, there are many capacitors connected to ground. What are these capacitors and why are there so many? Why can you just put one massive capacitor?
141. What is bulk capacitance?
142. What is inductive flyback? When can this be unwanted? When can it be wanted? How can you protect against it?
143. What is PWM? What are its characteristics?
144. What novel semiconductors are being explored for power electronics? What are their tradeoffs?

## General Power Supply
Assume DC-DC for nearly every question unless specified or implied. AC power supplies are rarely brought up during my interviews given their use cases and relevance to my experience.

145. What are some ways to steo up/down voltage? What about for a power rail?
146. Why shouldn't you use a voltage divider to step down voltage for a power rail?
147. When is a voltage divider applicable to step down voltage?
148. Design a power supply.
149. Why is supply voltage overshoot/undershoot often undesired? When can it be tolerated? What type of loads are more sensitive to overshoot/undershoot?
150. What parameters would you want to track in a power supply?
151. When buying/designing a power supply, what specs do you look out for?
152. Why is energy conservation important? How is it applicable?
153. Given three of the following: input voltage, input current, output voltage, and output current, calculate the fourth value that isn't given.

### Power Supply Topologies
154. Name some voltage regulators.
155. **What is the difference between a buck converter vs LDO? What are the tradeoffs?**
156. When can an LDO be more efficient than a buck converter?
157. What type of circuits can convert AC-AC/AC-DC/DC-DC/DC-AC?
158. What is a bridge rectifier? How does it work?
159. In many embedded systems, why are step-down regulators more common than step-up regulators?

### Efficiency
160. What is efficiency in a power supply? How can it be measured? Why is it important?
161. Given two of the following: input power, output power, and efficiency, calculate the third value that isn't given.
162. What happens to any lost power? Why is this bad?
163. What is quiescent current?

### Power Architecture
164. Given a supply spec (input supply voltage, output supply voltage(s), output current(s)), design power architecture.
165. If you need multiple output supplies of different voltages from a single input supply, what are some solutions?
166. If you need multiple output supplies of the same voltage but different noise performance, what are some solutions?
167. If I have a high dropout voltage but require high efficiency and a very clean output supply rail, what are some solutions?
168. What is an intermediate bus converter and when is it needed?
169. What is power sequencing? When/why is it needed? How is the sequence determined? How much time between each rail turning on/off is needed?
170. How can you implement power sequencing?

## Buck Converters
Buck converter board routing is in PCB Design/Layout section. I often refer to the "on state" where the high-side FET is on and the diode/low-side FET is off and the "off state" where the high-side FET is off and the diode/low-side FET is on.

171. What is a buck converter?
172. How does a buck converter work?
173. Draw a circuit for a buck converter.
174. What are some applications?
175. What is a single-input multiple-output (SIMO) buck converter?

### Duty Cycle/Output Voltage
176. What determines the output voltage and why?
177. What is duty cycle?
178. How to calculate duty cycle?
179. What happens at 100% and 0% duty cycle?
180. Given a Vout/Vin ratio, how can the duty cycle be calculated?
181. Given duty cycle and Vin, can you find Vout?
182. What is a DC load-line? What are its tradeoffs?

### Circuit Analysis
183. Draw the waveforms for:
  - Inductor voltage/current
  - Switch node voltage under asynchronous and synchronous rectification
  - Capacitor voltage/current
  - FET gate voltage
  - Diode current/voltage
  - Input supply voltage/current
  - Output load voltage/current
  - Low-side NFET voltage/current if using synchronous rectification
184. What is the purpose of the output inductor/capacitor?
185. What direction does current flow in the inductor/capacitor in the on and off states?
186. Why is the inductor current a linear ramp? What determines this behavior?
187. Why is the output capacitor voltage a linear ramp?
188. When does the output capacitor charge/discharge?
189. What is the inductor polarity?
190. When does the inductor sink/supply current?
191. What is the input capacitor needed? What happens if it's removed?
192. What is voltage/current ripple? (from circuit analysis perspective)
193. What determines inductor current slope?
194. What determines capacitor voltage slope?
195. Why is the diode needed? What if it's removed?
196. If the diode is replaced with an ideal diode, how does it impact performance?
197. What is the switch node voltage potential in the off state?
198. Where is inductor current sourced from in the off state?

### Power Bridge
Many of these questions assume that synchronous rectification is implemented, but some also compare the behavior/performance between a low-side NFET and diode.

199. What type of power bridge is often implemented? Why?
200. Why is the diode needed? What if it's removed?
201. Explain synchronous rectification. What are its pros/cons?
202. NFET vs PFET for high-side FET? What are pros and cons?
203. What are the pros and cons of a symmetrical power bridge?
204. Design a circuit to properly drive a high-side NFET. What considerations must be taken into account?
205. What happens if both the NFET and PFET are on at the same time? How do you avoid this?
206. What happens to the internal body diode in the off state? Draw the switch node voltage waveform.
207. What considerations must be taken given the internal body diode behavior?
208. What can you do to decrease the effect of the internal body diode?

### Efficiency, Ripple, and Switching Frequency
209. Why are buck converters more efficient than LDOs?
210. How to size inductors/capacitors to meet ripple spec?
211. Component-by-component analysis on efficiency and ripple impact.
212. What are some ways to increase efficiency?
213. What are some ways to decrease ripple?
214. How does switching frequency impact efficiency/ripple?
215. What components are most responsible for efficiency losses?
216. Why should ripple be decreased?
217. When does ripple not as matter as much?
218. What limits the switching frequency on the upper and lower ends? Why can't the switching frequency be 1THz or 1Hz?
219. How does switching frequency impact performance?
220. How does dropout voltage impact efficiency, ripple, etc? What about output current an input/output voltage?

### Voltage/Current Sensing
221. How is the output voltage typically sensed? What network is typically used and why is it needed?
222. What happens if the voltage-sensing resistor divider has too high resistance? What if too low?
223. How can the output current be sensed?
224. When should output current be sensed? Before or after the output inductor? Or somewhere else?
225. Which voltages/currents are important to be considered in the control loop and for what purpose?

### PFM Operation
226. What are the different operation modes?
227. What is the difference between discontinuous and continuous operation?
228. What can you do to increase efficiency at light loads?
229. Explain PFM operation.
230. What is the difference between PFM and PWM?
231. How does the ripple compare between PFM and PWM?
232. What happens to the inductor current?
233. Describe the charge/discharge cycle of inductor and capacitor.

### Controls/Stability
234. What does stability refer to in a buck? What happens when a buck is stable/unstable/marginally stable?
235. What type of system is the output LC filter?
236. How do inductor/capacitor values impact stability?
237. Explain different control topologies.
238. What is the difference between voltage-mode and current-mode control? Why are they often both implemented simultaneously?
239. What is slope compensation and when is it needed? (what kinda person asks undergrads this?)
240. Explain subharmonic oscillation.
241. Explain what happens during a load transient event.
242. How is transient response characterized?
243. What is a feedforward capacitor? When is it needed?

### Multiphase Buck Converters
244. What is a multiphase buck converter?
245. What are the pros/cons/tradeoffs vs single-phase buck converters?
246. How do they work and what challenges are presented?
247. When should they be used?
248. How do they increase output current?
249. How do they impact efficiency?
250. How do they impact heat density?
251. How do they impact transient response?

### Designing Buck Converters
252. What components are typically integrated in the IC and which are typically external?
253. How do you select a buck converter IC?
254. How should you spec the output inductor/capacitor? What about input capacitor? What are some considerations?
255. Why is the inductor's saturation current important to consider? What about ACR vs DCR?
256. What determines minumum/maximum L/C?
257. How does the output L/C impact stability?
258. How is the output voltage/current sensed? (more in Voltage/Current Sensing section)
259. Design a buck converter.
260. What's a simple circuit to implement the switching? How can you make it switch with a higher/lower duty cycle based on the feedback voltage?

### Debugging, Validating, and Characterizing Buck Converters
261. What are some failure modes of buck converters? How can they be detected and prevented?
262. What can you do to debug a buck converter that isn't regulating? What could be going wrong?
263. How do you validate/characterize a buck converter? What properties/behaviors do you look out for?
264. How does a buck converter age? What happens to its performance?
265. How does buck performance vary with process, voltage, and temperature (PVT)?

## Boost Converters
Many of the boost converter questions can be similar to bucks, but I barely have any experience with boosts so they aren't covered as much in my interviews.

266. What is a boost converter? How does it boost voltage?
267. How does a boost converter work?
268. Draw a boost converter circuit.
269. What are some applications?
270. Why are they less efficient than buck converters?
271. What is the purpose of the diode? The inductor? The capacitor?
272. What happens to the inductor flyback voltage? Why is this important?

## Low-Dropout Regulators (LDOs)
273. What does LDO stand for? What does "low-dropout" refer to? How can this be an advantage?
274. How does an LDO work?
275. An LDO can often be modeled as a single passive component, what is this passive component?
276. What are some tradeoffs of LDOs compared to other stepdown regulators?
277. If I implement an LDO IC, what additional components are typically needed?
278. What happens to any power losses?
279. LDO efficiency analysis. How does output current and dropout voltage impact efficiency?

## Charge Pumps
280. How does a charge pump work?
281. Draw a circuit for a charge pump.
282. What are they used for?
283. Charge pump efficiency anaylsis.

## Batteries
284. What are some common battery chemistries? Which are rechargable and which are single use? How do you determine which to use?
285. How do you characterize a battery?
286. What are some desirable characteristics in a battery?
287. When buying a battery, what specs do you look out for?
288. How do you measure battery voltage/current?
289. What do you have to monitor in a battery to ensure it's operating safely?
290. How do you charge/discharge a battery safely?

### Lithium Polymer (LiPo)
291. What is the common bettery chemistry used in rechargable consumer electronics? Why?
292. What does LiPo stand for? What does this mean?
293. What are some tradeoffs of a LiPo compared to other batteries?
294. What are some other common Lithium-based battery chemistries? What are their tradeoffs?
295. Can LiPos be used forever? What happens as they age?
296. What materials are LiPos made out of?
297. What is the internal resistance? Why is it important? How does it vary with temperature, aging, frequency, etc?

#### Monitoring
298. What is the typical cell voltage of a LiPo? What are its ranges and why?
299. How does temperature impact LiPo performance?
300. What important characteristics do you want to monitor in a LiPo circuit?
301. How can you determine the state of charge (SoC)? Why is this often so difficult?
302. Why is SoC measurement accuracy so important?
303. When it SoC measurement accuracy more desired? When does it not matter as much?
304. How is capacity measured?
305. How can you determine the health of a LiPo?
306. Why are charging/monitoring ICs important? What can they do?

#### Charging/Discharging
307. What is a LiPo's C rating?
308. Explain the LiPo discharge and charge curve.
309. When do LiPos charge fastest?
310. How fast can you safely charge a LiPo?
311. What happens when you overcharge the battery?
312. How do you charge a LiPo? What steps and precautions are needed?
313. What are the constant-current and constant-voltage procedures in the charge curve?
314. What should you monitor when charging a LiPo?
315. Design a circuit to charge/discharge a LiPo.
316. What is storage charging?
317. Why are charging/monitoring ICs important? What can they do?

#### Safety
318. What are the dangers of Lithium-based battery chemistries? How can these be prevented?
319. Why is it important to properly handle and dispose LiPos?
320. Why is it so dangerous to puncture LiPos?
321. What happens if you overdischarge/overcharge a LiPo?
322. What happens when you short circuit a LiPo?
323. Why is heat such a big concern?

## Inductive Loads
Mostly on DC inductive loads like brushed DC motors and solenoids. I've only been asked a tiny bit of AC inductive loads in the context of brushless motors. Most of these questions arise because of my personal projects with motors and solenoids, only a few roles I've interviewed for actually use motors/solenoids. I was also asked most of these questions during my freshman year before I started taking interview notes and before I had any internship or school experience, so these questions are mostly from memory. Most of these questions will be for motors (since I've been asked mostly about them), but there's a good amount of overlap with solenoids.

324. What is a motor/solenoid? What can they be used for?
325. Describe how a motor/solenoid works.
326. Why are coils often used? What's so special about that configuration?

### Characterization/Behavior
327. When does a motor/solenoid draw the most current?
328. When does a motor/solenoid draw the least amount of current?
329. Describe what happens to a motor/solenoid at steady-state under minimum and maximum current draw?.
330. What type of loads are motors/solenoids?
331. What is flyback voltage?
332. What is back EMF?
333. If I hook up a 12V supply (with infinite current output) to a motor/solenoid with a coil resistance of 1 ohm, will I see 12A of curent being draw? Why? When would I see 12A? When wouldn't I?
334. What is inrush current?
335. When do motors/solenoids draw the most amount of current?
336. Inductors oppose instantaneous changes in current, but motors/solenoid still experience very fast and large inrush currents. Why is this?

### Brushed DC Motors
337. What's the difference between a motor and generator?
338. What's the difference between a motor and solenoid?
339. What are the parts of a motor? Which parts rotate and which parts remain static?
340. Name a few types of motors. What are they each used for?
341. What are linear motors?
342. What sort of motors are typically used for phone's vibration motor?
343. Draw a torque vs RPM curve. What are its implications? Repeat for current and voltage vs torque and RPM.
344. What electrical parameter corresponds to high torque? Why? What about high RPM?
345. How do you spec a motor?
346. Why are motors so noisy? How can you reduce this noise?
347. What is arcing?

#### Brushes
348. What are brushes?
349. What are brushes made out of?
350. What are some concerns about brushes?
351. Why do brushes wear out?
352. When should you replace brushes vs replace the whole motor?
353. How do brushes maintain contact with the commutator?

### Brushless DC (BLDC) Motors
354. How do BLDC motors work?
355. How do you control BLDC motors?
356. How do you control a BLDC motor from a microcontroller? What other components do you need?
357. What are some advantages of brushless vs brushed motors?
358. What are the poles of the motor? How can they impact performance?
359. How do you spec a BLDC motor?

#### Electronic Speed Controllers (ESCs)
360. What is an electronic speed controller (ESC)?
361. Why are ESCs often required for brushless motors?
362. What's the difference between an ESC and a single-phase motor driver? What additional functionality may an ESC offer?
363. What components/subsystems does an ESC have?
364. How do you interface with ESCs? What other components/contollers are needed? How do they communicate?
365. Design an ESC.
366. How do you spec an ESC?

### Stepper Motors
367. What is a stepper motor?
368. How does it work?
369. What are its applications?
370. What are its advantages compared to other types of motors?
371. How do you control a stepper motor from a microcontroller? What other components do you need?
372. How do you spec a stepper motor?
373. How do stepper motors hold a certain position?

### Servo Motors
374. What is a servo motor?
375. How does it work?
376. What are its applications?
377. What are its advantages compared to other types of motors?
378. How do you control a servo motor from a microcontroller? What other components do you need?
379. How do you spec a servo motor?
380. How are servo motors so precise in their movement?

### Single-Phase Inductive Drives
PCB design/layout on inductive drives is in the PCBs section.

381. How do you drive an inductive load?
382. What if you need motor braking?
383. What if you need to drive the motor in both directions?
384. What are the different kinds of motor braking?
385. What sort of protection circuitry do you need?
386. Tradeoffs between different drive circuits: electromechanical relay (EMR), solid-state relay (SSR), MOSFET, BJT, insulated-gate bipolar transistor (IGBT), etc.
387. What optimizations can you do for solenoid drives to increase plunger velocity and cycle rate?
388. If you're using a driver IC, how do you spec it? What properties should you look for?
389. If you're designing a motor/solenoid drive with discrete components, how do you spec your transistors?
390. What limits the switching frequency?
391. How do you increase the switching frequency?

#### Half/H-Bridge
There's a good amount of overlap with the Power Bridge subsection of Buck Converters as well, since the power bridge of a buck is often just a half bridge.

392. Draw an H-bidge ciruit.
393. Draw a half-bidge ciruit.
394. How does a half/H-Bridge work?
395. What's the difference between an H-bridge and half-bridge? What are the tradeoffs?
396. How can you brake a motor using a half-bridge? What about an H-bridge? Which can brake the motor faster? How does this stress the motor?
397. When can you use an asymmetrical half-bridge? When do you need a symmetrical H-bridge?
398. What are the advantages of using a high-side NFET? What additional challenges are presented?
399. Design a circuit to properly drive a high-side NFET. Why is it needed?
400. What happens if you turn both the PFET and NFET on the same side at the same time? How do you prevent this?1

#### Control from Embedded Device
Often times you want to control a big motor/solenoid from a small embedded device. This section focuses on some of the more power electronics side of things while the Embedded Systems section will focus a bit more on the embedded side of things.

401. Design a circuit to drive an inductive load from a microcontroller GPIO.
402. Why would a pulldown resistor be nessary?
403. Why would you want a series resistor between the GPIO and MOSFET gate? What is parasitic oscillation in the context and where can it arise from? What does the series resistor do?
404. Why is isolation important?
405. What sort of isolations would you want?
406. What is galvanic isolation?
407. What are some challenges when using a high-side PFET and a much higher supply voltage to power the motor?
408. Design a circuit to properly drive a high-side PFET. Why is this needed?

### Safety and Monitoring
409. What are some failure modes of motors/solenoids? How can they be avoided?
410. What are some dangers when using motors/solenoid?
411. What properties do you want to measure when using a motor/solenoid?
412. How can these properties be monitored? What sensors/components can you use?
413. How would you alter the behavior of the motor/solenoid based on the observed data?
414. How do you determine how much current a motor/solenoid is drawing?
415. How can you detect the temperature of a motor/solenoid?
416. Which temperatures do you want to/can you measure?
417. Since the motor/solenoid may be moving, you might not always want physical contact between the sensor and motor/solenoid. What are some contactless ways to meaure temperature?
418. How do motors perform as they age?
419. What kind of stress may a motor experience in its lifetime?
420. Motor/solenoids often require many loops in the coils, so the coil wires will be very thin. Motors/solenoids also draw lots of current, possibly more than the coils can support. How do you reconcile this? Do coils on the motors always burn out?

#### Speed/Position
421. When/why would knowing the speed and/or position of a motor/solenoid be useful?
422. How can you measure the RPM of a motor?
423. How can you determine the position of a motor?
424. What is a rotary encoder? How can it be used to measure motor speed?
425. How can you use BEMF to measure motor speed?
426. How can you measure the speed of a solenoid?
427. How can you measure the position of a solenoid?

## Current Sensing
428. How can you to measure current?
429. Why do you want to measure current?
430. How does inductive/magnetic current sensing work? What are its pros and cons?
431. Describe tradeoffs between different current sensing mechanisms.

### Sense Resistor
Sense resistor PCB layout/routing is in PCB Design/Layout section

432. How does a sense resistor work to sense current?
433. What are its pros and cons?
434. How do you spec a current sense resistor? What happens if it's too big/small?
435. Given a range of input currents and ADC input voltage range, find an apporpriate sense resistor value.
436. What is the difference between high-side and low-side current sensing? What are the advantages/disadvantages of each? When do you need to use one vs the other?
437. How can you use drain-source measurements of a MOSFET to determine current? What are the pros and cons of this setup?

### Current Sense Ampliferies (CSA)
438. What is a current sense amplifer (CSA)?
439. When do you need a CSA?
440. What is the difference between a CSA and a regular opamp?
441. How do you spec a CSA?
442. Given a range of input currents, a sense resistor value, and ADC input voltage range, find an apporpriate CSA gain.

## Current/Voltage Protection
443. How/why do you want to protect against overcurrent and/or over/undervoltage conditions?
444. Design a circuit to detect overcurrent and/or over/undervoltage conditions.
445. If an overcurrent and/or over/undervoltage condition is detected, what can you do?
446. How/why do you need to protect a power supply from overcurrent/overvoltage?
447. What happens if you get an over/undervoltage on an embedded system?
448. How can you protect a load from pulling too much current?

---

# Printed Circuit Boards (PCBs)
449. What is a PCB? Name some applications.
450. What are the tradeoffs of PCBs vs solderless breadboards vs soldered breadboards vs just soldering everything together with wires?
451. What are the parasitic elements present on a PCB?

## Stackup
452. What are the layers of a PCB? what are they made of?
453. How to choose how many layers for PCB?
454. How to choose board stackup?
455. What should be routed on each layer? What should be routed on inner layers vs top/bottom layer?
456. Which layer(s) should be the ground layer(s)?
457. Which layers should high-speed signals be routed?
458. Which layters should power planes be on?
459. What components would require a higher layer count?

## Design/Layout/Routing
460. What are some general rule of thumbs for board routing?
461. How do you decide which subsystems go where on a PCB?

### Grounding
462. What is grounding on a PCB? Why is it so important?
463. Describe some basic grounding layout techniques.
464. What is a ground plane? Pros/cons?
465. What are the tradeoffs between using a ground plane vs ground traces to connect all ground potentials?
466. In addition to providing a common reference potential, what are some other functionalities of ground planes?
467. Why can you use your ground plane to shield your signals?
468. Which layers typically have ground planes and why?
469. Why are ground probe points important?
470. When/why should you separate your ground reference potentials?
471. What are some ground layout schemes?
472. What is star grounding?
473. What are the tradeoffs between combining analog, digital, and power grounds vs separating them?
474. What happens if your ground plane potential differs throughout your board?
475. What can be the source of ground plan potential variation?
476. How do you avoid too much variation?
477. How can you design your system to be more resilient against ground disturbances?

### Routing Diff Pairs and High-Speed Signals
Diff pairs and high-speed design from board layout/design perspective, as opposed to signals or SI perspective. Diff pairs are often used for high-speed signals, so there will be a good amount of overlap with the Transmission Lines (TL) section.

478. What are some rules of thumb when routing high-speed signals?
479. Should you put vias through high-speed traces?
480. What shape should these high-speed traces be? Why?
481. What is a differential pair? What are advantages/disadvantages?
482. How should it be routed? What are some layout guidelines that may differ from single-ended high-speed signals?
483. What is serpentining? Why is it important for diff pairs?
484. Describe transmission line components on a PCB.
485. If external termination components are used, where should they be placed? On the source, sink, or somewhere in between?

### Sense Resistor Layout/Routing
486. How do you route a current sense resitors?
487. What is a kelvin connection for a sense resistor? What are the tradeoffs?

### Power Supply Layout/Routing
488. How do you route decoupling and bulk capacitors?
489. What can you do at the board-level to reduce heating of a power supply?
490. Heat sinks
491. Thermal refief

### Inductive Loads Layout/Routing

## Vias
492. What is a via? Why are they needed?
493. What are the different types of vias? What are their tradeoffs?
494. If I need to via between inner layers, what type of vias would I use?
495. When would I want filled vias?
496. When would I want plugged vias?
497. What are some common failure modes of vias?
498. When do I not want to use vias?
499. Can you put a via on a surface-mount pad?

## Materials
500. What material would I want for conduction layers?
501. What materials are often used for the insulation materials?
502. What does "FR4" mean?
503. Why are PCBs often green? What other colors could they be?

## Manufacturing
504. What is the difference between surface-mount and through-hole components? Any tradeoffs?
505. Describe the PCB fab process.  How are PCBs made?
506. Describe the PCB assembly process.
507. What is DRC?
508. How are components soldered on a PCB?
  - How are double-sided components soldered on a PCB?
  - What about mixed assembly boards?
509. What is panelization?
510. What are mousebites?
511. What are fiducials?

## Design for Manufacturing (DFM)
512. How can you design a PCB for manufacturing?
513. What are a few test stations you would see on an electronics manufacturing/assembly line?
514. How are PCBs tested? When does this happen?

### Test Points
515. What are test points? What are their use cases?
516. What are layout guidelines for them?
517. When should/shouldn't you use them?
518. Who/what uses test points?

## EMI Shields

## Debugging and Reworking PCBs
519. What are some common failure modes of a PCB?
520. If there's a short on the PCB, how can it be detected, found, and root caused?

## Electrical Computer-Aided Design (ECAD) Software

---

# Packaging
521. PoP?
522. BGA?
523. Chiplets?
524. 3D chips?
525. Node sizes?
526. Integration?
527. Yield?
528. Wafer?
529. Why can't make big ass chips?
530. Bond wires? What about for high current?
531. Flip chip?

---

# Signals
532. What is the Fourier Transform?
533. Draw spectral content of square wave/pulse train.
534. What is PWM? What are its characteristics?
535. Why are square waves so noisy? What can you do to decrease noise? What about decreasing noise at a particular frequnecy content?
536. What is the highest frequency component of a real vs ideal square wave?
537. If I want to measure a sine wave, what should be the sample rate?

## Differential Signaling
Diff pairs from signals perspective, as opposed to board layout/design or SI perspective.

538. What is a differential pair? How does it work?
539. What is the difference between a single-ended and differential signal?
540. When are they often used?
541. How do they improve noise immunity?
542. What does the common-mode voltage refer to?
543. What does the differential voltage refer to?

---

# Signal Integrity/Power Integrity (SI/PI)
544. What is SI/PI? Why is it important?

## Signal Integrity (SI)
545. How to characterize quality of a signal?
546. Explain ground bounce?
547. What happens if signal rising edge is too slow? Too fast?
548. Why is monotonicity during a signal transition important?
549. What is hysteresis and why is it used?
550. What are setup and hold times? What happens if they're violated?

### Diff Pairs (SI Perspective)
Diff paris from SI perspective, as opposed to board layout/design or signals perspective.

## Power Integrity (PI)
Lots of crossover with Power Electronics section
551. How to characterize quality of power supply?
552. What is power sequencing? Why is it important?

---

# Transmission Lines/High-Speed Design
553. When is transmission line (TL) analysis valid?
554. What is characteristic impedance?
555. What are reflections? Why do I care about them?
556. Draw some signals with/without reflections.
557. What causes reflections?
558. How can I control the characteristic impedance of a TL?
559. What is the difference and pros/cons of series vs parallel termination?
560. What is the difference and pros/cons of source vs sink termination/matching?
561. What are standard termination/characteristic impedances?
562. How does R, L, and C impact characteristic impendace? How does that differ on a microstrip vs coax TL?
563. Describe the parasitic R, L, and C components that impact characteristic impedance.
564. What is impedance matching? Why do I care about it and when should it be used?

---

# Embedded Systems
565. What are some components/subsystems you'd find in an embedded system?
566. What are some examples of embedded systems?
567. What are some common microcontrollers/microprocessors?
568. What is the difference between a microcontroller and a microprocessor?
569. What are the blocks of a microcontroller and microprocessor?
570. How does a microcontroller interact with external peripherals?
571. When do use MCU vs ASIC vs FPGA?
572. What are some common logic levels?

## Communication Buses
573. **What are the three common communication protocols? How do they (I2C, SPI, UART) work?**
574. What is the difference between I2C and SPI?
575. Which is faster? Why?
576. How do different chips talk to each other?

### I2C
577. What is I2C? What does it stand for?
578. **How does it work? Explain its operation.**
579. Why are pullups needed? How do you spec them?
580. How do you increase rise time on I2C?
581. Why would rise time be too slow on I2C?
582. If the logic low state of signal doesn't reach logic-low threshold of device, what could be happening?
583. How many pins/wires are needed? What if I have more slaves?
584. How interface with slaves?
585. How many slaves can there be?
586. When would you need more masters?
587. Explain address/data frames.
588. How can you change a slave's address?
589. Explain NACK/ACK.
590. Explain clock stretching.
591. What are advantages of the open-drain output drivers?
592. What are typical logic levels?
593. What are typical clock speeds?

### SPI
594. What is SPI? What does it stand for?
595. How many slaves can there be?
596. How to interface with slaves?
597. How does daisy-chaining work?
598. What are typical logic levels?
599. What are typical clock speeds?

### UART
600. Oversampling?

## GPIOs
601. What is a GPIO? What does it stand for and what are its use cases?
602. What does "GP" refer to?

### Design/Implementation
A lot on GPIO design is very applicable, more in-depth questions are covered in the CMOS and Amplifiers subsections of Analog Electronics. These questions will just be surface-level that are more applicable in embedded applications.

603. Draw a GPIO circuit. How does it work?
604. What are the two most common types of GPIO implementations? What are their tradeoffs?
605. What does open-drain/push-pull mean?
606. When are pullup/pulldown resistors necessary? How do you size them?
607. What are some typical configurable GPIO settings?
608. What is bus contention?

## Timers
609. What are timers in a microcontroller?
610. What can you do with timers?
611. How do keep track of time accurately in a microncontroller?
612. How do they work? How are they implemented?
613. What are some applications?

## Interrupts
614. If you want to do something right when an external event occurs, what can you do?
615. What are interrupts in a microcontroller?
616. How do they work? How are they implemented? Describe how ISRs work at the hardware and software levels.
617. What are some applications?
618. What can trigger ISRs?
619. What are some limitations of interrupts?
620. What is an interrupt service routine (ISR)?
621. What are some rules of thumb when implementing ISRs?
622. What happens if an ISR gets called while in an ISR? How can this be avoided?

## Peripherals
A lot of the inductive drive questions have good overlap with the Single-Phase Inductive Drives section (Power Electronics > Inductive Loads > Single-Phase Inductive Drives).

623. Draw a circuit to connect a sensor to a microcontroller.
624. Draw a circuit to drive a LED from a microcontroller. What about a high-power LED? What if I want to change the brightness?
625. Draw a circuit to drive a motor from a microcontroller. What if isolation is required? What if I want to change the speed?

## ADC
Most of my ADC/DAC questions have been in the context of embedded systems, not too much on analog design or anything.
626. How does an ADC work?
627. How does a flash ADC work?
628. How does a SAR ADC work?
629. Design an ADC.
630. Reading the ADC from your microcontroller returns some value. Given the value and the ADC supply voltages, convert this reading into a voltage.
631. What is sampling?
632. What is sample and hold?
633. How the the sample voltage maintained throughout the entire sample duration?
634. Design a sample and hold circuit.
635. What are the tradeoffs between super fast/slow sample and hold durations?
636. What are some ADC frontends?

## DAC
Most of my ADC/DAC questions have been in the context of embedded systems, not too much on analog design or anything.
637. How does a DAC work?
638. Design a DAC.

## Data Storage and Memory
639. How does a microcontroller store memory and data?
640. What if I want memory to persist after the microcontroller powers off?
641. What does non-volatile (NV) memory mean?
642. What is ROM?
643. What is an EEPROM?

## Debugging Embedded Systems
644. If a microcontroller isn't booting up, what should you check for?

## Operating Systems
Very brief quesitons on operating systems, usually in the context of embedded systems?

645. What is an operating system?
646. Name some operating systems.
647. When is it needed?
648. What advantages does it have over bare-metal?
649. What is an real-time operating system (RTOS)?

---

# Sensors
650. What is a tranducer?
651. What is sensor fusion?
652. Calibration, validation, testing

## Gyroscope/Acceleromter

## Light

## Camera

## LIDAR

---

# Digital Basics

653. What is the difference between analog and digital?

## Digital Electronics
654. How can you interface two devices with different logic levels?
655. Design a level shifter.
656. Design a single-FET level shifter (passives are allowed).
657. What are setup and hold times? What happens if they're violated?
658. What is the difference between a flip-flop and latch?
659. How does a flip flop/latch work?
660. Design a memeory cell.
661. Why are clocks needed?
662. What happens if a clock is too fast?
663. What is a register?
664. What is metastability?

### Logic Gates (Digital Perspective)
665. Draw a NOT/AND/etc gate symbol.
666. Draw a NOT/AND/etc gate from transistors.
667. Draw the truth table for NOT/AND/etc gate.
668. What is the universal logic gate?
669. Convert some binary/hex/oct/decimal number to a different base.

## Digital Logic
670. What is a truth table?
671. Do the K-map for a given truth table.
672. What is an FSM?
673. What is the difference between a Mealy and Moore FSM?

# VLSI/Computer Architecture

## Computer Architecture
674. Name some computer architectures.
675. What type of computer architectures are often used in smartphones/consumer electronics?
676. What is a CPU?
677. What are some blocks in a CPU?
678. What is an ALU?
679. What is the program counter?
680. How does the contents of the program counter change over time?
681. What is the fetch/execute cycle?
682. Describe the five-stage pipeline.
683. How can you offload tasks from the CPU? What are things you can do in parallel and what are the tradeoffs?
684. What can you do to increase the throughput of a CPU?
685. What is pipelining?
686. What is branch prediction? Describe some branch prediction algorithms.
687. What are interrupts? When can they be used and why are they important? How does their usage often differ from that of embedded systems?
688. What is microarchitecture?
689. What is an instruction set architecture (ISA)?
690. What is the difference between microarchitecture and ISA?
691. What is RISC-V?
692. Does RISC-V specifiy the ISA or microarchitecture?
693. What are some advantages of RISC vs CISC?
694. How do you characterize CPU performance?

## GPU
695. What is a GPU?
696. How does a GPU work?
697. What does the GPU pipeline look like?
698. What's the difference between a GPU and CPU?
699. What optimizations does a GPU have so it vastly outperforms CPUs in graphics tasks? What are the tradeoffs?
700. How do you characterize GPU performance?
701. What are other tasks that GPUs may excel at besides graphics processing? Why?

## System on Chip (SoC)
702. What is a SoC?
703. What are its applications?
704. What are some components on a SoC?
705. What are some tradeoffs between going for a SoC vs all separate components?
706. When designing a system, what other components are needed in addition to a SoC?
707. What is a system on module (SoM)? What is the difference/tradeoffs vs a SoC?
708. What are some tradeoffs of integration?
709. Which blocks of the SoC consume the most power?

## Memory
710. Where can data and program be stored in memory?
711. What is the difference between data and program memory?
712. Explain the memory hierarchy. What are the tradeoffs of each? What type of data is stored in each?
713. What is a cache?
714. What are registers?
715. What is RAM?
716. What does "random access" refer to?
717. What is stack overflow?
718. What is the difference between the stack and the heap?
719. What is a memory management unit (MMU)? What does it do and why is it needed?
720. If I'm operating my computer in space where there can be lots of radiation that can corrupt my memory, what issues can arise? What can I do to be resilient against these effects?

## Power/Performance/Thermals
721. How does clock frequency impact power, performance, and thermals?
722. Why are multiple clock domains needed?
723. How does supply voltage impact power, performance, and thermals?
724. Why are multiple supply voltages needed?
725. How does process, voltage, and temperature (PVT) impact power, performance, and thermals?
726. What are process corners? What do they refer to?
727. What are typical temperature ranges for validation?
728. What can you do to decrease power consumpution?
729. What can you do to throttle performance?
730. What sort of temperature control loops are commonly implemented?
731. What is power, performance, area (PPA)? Describe the tradeoffs.

## RTL
732. Desribe any experience you have with RTL.
733. Design a clock divider.
734. Design an arbiter. What are the different types and their tradeoffs?

## Assembly
735. What is assembly? How does it differ from programming languages like C or Python?
736. Describe what this given program is doing. How long will it take to run? How many times will {some subroutine} get executed?

---

# Coding
737. What sort of coding experience do you have?
738. Do you have coding experience in: (these are the three most I get asked about)
  - C
  - C++
  - Python
739. What are the basic data types?

## Object-Oriented Programming (OOP)
740. What is object-oriented programming?

## Programming Questions

---

# System Architecture
"System architecture" is one of the vaguest engineering words with no meaning. I literally but it on my resume for that reason LOL. These questions are mostly focused on systems at a higher level to achieve some given functionalty.

741. What components does a smartphone/laptop have?
742. Design a system to acheive:
  - Variable LED brighness
  - LED brighness based on ambient brightness to achieve a desired brightness.
  - A security system.
  - A camera system.
  - A tracking system.
743. What is reduncy in a system? When is it preferred? How can you design a system with redundancy?
744. What are some system design constraints in consumer electronics vs automotive vs aerospace/space/defense vs medical devices?

---

# Measurement
745. What tools can you use to measure stuff?
746. How familiar are you with:
  - DMMs
  - Scopes
  - VNAs
  - Power supplies, maybe with more functions like mutliple quadrants or SMUs
747. What sample rate/bandwidth will I need to measure a signal?
748. How should I measure X signal?
749. How can I measure current?
750. What is the difference between bandwidth and sampling rate?
751. What is a VNA?
752. How do I measure resistance/capacitance/inductance/impedance?

## DMMs
753. What is a DMM?
754. What can it measure?
755. What is a DMM's sample rate? Does it matter?
756. When to use DMM vs scope?

## Scopes
757. What is an oscilliscope?
758. How does an oscillicope work?
759. What are triggers on a scope? How do I use them?
760. How do I get current if I'm measuring the voltage across a sense resistor?
761. When would I need multiple scope channels?

### Scope Probes
762. What is a diff probe? When do I need it?
763. What is an active probe? When do I need it?
764. What does the 10x attenuation do on a probe?
765. What is a current probe?
766. Probe input impedance - what should it be any why?
767. When would I want different probe impedance?

---

# General Debug, Testing, and Validation
768. What tools can you use to debug/test/validate stuff?
769. What is your approach to debug/test/validate something?
770. Design a system to test x.
771. How do you debug software?

---

# Non-Technical
A lot of these non-technical questions are the generic interview questions but they still do come up.

## Intro
772. **How are you doing?** (lmao)
773. Introduce yourself.
774. What are your interests/goals?
775. What are your career goals?
776. What are you looking for in this position/company?
777. Why are you interested in this position/company?
778. Do you have other competing interviews/offers/deadlines?
779. When are you available for an internship?
780. Do you require visa assistance?
781. Why don't you want to return to your previous internship/company? (if applicable)
782. What is your desired salary?
783. Are you ok with moving to x for an internship?

## Behavioral
784. What are your strengths/weaknessess?
785. How would your friends and peers describe you?
786. What is your approach to solving hard problems?
787. How do you work under pressure?
788. How do you work in groups?
789. Tell me about a time where you and a peer/coworker disagreed on something. How did you guys reconcile it?
790. Tell me about a time where you needed to juggle many tasks. How did you manage it?
791. What is the perfect job for you?
792. What do you find important in a company?
793. How much do you know about this company/this product?
794. Why should I hire you?
795. How do objectively assess standards of success? How do you meet these?
796. Describe a time where change became a problem. How did you overcome it?
797. Describe a time where you encouraged different perspectives in a group setting.
798. How do you balance school with extracurricular activites?
799. What are your top three skills that contribute to you being a good employee?
800. Describe at ime of new opportunity for improvement.
801. Describe a time where you didn't meet expectations. What happened?
802. How have you taken advantage of diversity (like at school)?
803. Describe a time you admitted to a mistake.

## Technical/Behavioral
Behavioral questions that are more on the technical side or can get more technical, but not technical enough to be placed with the other technical questions.

804. Tell me about a project you're proud of.
805. Tell me about a time you debugged something/solved a difficult problem.
806. What is your approach to debug something?
807. If you need to make a presentation about x, how would you present the data?
808. What coursework have you taken?
809. How familiar are you with:
  - Programming
  - Some specific programming language
  - Some specific software
  - Some technical role/function (validation, characterization, design, verification, architecture, etc)
  - Some technical subject
  - Some specific tools (crimping, soldering, reflow, power tools, etc)
  - Some specific measurement device (DMMs, scopes, VNAs, etc)
810. What sort of coding experience do you have?
811. If you had to give a 20 minute ted talk, what subject would you choose?
812. What is a datasheet?
813. How do you read it?
814. Given this datasheet, find some spec or how something works.

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
- ISA - Instruction Set Architecture
- ISR - Interrupt Service Routing
- L - Inductor/Inductance
- LDO - Low-Dropout Regulator
- LiPo - Lithium Polymer
- MMU - Memory Management Unit
- NV - Non-Volatile
- OOP - Object-Oriented Programming
- PCB - Printed Circuit Board
- PI - Power Integrity
- PPA - Power, Performance, Area
- PVT - Process/Voltage/Temperature
- R - Resistor/Resistance
- RTOS - Real-Time Operating System
- SI - Signal Integrity
- SI/PI - Signal Integrity/Power Integrity
- SoC - State of Charge (for a battery) or System on Chip
- SoM - System on Mhip
- SSR - Solid-State Relay
- TL - Transmission Line
