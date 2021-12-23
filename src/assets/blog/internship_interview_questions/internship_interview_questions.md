Now that I should hopefully be done with internship interviews for the rest of my life, here's a mega list of almost every interview question I was asked from 150+  interviews at Facebook, Apple, Amazon, Nvidia, Google, Microsoft, Qualcomm, Analog Devices, Texas Instruments, Northrop Grumman, SpaceX, Tesla, etc. This is going to be a massive step up from ["part 1"](https://www.reddit.com/r/ECE/comments/iwmpw7/technical_internship_interview_questions_at_big/) that I posted a while back now that I have more coursework, internships, and interviews under my belt.

This was originally going to be part of the Interviews chapter of my [internship search guide](https://montychoy.com/blog/how_to_land_an_electrical_engineering_internship_part_1_the_internship_mindset), but that post just got WAY too long so I decided to create a separate post just for this repository of questions. That post is still chock-full of interview advice and experiences, so check it out when it's ready! And before you get started, take a guess at how many questions this list has! (bonus points if you comment your guess because I'm also curious about your guesses!)

# Disclaimers and Notes
- These questions were for internships, but there's a lot of overlap with full-time (FT) interviews. In fact, I'm doing FT interviews at the time of writing this and they basically ask the same stuff, there are usually just more FT interviews so they have an opportunity to dive deeper and ask more questions I'd even say some of my internship interviews were harder/more in depth than my FT interviews. If the questions end up being super similar, I may just rename this post instead of making a new one lol.
- These questions are reflective of my skillset, strengths, and experiences. I'm doing my undergrad at Cal Poly SLO and did internships at Apple and Microsoft, so these questions are mostly focused on that experience in power electronics, embedded systems hardware, and board layout/design. I'm pretty trash at digital stuff, so those sections will be lacking in comparison.
- I take notes of almost every interview and every question they ask (which I'd recommend you do too!), so this post will just be a reflection of that content.
- I try to include every applicable question, no matter how dumb it may seem. What you might think is a dumb question may actually be a very good question for someone else to study. I'm just not going to include questions specific to me, like project- or experience-specific questions.
- I tried my best to organize questions by topic, but there's tons of overlap between each topic. For example, GPIO/output driver design and implementation can be asked in the context of analog electronics, embedded systems, transmission lines, and power electronics. Some of these questions have just been repeated with or without additional context to solidify the topic while others will just be refer to another section.
- I use a few acronyms in this, so aside from the obvious ones (I, V, R, L, C, Z, KVL/KCL, MOSFET, BJT,), there's an appendix that lists the acronyms.
- Some questions I get more than others, so the more common questions will be bolded.
- In case you're curious, I can only answer ~95% of these questions on the spot. I can answer ~4% of these questions with a bit of thinking, ~1% would need some refreshing online/my notes, and maybe like 2-3 I honestly have no idea how to answer.

# How Should You Use this List?
I understand that this is a GINORMOUS list and it's very difficult to get everything down. It can be super intimidating, but just focus on the basics and what you're good at and you'll be fine! For example, if you have no clue about PCB design and don't intend on going into PCB design, that section may as well be useless to you (for the sake of interview preparation). No interviewer is going to expect you to know all of this stuff.

I didn't make this list for you to memorize literally everything on it, it's more so a study guide. You remember in English/literature/history class where the teacher would give you a packet of questions to answer while you read the book? That's one way to use this list. As you're working on a project/internship, you can refer to this list on stuff you should learn while doing the project/internship.

Another way to use this list is as a last-minute study guide for interviews. If you have a power electronics interview coming up, it would be super helpful to brush over the power electronics section and make sure you have everything down. If not, this list will point you in the direction on stuff to study up on. I'd also recommend cross-listing this list with the job description. You can get a good idea of what to expect during an interview based on the job description and asking your recruiter/hiring manager. If the job description mentions embedded systems/microcontrollers, buck converters, and PCB design, you might want to brush up on those on this list!

---

Ok that's enough random stuff here's the mega list!

# The Basics/Fundamentals
## Basic Circuits
1. What is ohm law? (do people even get this wrong?? Next time I get asked this I'm going to get it wrong on purpose lmao)
2. Conceptually explain ohm's law.
3. What are some basic circuit analysis laws?
4. What are KCL/KVL?
5. Basic KCL/KVL circuit problems.
6. What is the equation to find power?
7. Why is power loss often due to current, not voltage?
8. Draw a voltage divider circuit. What is the voltage divider equation? Derive it.
9. Basic RLC circuit analysis.
10. Basic LPF/BPF/HPF filter analysis.
11. Passive components' parasitics.
12. Basic opamp circuit analysis.

## Passive Components
### Resistors
13. Draw the symbol for a resistor.
14. What is resistance?
15. What does resistance depend on?
16. Draw a realistic circuit model for a resistor. What are the parasitics and where do they come from?
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
30. Draw a realistic circuit model for a capacitor. What are the parasitics and where do they come from?
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
47. Draw a realistic circuit model for an inductor. What are the parasitics and where do they come from?
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
59. How does electricity work?
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
98. What is the difference between enhancement-mode and depletion mode?
99. What are the different modes of operation?
100. Given Vgs and Vt, how will the FET behave? What operating region will it be in? Load-line analysis.
101. What is the internal body diode? Where does it come from?
102. Why are MOSFETs sensitive to overvoltage conditions applied at the gate?
103. What is W/L ratio? How does it impact FET performance/behavior?

---

# Analog Circuits/Electronics
104. Often times, I'm given an unnamed circuit and asked to explain how it works and what type of circuit it is. Here are a few of them I've gotten (and know what they're called):
  - Charge pump
  - Level shifter
  - LDO
  - RLC filters
  - Current mirror

## CMOS
105. What is CMOS? Draw a CMOS buffer.
106. Why are these so often used?
107. What type of MOSFETs are typically used on the high-side? What about the low-side? Why?
108. TTL vs CMOS?
109. What is shoot-through on a CMOS logic gate? How can it be prevented?
110. CMOS efficiency analysis. How does operational frequency impact efficiency? What about logic/swing levels? Rise/fall times?
111. How can you achieve faster slew rates?
112. Design CMOS input protection circuits against ESD/overvoltage events.
113. Draw voltage/current output waveforms for a CMOS buffer connected to a series RC load. Which FETs are conducting during a positive/negative step?
114. What happens if you swap the high-side PFET and the low-side NFET?

## Amplifiers
115. What is common-mode and differential gain? What are their ideal values?
116. What is the gain-bandwidth product?
117. What determines slew rate and rise/fall time?
118. Pros/cons of fast/slow slew rates?
119. How to bias an amplifier?
120. Why are BJTs more often used for amplifiers than MOSFETs?

### Opamps
121. What is an opamp? How does it work?
122. Draw an opamp. What are the two input terminals?
123. What connections are required to wire up an opamp?
124. What are the three rules of an ideal opamp?
125. Draw an inverting/non-inverting opamp circuit.
126. What is the DC gain of an ompamp?
127. How does an open-loop opamp behave? What type of circuit is it?
128. Why are non-inverting configurations often preferred?

## Filters
129. Draw mag/phase response of a first-order filter.
130. Draw a circuit for a first-order LPF/HPF.
131. What is the dropoff rate of a first-order low-pass filter?
132. What does the bandwidth characterize?
133. What is the 3dB rolloff point? What happens after that? How much of the signal gets through?

## PLL
134. What can you use increase clock frequency?
135. How does a PLL work?
136. What blocks does a PLL have?
137. Draw a block diagram.
138. What happens if your PLL locks too fast or too slow?
139. Why is crushing the clock window bad? How can this impact other circuits that may be connected to the clock?

---

# Power Electronics
140. What type of load (resistive, inductive, capacitive) can a SoC/CPU typically be characterized as?
141. What is the condition for maximum power transfer?
142. Often times on a power rail, there are many capacitors connected to ground. What are these capacitors and why are there so many? Why can you just put one massive capacitor?
143. What is bulk capacitance?
144. What is inductive flyback? When can this be unwanted? When can it be wanted? How can you protect against it?
145. What is PWM? What are its characteristics?
146. What novel semiconductors are being explored for power electronics? What are their tradeoffs?

## General Power Supply
Assume DC-DC for nearly every question unless specified or implied. AC power supplies are rarely brought up during my interviews given their use cases and relevance to my experience.

147. What are some ways to step up/down voltage? What about for a power rail?
148. Why shouldn't you use a voltage divider to step down voltage for a power rail?
149. When is a voltage divider applicable to step down voltage?
150. Design a power supply.
151. Why is supply voltage overshoot/undershoot often undesired? When can it be tolerated? What type of loads are more sensitive to overshoot/undershoot?
152. What parameters would you want to track in a power supply?
153. When buying/designing a power supply, what specs do you look out for?
154. Why is energy conservation important? How is it applicable?
155. Given three of the following: input voltage, input current, output voltage, and output current, calculate the fourth value that isn't given.

### Power Supply Topologies
156. Name some voltage regulators.
157. **What is the difference between a buck converter vs LDO? What are the tradeoffs?**
158. When can an LDO be more efficient than a buck converter?
159. What type of circuits can convert AC-AC/AC-DC/DC-DC/DC-AC?
160. What is a bridge rectifier? How does it work?
161. In many embedded systems, why are step-down regulators more common than step-up regulators?

### Efficiency
162. What is efficiency in a power supply? How can it be measured? Why is it important?
163. Given two of the following: input power, output power, and efficiency, calculate the third value that isn't given.
164. What happens to any lost power? Why is this bad?
165. What is quiescent current?

### Power Architecture
166. Given a supply spec (input supply voltage, output supply voltage(s), output current(s)), design power architecture.
167. If you need multiple output supplies of different voltages from a single input supply, what are some solutions?
168. If you need multiple output supplies of the same voltage but different noise performance, what are some solutions?
169. If I have a high dropout voltage but require high efficiency and a very clean output supply rail, what are some solutions?
170. What is an intermediate bus converter and when is it needed?
171. What is power sequencing? When/why is it needed? How is the sequence determined? How much time between each rail turning on/off is needed?
172. How can you implement power sequencing?

## Buck Converters
Buck converter board routing is in PCB Design/Layout section. I often refer to the "on state" where the high-side FET is on and the diode/low-side FET is off and the "off state" where the high-side FET is off and the diode/low-side FET is on.

173. What is a buck converter?
174. How does a buck converter work?
175. Draw a circuit for a buck converter.
176. What are some applications?
177. What is a single-input multiple-output (SIMO) buck converter?

### Duty Cycle/Output Voltage
178. What determines the output voltage and why?
179. What is duty cycle?
180. How to calculate duty cycle?
181. What happens at 100% and 0% duty cycle?
182. Given a Vout/Vin ratio, how can the duty cycle be calculated?
183. Given duty cycle and Vin, can you find Vout?
184. What is a DC load-line? What are its tradeoffs?

### Circuit Analysis
185. Draw the waveforms for:
  - Inductor voltage/current
  - Switch node voltage under asynchronous and synchronous rectification
  - Capacitor voltage/current
  - FET gate voltage
  - Diode current/voltage
  - Input supply voltage/current
  - Output load voltage/current
  - Low-side NFET voltage/current if using synchronous rectification
186. What is the purpose of the output inductor/capacitor?
187. What direction does current flow in the inductor/capacitor in the on and off states?
188. Why is the inductor current a linear ramp? What determines this behavior?
189. Why is the output capacitor voltage a linear ramp?
190. When does the output capacitor charge/discharge?
191. What is the inductor polarity?
192. When does the inductor sink/supply current?
193. What is the input capacitor needed? What happens if it's removed?
194. What is voltage/current ripple? (from circuit analysis perspective)
195. What determines inductor current slope?
196. What determines capacitor voltage slope?
197. Why is the diode needed? What if it's removed?
198. If the diode is replaced with an ideal diode, how does it impact performance?
199. What is the switch node voltage potential in the off state?
200. Where is inductor current sourced from in the off state?

### Power Bridge
Many of these questions assume that synchronous rectification is implemented, but some also compare the behavior/performance between a low-side NFET and diode.

201. What type of power bridge is often implemented? Why?
202. Why is the diode needed? What if it's removed?
203. Explain synchronous rectification. What are its pros/cons?
204. NFET vs PFET for high-side FET? What are pros and cons?
205. What are the pros and cons of a symmetrical power bridge?
206. Design a circuit to properly drive a high-side NFET. What considerations must be taken into account?
207. What happens if both the NFET and PFET are on at the same time? How do you avoid this?
208. What happens to the internal body diode in the off state? Draw the switch node voltage waveform.
209. What considerations must be taken given the internal body diode behavior?
210. What can you do to decrease the effect of the internal body diode?

### Efficiency, Ripple, and Switching Frequency
211. Why are buck converters more efficient than LDOs?
212. How to size inductors/capacitors to meet ripple spec?
213. Component-by-component analysis on efficiency and ripple impact.
214. What are some ways to increase efficiency?
215. What are some ways to decrease ripple?
216. How does switching frequency impact efficiency/ripple?
217. What components are most responsible for efficiency losses?
218. Why should ripple be decreased?
219. When does ripple not as matter as much?
220. What limits the switching frequency on the upper and lower ends? Why can't the switching frequency be 1THz or 1Hz?
221. How does switching frequency impact performance?
222. How does dropout voltage impact efficiency, ripple, etc? What about output current an input/output voltage?

### Voltage/Current Sensing
223. How is the output voltage typically sensed? What network is typically used and why is it needed?
224. What happens if the voltage-sensing resistor divider has too high resistance? What if too low?
225. How can the output current be sensed?
226. When should output current be sensed? Before or after the output inductor? Or somewhere else?
227. Which voltages/currents are important to be considered in the control loop and for what purpose?

### PFM Operation
228. What are the different operation modes?
229. What is the difference between discontinuous and continuous operation?
230. What can you do to increase efficiency at light loads?
231. Explain PFM operation.
232. What is the difference between PFM and PWM?
233. How does the ripple compare between PFM and PWM?
234. What happens to the inductor current?
235. Describe the charge/discharge cycle of inductor and capacitor.

### Multiphase Buck Converters
236. What is a multiphase buck converter?
237. What are the pros/cons/tradeoffs vs single-phase buck converters?
238. How do they work and what challenges are presented?
239. When should they be used?
240. How do they increase output current?
241. How do they impact efficiency?
242. How do they impact heat density?
243. How do they impact transient response?

### Controls/Stability
244. What does stability refer to in a buck?
245. What happens when a buck is stable/unstable/marginally stable? What about during load transients or noisy events?
246. What type of system is the output LC filter?
247. How do inductor/capacitor values impact stability?
248. Explain what happens during a load transient event.
249. How is transient response characterized?
250. What is a feedforward capacitor? When is it needed?
251. Explain different control topologies.
252. What is the difference between voltage-mode and current-mode control? Why are they often both implemented simultaneously?
253. Explain subharmonic oscillation.
254. When using peak current mode control, what happens when the duty cycle is less than 50% during noise events/load perturbations? What about when the duty cycle is greater than 50%?
255. What is slope compensation and when is it needed? (what kinda person asks undergrads this?)

### Designing Buck Converters
256. What components are typically integrated in the IC and which are typically external?
257. How do you select a buck converter IC?
258. How should you spec the output inductor/capacitor? What about input capacitor? What are some considerations?
259. Why is the inductor's saturation current important to consider? What about ACR vs DCR?
260. What determines minumum/maximum L/C?
261. How does the output L/C impact stability?
262. How is the output voltage/current sensed? (more in Voltage/Current Sensing section)
263. Design a buck converter.
264. What is a simple circuit to implement the switching? How can you make it switch with a higher/lower duty cycle based on the feedback voltage?

### Debugging, Validating, and Characterizing Buck Converters
265. What are some failure modes of buck converters? How can they be detected and prevented?
266. What can you do to debug a buck converter that isn't regulating? What could be going wrong?
267. How do you validate/characterize a buck converter? What properties/behaviors do you look out for?
268. How does a buck converter age? What happens to its performance?
269. How does buck performance vary with process, voltage, and temperature (PVT)?

## Boost Converters
Many of the boost converter questions can be similar to bucks, but I barely have any experience with boosts so they aren't covered as much in my interviews.

270. What is a boost converter? How does it boost voltage?
271. How does a boost converter work?
272. Draw a boost converter circuit.
273. What are some applications?
274. Why are they less efficient than buck converters?
275. What is the purpose of the diode? The inductor? The capacitor?
276. What happens to the inductor flyback voltage? Why is this important?

## Low-Dropout Regulators (LDOs)
277. What does LDO stand for? What does "low-dropout" refer to? How can this be an advantage?
278. How does an LDO work?
279. An LDO can often be modeled as a single passive component, what is this passive component?
280. What are some tradeoffs of LDOs compared to other stepdown regulators?
281. If I implement an LDO IC, what additional components are typically needed?
282. What happens to any power losses?
283. LDO efficiency analysis. How does output current and dropout voltage impact efficiency?

## Charge Pumps
284. How does a charge pump work?
285. How does a charge pump boost voltage?
286. Draw a circuit for a charge pump.
287. What are they used for?
288. Charge pump efficiency analysis.
289. How do you spec a capacitor for a charge pump.

## Batteries
290. What are some common battery chemistries? Which are rechargeable and which are single use? How do you determine which to use?
291. How do you characterize a battery?
292. What are some desirable characteristics in a battery?
293. When buying a battery, what specs do you look out for?
294. How do you measure battery voltage/current?
295. What do you have to monitor in a battery to ensure it's operating safely?
296. How do you charge/discharge a battery safely?

### Lithium Polymer (LiPo)
297. What is the common battery chemistry used in rechargeable consumer electronics? Why?
298. What does LiPo stand for? What does this mean?
299. What are some tradeoffs of a LiPo compared to other batteries?
300. What are some other common Lithium-based battery chemistries? What are their tradeoffs?
301. Can LiPos be used forever? What happens as they age?
302. What materials are LiPos made out of?
303. What is the internal resistance? Why is it important? How does it vary with temperature, aging, frequency, etc?
304. What is a battery management system? What features does it offer?

#### Monitoring
305. What is the typical cell voltage of a LiPo? What are its ranges and why?
306. How does temperature impact LiPo performance?
307. What important characteristics do you want to monitor in a LiPo circuit?
308. How can you determine the state of charge (SoC)? Why is this often so difficult?
309. Why is SoC measurement accuracy so important?
310. When it SoC measurement accuracy more desired? When does it not matter as much?
311. How is capacity measured?
312. How can you determine the health of a LiPo?
313. Why are charging/monitoring ICs important? What can they do?
314. What is cell balancing? Why is it important and when is it needed? What happens if it's not implemented?

#### Charging/Discharging
315. What is a LiPo's C rating?
316. Explain the LiPo discharge and charge curve.
317. When do LiPos charge fastest?
318. How fast can you safely charge a LiPo?
319. What happens when you overcharge the battery?
320. How do you charge a LiPo? What steps and precautions are needed?
321. What are the constant-current and constant-voltage procedures in the charge curve?
322. What should you monitor when charging a LiPo?
323. Design a circuit to charge/discharge a LiPo.
324. What is storage charging?
325. Why are charging/monitoring ICs important? What can they do?
326. What is balance charging? When is it needed?

#### Safety
327. What are the dangers of Lithium-based battery chemistries? How can these be prevented?
328. Why is it important to properly handle and dispose LiPos?
329. Why is it so dangerous to puncture LiPos?
330. What happens if you overdischarge/overcharge a LiPo?
331. What happens when you short circuit a LiPo?
332. Why is heat such a big concern?

## Inductive Loads
Mostly on DC inductive loads like brushed DC motors and solenoids. I've only been asked a tiny bit of AC inductive loads in the context of brushless motors. Most of these questions arise because of my personal projects with motors and solenoids, only a few roles I've interviewed for actually use motors/solenoids. I was also asked most of these questions during my freshman year before I started taking interview notes and before I had any internship or school experience, so these questions are mostly from memory. Most of these questions will be for motors (since I've been asked mostly about them), but there's a good amount of overlap with solenoids.

333. What is a motor/solenoid? What can they be used for?
334. Describe how a motor/solenoid works.
335. Why are coils often used? What is so special about that configuration?

### Characterization/Behavior
336. When does a motor/solenoid draw the most current?
337. When does a motor/solenoid draw the least amount of current?
338. Describe what happens to a motor/solenoid at steady-state under minimum and maximum current draw?.
339. What type of loads are motors/solenoids?
340. What is flyback voltage?
341. What is back EMF?
342. If I hook up a 12V supply (with infinite current output) to a motor/solenoid with a coil resistance of 1 ohm, will I see 12A of curent being draw? Why? When would I see 12A? When wouldn't I?
343. What is inrush current?
344. When do motors/solenoids draw the most amount of current?
345. Inductors oppose instantaneous changes in current, but motors/solenoid still experience very fast and large inrush currents. Why is this?

### Brushed DC Motors
346. What is the difference between a motor and generator?
347. What is the difference between a motor and solenoid?
348. What are the parts of a motor? Which parts rotate and which parts remain static?
349. Name a few types of motors. What are they each used for?
350. What are linear motors?
351. What sort of motors are typically used for phone's vibration motor?
352. Draw a torque vs RPM curve. What are its implications? Repeat for current and voltage vs torque and RPM.
353. What electrical parameter corresponds to high torque? Why? What about high RPM?
354. How do you spec a motor?
355. Why are motors so noisy? How can you reduce this noise?
356. What is arcing?

#### Brushes
357. What are brushes?
358. What are brushes made out of?
359. What are some concerns about brushes?
360. Why do brushes wear out?
361. When should you replace brushes vs replace the whole motor?
362. How do brushes maintain contact with the commutator?

### Brushless DC (BLDC) Motors
363. How do BLDC motors work?
364. How do you control BLDC motors?
365. How do you control a BLDC motor from a microcontroller? What other components do you need?
366. What are some advantages of brushless vs brushed motors?
367. What are the poles of the motor? How can they impact performance?
368. How do you spec a BLDC motor?

#### Electronic Speed Controllers (ESCs)
369. What is an electronic speed controller (ESC)?
370. Why are ESCs often required for brushless motors?
371. What is the difference between an ESC and a single-phase motor driver? What additional functionality may an ESC offer?
372. What components/subsystems does an ESC have?
373. How do you interface with ESCs? What other components/controllers are needed? How do they communicate?
374. Design an ESC.
375. How do you spec an ESC?

### Stepper Motors
376. What is a stepper motor?
377. How does it work?
378. What are its applications?
379. What are its advantages compared to other types of motors?
380. How do you control a stepper motor from a microcontroller? What other components do you need?
381. How do you spec a stepper motor?
382. How do stepper motors hold a certain position?

### Servo Motors
383. What is a servo motor?
384. How does it work?
385. What are its applications?
386. What are its advantages compared to other types of motors?
387. How do you control a servo motor from a microcontroller? What other components do you need?
388. How do you spec a servo motor?
389. How are servo motors so precise in their movement?

### Safety and Monitoring
390. What are some failure modes of motors/solenoids? How can they be avoided?
391. What are some dangers when using motors/solenoid?
392. What properties do you want to measure when using a motor/solenoid?
393. How can these properties be monitored? What sensors/components can you use?
394. How would you alter the behavior of the motor/solenoid based on the observed data?
395. How do you determine how much current a motor/solenoid is drawing?
396. How can you detect the temperature of a motor/solenoid?
397. Which temperatures do you want to/can you measure?
398. Since the motor/solenoid may be moving, you might not always want physical contact between the sensor and motor/solenoid. What are some contactless ways to measure temperature?
399. How do motors perform as they age?
400. What kind of stress may a motor experience in its lifetime?
401. Motor/solenoids often require many loops in the coils, so the coil wires will be very thin. Motors/solenoids also draw lots of current, possibly more than the coils can support. How do you reconcile this? Do coils on the motors always burn out?

#### Speed/Position
402. When/why would knowing the speed and/or position of a motor/solenoid be useful?
403. How can you measure the RPM of a motor?
404. How can you determine the position of a motor?
405. What is a rotary encoder? How can it be used to measure motor speed?
406. How can you measure the speed of a solenoid?
407. How can you measure the position of a solenoid?
408. How can you use BEMF to measure motor/solenoid speed?

## Single-Phase Inductive Drives
PCB design/layout on inductive drives is in the PCBs section.

409. How do you drive an inductive load?
410. What if you need motor braking?
411. What if you need to drive the motor in both directions?
412. What are the different kinds of motor braking?
413. What sort of protection circuitry do you need?
414. Tradeoffs between different drive circuits: electromechanical relay (EMR), solid-state relay (SSR), MOSFET, BJT, insulated-gate bipolar transistor (IGBT), etc.
415. What optimizations can you do for solenoid drives to increase plunger velocity and cycle rate?
416. If you're using a driver IC, how do you spec it? What properties should you look for?
417. If you're designing a motor/solenoid drive with discrete components, how do you spec your transistors?
418. What limits the switching frequency?
419. How do you increase the switching frequency?

### Half/H-Bridge
There's a good amount of overlap with the Power Bridge subsection of Buck Converters as well, since the power bridge of a buck is often just a half bridge.

420. Draw an H-bidge circuit.
421. Draw a half-bidge circuit.
422. How does a half/H-Bridge work?
423. What is the difference between an H-bridge and half-bridge? What are the tradeoffs?
424. How can you brake a motor using a half-bridge? What about an H-bridge? Which can brake the motor faster? How does this stress the motor?
425. When can you use an asymmetrical half-bridge? When do you need a symmetrical H-bridge?
426. What are the advantages of using a high-side NFET? What additional challenges are presented?
427. Design a circuit to properly drive a high-side NFET. Why is it needed?
428. What happens if you turn both the PFET and NFET on the same side at the same time? How do you prevent this?1

### Control from Embedded Device
Often times you want to control a big motor/solenoid from a small embedded device. This section focuses on some of the more power electronics side of things while the Embedded Systems section will focus a bit more on the embedded side of things.

429. Design a circuit to drive an inductive load from a microcontroller GPIO.
430. Why would a pulldown resistor be necessary?
431. Why would you want a series resistor between the GPIO and MOSFET gate? What is parasitic oscillation in the context and where can it arise from? What does the series resistor do?
432. Why is isolation important? What are the tradeoffs?
433. What sort of isolations would you want?
434. What is opto-isolation? What are its tradeoffs?
435. Describe/draw/design an opto-isolation circuit.
436. What is galvanic isolation?
437. What are some challenges when using a high-side PFET and a much higher supply voltage to power the motor?
438. Design a circuit to properly drive a high-side PFET. Why is this needed?

## Current Sensing
439. How can you to measure current?
440. Why do you want to measure current?
441. How does inductive/magnetic current sensing work? What are its pros and cons?
442. Describe tradeoffs between different current sensing mechanisms.

### Sense Resistor
Sense resistor PCB layout/routing is in PCB Design/Layout section

443. How does a sense resistor work to sense current?
444. What are its pros and cons?
445. How do you spec a current sense resistor? What happens if it's too big/small?
446. Given a range of input currents and ADC input voltage range, find an appropriate sense resistor value.
447. What is the difference between high-side and low-side current sensing? What are the advantages/disadvantages of each? When do you need to use one vs the other?
448. How can you use drain-source measurements of a MOSFET to determine current? What are the pros and cons of this setup?

### Current Sense Amplifiers (CSA)
449. What is a current sense amplifier (CSA)?
450. When do you need a CSA?
451. What is the difference between a CSA and a regular opamp?
452. How do you spec a CSA?
453. Given a range of input currents, a sense resistor value, and ADC input voltage range, find an appropriate CSA gain.

## Current/Voltage Protection
454. How/why do you want to protect against overcurrent and/or over/undervoltage conditions?
455. Design a circuit to detect overcurrent and/or over/undervoltage conditions.
456. If an overcurrent and/or over/undervoltage condition is detected, what can you do?
457. How/why do you need to protect a power supply from overcurrent/overvoltage?
458. What happens if you get an over/undervoltage on an embedded system?
459. How can you protect a load from pulling too much current?

---

# Printed Circuit Boards (PCBs)
460. What is a PCB? Name some applications.
461. What are the tradeoffs of PCBs vs solderless breadboards vs soldered breadboards vs just soldering everything together with wires vs ICs?
462. What is the difference between a PCB and IC?
463. What are the parasitic elements present on a PCB?
464. What are the different types of PCBs? What are their tradeoffs and applications?
465. What is a flex PCB? What are its tradeoffs and applications?

## Layers and Materials
466. What are the layers of a PCB? What are they made of?
467. What material would I want for conduction layers?
468. What are the tradeoffs of using gold vs copper on the conduction layers?
469. What materials are often used for the insulation materials? What are their tradeoffs?
470. What does "FR4" mean?
471. Why are PCBs often green? What other colors could they be?
472. What is the layer with text called?
473. What is soldermask?

## Stackup
474. What are the layers of a PCB? what are they made of?
475. How to choose how many layers for PCB?
476. How to choose board stackup?
477. What should be routed on each layer? What should be routed on inner layers vs top/bottom layer?
478. Which layer(s) should be the ground layer(s)?
479. Which layers should high-speed signals be routed?
480. Which layers should power planes be on?
481. What components would require a higher layer count?

## Design/Layout/Routing
482. What are some general rule of thumbs for board routing?
483. How do you decide which subsystems go where on a PCB?

### Grounding
484. What is grounding on a PCB? Why is it so important?
485. Describe some basic grounding layout techniques.
486. What is a ground plane? Pros/cons?
487. What is ground stitching?
488. What are the tradeoffs between using a ground plane vs ground traces to connect all ground potentials?
489. In addition to providing a common reference potential, what are some other functionalities of ground planes?
490. Why can you use your ground plane to shield your signals?
491. Which layers typically have ground planes and why?
492. Why are ground probe points important?
493. When/why should you separate your ground reference potentials?
494. What are some ground layout schemes?
495. What is star grounding?
496. What are the tradeoffs between combining analog, digital, and power grounds vs separating them?
497. What happens if your ground plane potential differs throughout your board?
498. What can be the source of ground plan potential variation?
499. How do you avoid too much variation?
500. How can you design your system to be more resilient against ground disturbances?

### Decoupling/Bypass Capacitors
501. What are decoupling capacitors? When are they needed?
502. What are some common values for decoupling capacitors?
503. What are some rules of thumb when placing and routing decoupling capacitors?
504. Why do decoupling capacitors need to be placed as close to the source package as possible?
505. What signals do you often want to decouple? Why?
506. Often times you may see many decoupling capacitors on a signal. Why are there so many? If they're in parallel, why not just place one massive capacitor?
507. If you have multiple decoupling capacitors, how do you lay them out and route them?
508. What happens if the decoupling capacitors are placed too far from the package?
509. How does parasitic inductance impact decoupling capacitor performance?
510. What are some sources of parasitic inductance that may decrease the effectiveness of a decoupling capacitor?
511. How can the packaging impact the effectiveness?
512. What is a capacitor's self resonant frequency? Why is this important?
513. When should you not use decoupling capacitors?

### High-Speed Signals
Diff pairs and high-speed design from board layout/design perspective, as opposed to signals or SI perspective. Diff pairs are often used for high-speed signals, so there will be a good amount of overlap with the Transmission Lines (TL) section, especially microstrip TLs.

514. What are some rules of thumb when routing high-speed signals?
515. Should you put vias through high-speed traces?
516. What shape should these high-speed traces be? Why?
517. What is serpentining? Why is it important for synchronization?

#### Differential Pairs
518. What is a differential pair? What are some tradeoffs?
519. How should it be routed? What are some layout guidelines that may differ from single-ended high-speed signals?
520. Why is it important that signals for both lines of the diff pair arrive to the source at the same time? What happens if they don't arrive at the same time? How can you ensure that they do arrive at the same time?
521. What is serpentining? Why is it important for diff pairs?

#### Transmission Line Effects
Transmission line (TL) effects on a PCB/microstrip transmission line, also lots of overlap with TL section.

522. Describe transmission line components on a PCB.
523. What are some common characteristic impedance values?
524. How can you change the characteristic impedance of a trace?
525. How does a trace's impedance change with respect to frequency?
526. Describe some sources of reflection on a PCB (any any interfaces). How can these reflections be minimized?
527. How do any interfaces in the transmission path impact signal quality and reflections? What are some interfaces that may introduce distortion?
528. I have a two-layer PCB built but when I get it, the manufacturer made a mistake and the substrate layer is twice as thick as it should be. How does this impact the characteristic impedance? What could I do to fix it?

#### Board-Level Termination
529. If external termination components are used, where should they be placed? On the source, sink, or somewhere in between?
530. How do you route external termination components?
531. When would you need external termination components?
532. Describe some termination networks.
533. What is the difference between series and parallel termination?

### High-Current Layout/Routing
534. What are some rules of thumb when laying out and routing high-current connections?
535. What is a power plane/shapes? Why are they preferred over traces?
536. Are long shapes/traces preferred over short ones? Why?
537. Are skinny shapes/traces preferred over thick ones? Why?
538. What is a thermal relief pad?
539. What is via stitching? When can it it be used?
540. What can you do at the board-level to reduce heating of a component/IC?
541. When should heat sinks be used?

### Power Supply Layout/Routing
Mostly dealing with switching power supplies as they present additional layout and routing challenges. Tons of overlap with the previous High-Current Layout/Routing as power supplies often need to supply lots of current.

#### Power Supply-Level Layout and Placement
542. What are some considerations when deciding where to place the power supply?
543. Why do you want to place your power supply close to the load?
544. What happens if your load tries to draw too much current but there's lots of trace distance between your load and power supply?

#### Component-Level Layout/Routing
545. What are some considerations when laying out power supply components?
546. What are some important nodes of consideration of switch mode power supplies? Why?
547. What are the noisy nodes of a power supply? How should to route these noisy nodes and why? What are other board-level considerations of noisy nodes?
548. How should you route the input capacitor?
549. What if the input capacitor is placed too far?
550. How should you route the switch node of a buck converter?
551. How should you route the inductor of a buck converter?
552. How should you route the sense/feedback network of a buck converter?
553. How do you route decoupling and bulk capacitors?

### Sense Resistor Layout/Routing
554. How do you route a current sense resistors?
555. Why is it important that the traces be short?
556. What if your sense resistor is far from your
557. What is a kelvin connection for a sense resistor? What are the tradeoffs?

## Noise, Interference, and Coupling
558. Why is noise a consideration at the board-level?
559. What is electromagnetic interference (EMI)?
560. What are some sources of EMI on a PCB?
561. Why do I want to avoid radiated EMI?
562. What are some board-level techniques to minimize radiated EMI?
563. What about external sources of EMI? How can they impact a circuit?
564. What are some board-level techniques to protect against EMI?
565. How can signals couple together? How can this be prevented?
566. What are some board-level techniques to minimize coupling?
567. If I have two traces on adjacent layers, one a clock and another a sensitive analog signal. How should I route these signals?
568. What is desense? Why should it be avoided? What are some board-level techniques to avoid it?

### EMI Shields
569. What are EMI shields? Why/when are they needed?
570. How do EMI shields work?
571. What are EMI shields typically connected to? Why?
572. Where should I place EMI shields?
573. What is a faraday cage?

## Vias
574. What is a via? Why are they needed?
575. If I have a signal on two separate layers, how can I connect them together?
576. What are the different types of vias? What are their tradeoffs?
577. If I need to via between inner layers, what type of vias would I use?
578. When would I want filled vias?
579. When would I want plugged vias?
580. What are some common failure modes of vias?
581. When do I not want to use vias?
582. Can you put a via on a surface-mount pad?
583. What happens if you have too many vias?
584. What happens if you have too many vias through a power plane?
585. What is "swiss cheesing" a plane?

## Testing PCBs and Design for Excellence (DFX)

### Testing PCBs
586. What are some tests you can do on a PCB?
587. When testing a PCB, what are you looking for?
588. What are some challenges when testing PCBs?
589. What are some common failure modes of a PCB?
590. How do you test ICs at the board-level?
591. How do you test components at the board level?
592. Given a PCB with x, how would you test it?

### PCB Fabrication
593. Describe the PCB fabrication process. How are PCBs made?
594. What is panelization?
595. What are mousebites?
596. What are fiducials?

### Manufacturing and Assembly
597. Describe the PCB manufacturing and assembly process.
598. What is the difference between surface-mount and through-hole components? Any tradeoffs?
599. How are components soldered on a PCB?
  - How are double-sided components soldered on a PCB? What are some techniques?
  - What about mixed assembly boards?
600. What is pick-and-place?
601. Pick-and-place machines must often traverse repetitive paths for assembly. What are some optimizations?
602. What is reflow?
603. What is wave soldering?

### Automated Testing
604. How are PCBs tested? When does this happen?
605. How are PCBs testing at a large scale?
606. What sort of tests do PCBs undergo on the assembly line? What are the steps?
607. What are a few test stations you would see on an electronics manufacturing/assembly line?
608. What is automated optical inspection (AOI)? What can it capture?
609. What is in-circuit testing (ICT)? What can it capture?
610. What is functional testing (FCT)? What can it capture?
611. What is flying probe testing? What can it capture?
612. What are bed-of-nails test fixtures? What can they capture?

### Design for Manufacturing (DFM)
613. How can you design a PCB for manufacturing?
614. How can you ensure testability of your design at high volumes in automated testing environments?
615. What is component tombstoning? When can it happen? How can it be prevented?

### Design for Testing (DFT)
616. How can you design a PCB for testing?
617. What special board design choices would you do for PCB prototyping?
618. What are ground probes on a PCB? Why are they needed? When should they be used?

### Test Points
619. What are test points? What are their use cases?
620. What are different types of test points?
621. What are layout guidelines for test points?
622. When should/shouldn't you use them?
623. Should you use test points on high-speed or sensitive signals? Why?
624. Who/what uses test points?
625. If you're short on board space, how do you prioritize which signals should have test points?

## Debugging and Making Measurements on PCBs
626. If there's a short on the PCB, how can it be detected, found, and root caused?
627. How do you measure signals on a PCB? What are some considerations?
628. How can test points be used to measure signals?
629. When measuring a signal, what is the ground loop?
630. Why should your ground loop be as small as possible?
631. How can you reduce your ground loop?

## Reworking PCBs
632. What is PCB rework?
633. Describe any rework experience you have.
634. What sort of rework can be done on a PCB?
635. Why may rework be needed?
636. What can you do in your design to improve reworkability?
637. Often times many power components or ground components have thermal relief pads. How does this impact reworkability?

## Electrical Computer-Aided Design (ECAD) Software
638. Do you have experience with Eagle/Altium/KiKad/Cadence Allegro?
639. What experience do you have with ECAD software?
640. Do you have any scripting experience in ECAD?
641. What are design rule checks (DRC)?

---

# Packaging
642. What are some common IC packages? What are their tradeoffs?
643. What are the tradeoffs between surface-mount and through-hole packaging?
644. What are ball grid array (BGA) packages? What are their tradeoffs?
645. What is the difference between the die, wafer, and package?
646. What are node sizes? What does "3nm process" refer to? Are transistors really that small?
647. What are package on package (PoP) chips? What are their tradeoffs?
648. How do PoP chips impact thermals?
649. Which chips are often PoP? Why?
650. Describe any yield considerations when fabricating chips.
651. Why can't ginormous chips, single die be made? What are some challenges and workarounds?
652. What are chiplets?
653. What are 3D chips?
654. What are bond wires?
655. Bond wires are often very thin but sometimes may need to carry lots of current. How do you reconcile this?
656. What are flip chips?
657. Why would the ground potential of a chip vary?

## IC Fabrication
658. How are ICs made?
659. What is a wafer?
660. What is the process from wafer to chip?
661. What is photolithography?
662. What is etching?
663. What is atomic layer deposition?
664. Some feature sizes may be in the nm range, but the wavelengths of light used may not be in that same range. How are these small feature sizes created?

---

# Signals
665. What is the difference between an analog signal and a digital signal?
666. What is the Fourier Transform?
667. What is the difference between the Fourier Transform and Fourier Series?
668. If I want to measure a sine wave, what should be the sample rate?
669. What is the nyquist rate of a signal? Why is it important?
670. What is aliasing?

## Square Waves
671. What is a square wave? What are its properties?
672. What is PWM? What are its characteristics?
673. Draw spectral content of square wave/pulse train.
674. Why are square waves so noisy? What can you do to decrease noise? What about decreasing noise at a particular frequnecy content?
675. What is the highest frequency component of a real vs ideal square wave?
676. What is the rule of thumb for the highest frequency content of a real square wave?
677. What are the tradeoffs of sharper edges on a square wave?
678. How does the frequency content of sharp vs not sharp square waves?

## Differential Signaling
Diff pairs from signals perspective, as opposed to board layout/design or SI perspective.

679. What is a differential pair? How does it work?
680. What is the difference between a single-ended and differential signal?
681. When are they often used?
682. How do they improve noise immunity?
683. What does the common-mode voltage refer to?
684. What does the differential voltage refer to?

---

# Signal Integrity/Power Integrity (SI/PI)
685. What is SI/PI? Why is it important?
686. Do you have any SI/PI simulation experience?

## Signal Integrity (SI)
687. How to characterize quality of a signal?
688. What is ground bounce?
689. What happens if signal rising edge is too slow? Too fast?
690. What is signal monotonicity?
691. Why is monotonicity during a signal transition important?
692. What is hysteresis and why is it used?
693. What are setup and hold times? What happens if they're violated?
694. What is crosstalk?
695. What is jitter?
696. What is ringing?

### Differential Pairs (SI Perspective)
Diff pairs from SI perspective, as opposed to board layout/design or signals perspective.

697. How do you characterize SI of a differential pair?
698. What is an eye digram? What does it represent?
699. What happens of the eye diagram is too small? What is often used to represent this?
700. What is the mask of an eye diagram? What happens if some of the signal enters the mask?
701. What can you do expand the eye?
702. What can you do to ensure the eye stays out of the mask?
703. How is timing jitter and amplitude noise illustrated on an eye diagram?

## Power Integrity (PI)
Lots of crossover with Power Electronics section.

704. How do characterize quality of power supply?
705. What is power supply ripple? Where does it come from?
706. What is power sequencing? Why is it important?
707. What are power supply spikes? Would could be their cause and how can they be captured?

---

# Transmission Lines
More on generic transmission line (TL) and high-speed design theory, as opposed to its implementation/analysis in the context of PCB design which is in its own section: Printed Circuit Boards (PCBs) > Design/Layout/Routing > High-Speed Signals

## TL Theory
708. What is TL theory? Why is it needed?
709. When is TL analysis valid?
710. What is characteristic impedance?
711. What are reflections? Why do I care about them?
712. Draw some signals with/without reflections.
713. What causes reflections?
714. What is impedance matching? Why do I care about it and when should it be used?
715. How does R, L, and C impact characteristic impedance? How does that differ on a microstrip vs coax TL?
716. What is the difference and tradeoffs of series vs parallel termination?
717. What is the difference and tradeoffs of source vs sink termination/matching?

## Ideal vs Real TLs
718. Draw real TL distributed model. What are its components on a real TL? How do they differ between ideal vs real?
719. How can I control the characteristic impedance of a TL?
720. What are some standard termination/characteristic impedances?
721. Describe the parasitic R, L, and C components that impact characteristic impedance.
722. What are sources of loss and distortion in a TL? How can they be minimized or actively compensated for?
723. What are dielectric losses? Where do they come from and how does it vary with frequency?
724. How does a TL's insertion impedance vary with respect to frequency?
725. What is the skin effect? Where does it come up in TLs?
726. What is preemphasis? Why is it used? How can it be implemented?
727. Draw the time-domain and frequency-domain spectrum of a signal with/without preemphasis.

---

# Embedded Systems
728. What are some components/subsystems you'd find in an embedded system?
729. What are some examples of embedded systems?

## Microcontrollers
730. What are some common microcontrollers/microprocessors?
731. What is the difference between a microcontroller and a microprocessor?
732. What are the blocks of a microcontroller and microprocessor?
733. How does a microcontroller interact with external peripherals?
734. When do use MCU vs ASIC vs FPGA?
735. How do you spec an MCU? What specs do you look for?
736. What is a reset signal? What does it do? Why is it useful?

## Communication Buses
737. **What are the three common communication protocols? How do they (I2C, SPI, UART) work?**
738. What is the difference between I2C and SPI?
739. Which is faster? Why?
740. How do different chips talk to each other?
741. What is the difference between asynchronous vs synchronous communication? What are the tradeoffs?
742. What are logic levels?
743. What are some common logic levels?

### I2C
744. What is I2C? What does it stand for?
745. **How does it work? Explain its operation.**

#### Protocol Layer
746. How interface with slaves?
747. How many slaves can there be?
748. When would you need more masters?
749. Explain address/data frames.
750. How can you change a slave's address?
751. Explain NACK/ACK.
752. Explain clock stretching.

#### Physical Layer
753. How many pins/wires are needed? What if I have more slaves?
754. How do I make the connections? Draw it out.
755. Why are pullups needed? How do you spec them?
756. What is bus capacitance?
757. How would bus capacitance change? What impacts it?
758. How do you increase rise time on I2C?
759. Why would rise time be too slow on I2C?
760. If the logic low state of signal doesn't reach logic-low threshold of device, what could be happening?
761. What are advantages of the open-drain output drivers?
762. What are typical logic levels?
763. What are typical clock speeds?

### SPI
764. What is SPI? What does it stand for?
765. How many slaves can there be?
766. How to interface with slaves?
767. How do I make the connections?
768. How does daisy-chaining work?
769. What are typical logic levels?
770. What are typical clock speeds?

### UART
771. What is UART? What does it stand for?
772. How does it work?
773. How many wires does it have?
774. How do I make the connections?
775. What are some standard communication rates?
776. How many devices can talk to each other? What is the direction of communication?
777. Is it synchronous or asynchronous?
778. Since there's no clock, how is data read?
779. What is oversampling? How is it implemented? Why is it needed? What are some common oversample rates for UART?

## GPIOs
780. What is a GPIO? What does it stand for and what are its use cases?
781. What does "GP" refer to?
782. What can I do if I don't have enough GPIOs?

### Design/Implementation
A lot on GPIO design is very applicable, more in-depth questions are covered in the CMOS and Amplifiers subsections of Analog Electronics. These questions will just be surface-level that are more applicable in embedded applications.

783. Draw a GPIO circuit. How does it work?
784. What are the two most common types of GPIO implementations? What are their tradeoffs?
785. What does open-drain/push-pull mean?
786. When are pullup/pulldown resistors necessary? How do you size them?
787. What are some typical configurable GPIO settings?
788. What is bus contention?

## Timers
789. What are timers in a microcontroller?
790. What can you do with timers?
791. How do keep track of time accurately in a microcontroller?
792. How do they work? How are they implemented?
793. What are some applications?

## Interrupts
794. If you want to do something right when an external event occurs, what can you do?
795. What are interrupts in a microcontroller?
796. How do they work? How are they implemented?
797. Describe how ISRs work at the hardware and software levels.
798. What are some applications?
799. What can trigger ISRs?
800. What are some limitations of interrupts?
801. What is an interrupt service routine (ISR)?
802. What are some rules of thumb when implementing ISRs?
803. What happens if an ISR gets called while in an ISR? How can this be avoided?

## Peripherals
A lot of the inductive drive questions have good overlap with the Single-Phase Inductive Drives section (Power Electronics > Inductive Loads > Single-Phase Inductive Drives).

804. Draw a circuit to connect a sensor to a microcontroller.
805. Draw a circuit to connect a button to a microcontroller.
806. Draw a circuit to drive a LED from a microcontroller. What about a high-power LED? What if I want to change the brightness?
807. Draw a circuit to drive a motor from a microcontroller. What if isolation is required? What if I want to change the speed?

## ADC
Most of my ADC/DAC questions have been in the context of embedded systems, not too much on analog design or anything.

808. How does an ADC work?
809. How does a flash ADC work?
810. How does a SAR ADC work?
811. Design an ADC.
812. Reading the ADC from your microcontroller returns some value. Given the value and the ADC supply voltages, convert this reading into a voltage.
813. What is sampling?
814. What is sample and hold?
815. How the the sample voltage maintained throughout the entire sample duration?
816. Design a sample and hold circuit.
817. What are the tradeoffs between super fast/slow sample and hold durations?
818. What are some ADC frontends?
819. What is the precision of an ADC? Calculate it given all the required info.

## DAC
Most of my ADC/DAC questions have been in the context of embedded systems, not too much on analog design or anything.
820. How does a DAC work?
821. Design a DAC.
822. What is the precision of a DAC? Calculate it given all the required info.

## Data Storage and Memory
823. How does a microcontroller store memory and data?
824. If I need to store more memory than what the microcontroller has space for, what can I do?
825. What if I want memory to persist after the microcontroller powers off?
826. What does non-volatile (NV) memory mean?
827. What is ROM?
828. What is an EEPROM?
829. What are registers?
830. Given a register map and the register value in hex, find the value of each register field.

## Debugging Embedded Systems
831. How do you debug a microcontroller? What are some challenges at hardware vs software levels?
832. What is a debugger?
833. What if your IDE/microcontroller doesn't have a hardware debugger?
834. If a microcontroller isn't booting up, what should you check for?

## Operating Systems
Very brief questions on operating systems, usually in the context of embedded systems.

835. What is an operating system?
836. Name some operating systems.
837. When is it needed?
838. What is bare-metal programming?
839. What advantages does it have over bare-metal?
840. What is a real-time operating system (RTOS)?

---

# Sensors
841. What is a sensor?
842. What are some applications of sensors?
843. Name some types of sensors. What are they used for?
844. What is a transducer?
845. What is sensor fusion?

## Gyroscope/Accelerometer
846. What is a gyroscope/accelerometer?
847. What are its applications?
848. What is the difference between a gyroscope and accelerometer? Why are they often used together?
849. How can you determine position/velocity from the accelerometer data?
850. What is an inertial measurement unit (IMU)? What are its tradeoffs?

## Light
851. What can you use to measure light? What does that even mean?
852. What properties of light do you look for? How can those properties be detected.
853. What are the tradeoffs of photoresistors vs photodiodes?
854. What are some applications of light measurement?
855. How can light measurement be used in conjunction with other sensors to determine stuff?

## Camera
856. How does a camera work?
857. What is optical image stabilization (OIS)? What is electronic image stabilization? What is the difference (EIS)? What are each of their applications?
858. How does night mode on smartphone cameras work?
859. What are some techniques to reduce image noise?
860. How does ambient lighting impact camera performance?
861. How do you characterize camera quality?
862. Describe the camera processing pipeline.
863. How does a smartphone take pictures? Describe what happens when you press the button? (and also before you press the button!)

## LiDAR
864. What is LiDAR?
865. How does it work?
866. What are some applications?
867. What is the difference between LiDAR and just a regular camera?
868. How do you map the world 360 degrees all around you?
869. How would you describe the product of a lidar sensor?
870. What are some factors that may impact accuracy?

## Calibration, Validation, and Testing
871. How do you calibrate/validate/test a sensor? Describe what you would want to test and design an experiment.
872. What are some things you want to validate in a sensor?
873. How do you characterize measurement error? What can you do with that information?

---

# Digital Basics
874. What is the difference between analog and digital?
875. What is the difference between big and small endian?
876. What does the MSB and LSB refer to?

## Digital Electronics
877. How can you interface two devices with different logic levels?
878. Design a level shifter.
879. Design a single-FET level shifter (passives are allowed).
880. What are setup and hold times? What happens if they're violated?
881. What is the difference between a flip-flop and latch?
882. How does a flip flop/latch work?
883. Design a memory cell.
884. Why are clocks needed?
885. What happens if a clock is too fast?
886. What is a register?
887. What is metastability?
888. What is a mux?

### Logic Gates (Digital Perspective)
889. Draw a NOT/AND/etc gate symbol.
890. Draw a NOT/AND/etc gate from transistors.
891. Draw the truth table for NOT/AND/etc gate.
892. What is the universal logic gate?
893. Convert some binary/hex/oct/decimal number to a different base.

## Digital Logic
894. What is a truth table?
895. Do the K-map for a given truth table.
896. What is an FSM?
897. What is the difference between a Mealy and Moore FSM?

# VLSI/Computer Architecture

## Computer Architecture
898. Name some computer architectures.
899. What type of computer architectures are often used in smartphones/consumer electronics?
900. What is a CPU?
901. What are some blocks in a CPU?
902. What is an ALU?
903. What is the program counter?
904. How does the contents of the program counter change over time?
905. What is the fetch/execute cycle?
906. Describe the five-stage pipeline.
907. How can you offload tasks from the CPU? What are things you can do in parallel and what are the tradeoffs?
908. What can you do to increase the throughput of a CPU?
909. What is pipelining?
910. What is branch prediction? Describe some branch prediction algorithms.
911. What are interrupts? When can they be used and why are they important? How does their usage often differ from that of embedded systems?
912. What is microarchitecture?
913. What is an instruction set architecture (ISA)?
914. What is the difference between microarchitecture and ISA?
915. What is RISC-V?
916. Does RISC-V specify the ISA or microarchitecture?
917. What are some advantages of RISC vs CISC?
918. How do you characterize CPU performance?

## GPU
919. What is a GPU?
920. How does a GPU work?
921. What does the GPU pipeline look like?
922. What is the difference between a GPU and CPU?
923. What optimizations does a GPU have so it vastly outperforms CPUs in graphics tasks? What are the tradeoffs?
924. How do you characterize GPU performance?
925. What are other tasks that GPUs may excel at besides graphics processing? Why?

## System on Chip (SoC)
926. What is a SoC?
927. What are its applications?
928. What are some components on a SoC?
929. What are some tradeoffs between going for a SoC vs all separate components?
930. When designing a system, what other components are needed in addition to a SoC?
931. What is a system on module (SoM)? What is the difference/tradeoffs vs a SoC?
932. What are some tradeoffs of integration?
933. Which blocks of the SoC consume the most power?

## Memory
934. Where can data and program be stored in memory?
935. What is the difference between data and program memory?
936. Explain the memory hierarchy. What are the tradeoffs of each? What type of data is stored in each?
937. What is a cache?
938. What are registers?
939. What is RAM?
940. What does "random access" refer to?
941. What is stack overflow?
942. What is the difference between the stack and the heap?
943. What is a memory management unit (MMU)? What does it do and why is it needed?
944. If I'm operating my computer in space where there can be lots of radiation that can corrupt my memory, what issues can arise? What can I do to be resilient against these effects?

## Power/Performance/Thermals
945. How does clock frequency impact power, performance, and thermals?
946. Why are multiple clock domains needed?
947. How does supply voltage impact power, performance, and thermals?
948. Why are multiple supply voltages needed?
949. How does process, voltage, and temperature (PVT) impact power, performance, and thermals?
950. What are process corners? What do they refer to?
951. What are typical temperature ranges for validation?
952. What can you do to decrease power consumption?
953. What can you do to throttle performance?
954. What sort of temperature control loops are commonly implemented?
955. What is power, performance, area (PPA)? Describe the tradeoffs.

## RTL
956. Describe any experience you have with RTL.
957. Design a clock divider.
958. Design an arbiter. What are the different types and their tradeoffs?
959. Design a mux.
960. What is a module?
961. How is RTL reused? Why is this important?

## Assembly
962. What is assembly? How does it differ from programming languages like C or Python?
963. Describe what this given program is doing. How long will it take to run? How many times will {some subroutine} get executed?

---

# Coding
964. What sort of coding experience do you have?
965. Do you have coding experience in: (these are the three most I get asked about)
  - C
  - C++
  - Python
966. What are your strongest coding languages? How would you rate yourself in them?
967. What is regex?

## Variables
968. What are the basic variable types?
969. What is the difference between strings and chars? How are strings usually implemented?
970. What does the volatile keyword refer to? When should volatile variables be used?

## Programming Questions
971. Write psuedocode to achieve some given functionality.
972. Walk through how a given program works.
973. Write code to:
  - Reverse a string
  - Parse a file to find and/or modify specific text.
  - Psuedocode API design.
  - Find a substring in a string.
  - Check if a string is a palindrome.

---

# System Architecture
"System architecture" is one of the vaguest engineering words with no meaning. I literally but it on my resume for that reason LOL. These questions are mostly focused on systems at a higher level to achieve some given functionality.

974. What components does a smartphone/laptop have?
975. Design a system to achieve:
  - Variable LED brightness
  - LED brightness based on ambient brightness to achieve a desired brightness.
  - A security system.
  - A camera system.
  - A tracking system.
  - Eye tracking glasses.
976. What is redundancy in a system? When is it preferred? How can you design a system with redundancy?
977. What are some system design constraints in consumer electronics vs automotive vs aerospace/space/defense vs medical devices?

---

# Measurement
978. What tools can you use to measure stuff?
979. How familiar are you with:
  - DMMs
  - Scopes
  - VNAs
  - Power supplies, maybe with more functions like multiple quadrants or SMUs
980. What sample rate/bandwidth will I need to measure a signal?
981. How should I measure X signal?
982. How can I measure current?
983. What is the difference between bandwidth and sampling rate?
984. What is a VNA?
985. How do I measure resistance/capacitance/inductance/impedance?

## DMMs
986. What is a DMM?
987. What can it measure?
988. What is a DMM's sample rate? Does it matter?
989. When to use DMM vs scope?

## Scopes
990. What is an oscilloscope?
991. How does an oscilloscope work?
992. What are triggers on a scope? How do I use them?
993. How do I get current if I'm measuring the voltage across a sense resistor?
994. When would I need multiple scope channels?

### Scope Probes
995. What is a diff probe? When do I need it?
996. What is an active probe? When do I need it?
997. What does the 10x attenuation do on a probe?
998. What is a current probe?
999. Probe input impedance - what should it be any why?
1000. When would I want different probe impedance?

---

# General Debug, Testing, and Validation
This section is just for general debug and testing, some sections may have their own debug, testing, validation, and measurement subsections.

1001. What tools can you use to debug/test/validate stuff?
1002. What is your approach to debug/test/validate something?
1003. Design a system to test x.
1004. How do you debug software?
1005. Often times you need to run tests for days, weeks, or months continuously. How do you ensure these tests run smoothly 24/7 for the entire time? What can you do to protect against power outages?

---

# Non-Technical
A lot of these non-technical questions are the generic interview questions but they still do come up.

## Intro
1006. **How are you doing?** (lmao)
1007. **Introduce yourself.**
1008. What are your interests/goals?
1009. What are your career goals?
1010. What are you looking for in this position/company?
1011. Why are you interested in this position/company?
1012. Do you have other competing interviews/offers/deadlines?
1013. When are you available for an internship?
1014. Do you require visa assistance?
1015. Why don't you want to return to your previous internship/company? (if applicable)
1016. What is your desired salary?
1017. Are you ok with moving to x for an internship?

## Behavioral
1018. What are your strengths/weaknesses?
1019. How would your friends and peers describe you?
1020. What is your approach to solving hard problems?
1021. How do you work under pressure?
1022. How do you work in groups?
1023. Tell me about a time where you and a peer/coworker disagreed on something. How did you guys reconcile it?
1024. Tell me about a time where you needed to juggle many tasks. How did you manage it?
1025. What is the perfect job for you?
1026. What do you find important in a company?
1027. How much do you know about this company/this product?
1028. Why should I hire you?
1029. How do objectively assess standards of success? How do you meet these?
1030. Describe a time where change became a problem. How did you overcome it?
1031. Describe a time where you encouraged different perspectives in a group setting.
1032. How do you balance school with extracurricular activities?
1033. What are your top three skills that contribute to you being a good employee?
1034. Describe a time of new opportunity for improvement.
1035. Describe a time where you didn't meet expectations. What happened?
1036. How have you taken advantage of diversity (like at school)?
1037. Describe a time you admitted to a mistake.

## Technical/Behavioral
Behavioral questions that are more on the technical side or can get more technical, but not technical enough to be placed with the other technical questions.

1038. Tell me about a project you're proud of.
1039. Tell me about a time you debugged something/solved a difficult problem.
1040. What is your approach to debug something?
1041. If you need to make a presentation about x, how would you present the data?
1042. What coursework have you taken?
1043. How familiar are you with:
  - Programming
  - Some specific programming language
  - Some specific software
  - Some technical role/function (validation, characterization, design, verification, architecture, etc)
  - Some technical subject
  - Some specific tools (crimping, soldering, reflow, power tools, etc)
  - Some specific measurement device (DMMs, scopes, VNAs, etc)
1044. What sort of coding experience do you have?
1045. If you had to give a 20 minute ted talk, what subject would you choose?
1046. What is a datasheet?
1047. How do you read it?
1048. Given this datasheet, find some spec or how something works.

---

And that's the list! I hope you found it helpful! If you have any questions, please leave a public comment below! I really love it when people ask questions publicly because then **everyone** can learn from it so please keep that up! I will likely be updating this list as I get more questions/rescan my interview notebooks (At the time of writing this for the first time, this list has 1048 questions).

---

# Appendix
- AOI - Automated Optical Inspection
- BGA - Ball Grid Array
- BLDC - Brushless DC Motor
- C - Capacitor/Capacitance or the programming language
- CSA - Current Sense Amplifier
- DFM - Design for Manufacturing
- DFT - Design for Testing
- DFX - Design for Excellence
- DRC - Design Rule Checking
- ECAD - Electrical Computer-Aided Design
- EIS - Electronic Image Stabilization
- EMI - Electromagnetic Interference
- EMR - Electromechanical Relay
- ESC - Electronic Speed Controller
- FCT - Functional Testing
- FTE/FT - Full-Time Engineer/Full-Time
- ICT - In-Circuit Testing
- IGBT - Insulated-Gate Bipolar Transistor
- IMU - Inertial Measurement Unit
- ISA - Instruction Set Architecture
- ISR - Interrupt Service Routing
- L - Inductor/Inductance
- LDO - Low-Dropout Regulator
- LiPo - Lithium Polymer
- MMU - Memory Management Unit
- NV - Non-Volatile
- OIS - Optical Image Stabilization
- OOP - Object-Oriented Programming
- PoP - Package on Package
- PCB - Printed Circuit Board
- PI - Power Integrity
- PPA - Power, Performance, Area
- PVT - Process/Voltage/Temperature
- R - Resistor/Resistance
- RTOS - Real-Time Operating System
- SI - Signal Integrity
- SI/PI - Signal Integrity/Power Integrity
- SoC - State of Charge (for a battery) or System on Chip
- SoM - System on Module
- SSR - Solid-State Relay
- TL - Transmission Line
