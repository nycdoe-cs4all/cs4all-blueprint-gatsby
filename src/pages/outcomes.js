import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
const Outcomes = () => (
 <Layout>
    <SEO title="Student Outcomes" />
		<div id="page">
			<article className="light-theme">
				<header>
					<h2><span className="preamble">Student</span> Outcomes</h2>
					<p data-desktop="(Hover over an outcome below to see its depth of knowledge value)">CS students' practice of each concept deepens and expands as meaningful CS units guide them from one perspective to the next.</p>
				</header>

				<div className="article-content">
					<table id="student-outcomes-table">
						<thead>
							<tr>
								<th className="concept">Concept</th>
								<th className="practice">Practice</th>
								<th id="outcomes-abstraction-explorer" className="perspective">
									<a href="/perspectives#perspective-explorer" target="_blank">
										<span className="icon"><svg><use xlinkHref="#icon-explorer" /></svg></span>
										As an Explorer, I can&hellip;
									</a>
								</th>
								<th id="outcomes-abstraction-creator" className="perspective">
									<a href="/perspectives#perspective-creator" target="_blank">
										<span className="icon"><svg><use xlinkHref="#icon-creator" /></svg></span>
										As a Creator, I can&hellip;
									</a>
								</th>
								<th id="outcomes-abstraction-innovator" className="perspective">
									<a href="/perspectives#perspective-innovator" target="_blank">
										<span className="icon"><svg><use xlinkHref="#icon-innovator" /></svg></span>
										As an Innovator, I can&hellip;
									</a>
								</th>
								<th id="outcomes-abstraction-citizen" className="perspective">
									<a href="/perspectives#perspective-citizen" target="_blank">
										<span className="icon"><svg><use xlinkHref="#icon-citizen" /></svg></span>
										As a Citizen, I can&hellip;
									</a>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th className="concept" rowspan="3">
									<a href="/concepts#concept-abstraction" target="_blank">
										Abstraction
										<span className="icon"><svg><use xlinkHref="#icon-abstraction" /></svg></span>
									</a>
								</th>
								<td className="practice">
									<a href="/practices#practice-analyze" target="_blank">
										<h4>
											Analyze
											<span className="icon"><svg><use xlinkHref="#icon-analyze" /></svg></span>
										</h4>
									</a>
								</td>
								<td dataColumn="Explorers can" data-header="outcomes-abstraction-explorer" dataDokNumber="2" dataDokVerb="examining" className="perspective explorers">
									<strong>give examples</strong> of specific patterns in something I can see, do or touch.
								</td>
								<td dataColumn="Creators can" data-header="outcomes-abstraction-creator" dataDokNumber="2" dataDokVerb="examining" className="perspective creators">
									<strong>describe how</strong> I might use patterns to express an idea.
								</td>
								<td dataColumn="Innovators can" data-header="outcomes-abstraction-innovator" dataDokNumber="3" dataDokVerb="interpreting" className="perspective innovators">
									<strong>explain patterns</strong> and characteristics of technology I use everyday.
								</td>
								<td dataColumn="Citizens can" data-header="outcomes-abstraction-citizen" dataDokNumber="4" dataDokVerb="evaluating" className="perspective citizens">
									<strong>explain why</strong> applications are built with components made by different groups of people.
								</td>
							</tr>
							<tr>
								<td className="practice">
									<a href="/practices#practice-prototype" target="_blank">
										<h4>Prototype <span className="icon"><svg><use xlinkHref="#icon-prototype" /></svg></span></h4>
									</a>
								</td>
								<td dataColumn="Explorers can" data-header="outcomes-abstraction-explorer" dataDokNumber="2" dataDokVerb="imagining" className="perspective explorers">
									<strong>describe</strong> different things I tried in order to achieve a goal.
								</td>
								<td dataColumn="Creators can" data-header="outcomes-abstraction-creator" dataDokNumber="3" dataDokVerb="planning" className="perspective creators">
									<strong>explain why</strong> I chose to include the specific components of my prototype over others.
								</td>
								<td dataColumn="Innovators can" data-header="outcomes-abstraction-innovator" dataDokNumber="4" dataDokVerb="designing" className="perspective innovators">
									<strong>explain characteristics</strong> or patterns that informed a function or an interface I created.
								</td>
								<td dataColumn="Citizens can" data-header="outcomes-abstraction-citizen" dataDokNumber="4" dataDokVerb="designing" className="perspective citizens">
									<strong>describe how</strong> components of my prototype come from or can be shared with a community.
								</td>
							</tr>
							<tr>
								<td className="practice">
									<a href="/practices#practice-communicate" target="_blank">
										<h4>
											Communicate
											<span className="icon"><svg><use xlinkHref="#icon-communicate" /></svg></span>
										</h4>
									</a>
								</td>
								<td dataColumn="Explorers can" data-header="outcomes-abstraction-explorer" dataDokNumber="3" dataDokVerb="presenting" className="perspective explorers">
									<strong>explain how</strong> I might help others identify patterns.
								</td>
								<td dataColumn="Creators can" data-header="outcomes-abstraction-creator" dataDokNumber="3" dataDokVerb="presenting" className="perspective creators">
									<strong>explain why</strong> using patterns is necessary when creating with a computer.
								</td>
								<td dataColumn="Innovators can" data-header="outcomes-abstraction-innovator" dataDokNumber="2" dataDokVerb="explaining" className="perspective innovators">
									<strong>explain how</strong> patterns and characteristics guide how people use technology.
								</td>
								<td dataColumn="Citizens can" data-header="outcomes-abstraction-citizen" dataDokNumber="4" dataDokVerb="designing" className="perspective citizens">
									<strong>discuss how</strong> technology developed by a community represents its characteristics.
								</td>
							</tr>
						</tbody>

						<thead>
							<tr>
								<th className="concept">Concept</th>
								<th className="practice">Practice</th>
								<th id="outcomes-algorithm-explorer" className="perspective">
									<a href="/perspectives#perspective-explorer" target="_blank">
										<span className="icon"><svg><use xlinkHref="#icon-explorer" /></svg></span>
										As an Explorer, I can&hellip;
									</a>
								</th>
								<th id="outcomes-algorithm-creator" className="perspective">
									<a href="/perspectives#perspective-creator" target="_blank">
										<span className="icon"><svg><use xlinkHref="#icon-creator" /></svg></span>
										As a Creator, I can&hellip;
									</a>
								</th>
								<th id="outcomes-algorithm-innovator" className="perspective">
									<a href="/perspectives#perspective-innovator" target="_blank">
										<span className="icon"><svg><use xlinkHref="#icon-innovator" /></svg></span>
										As an Innovator, I can&hellip;
									</a>
								</th>
								<th id="outcomes-algorithm-citizen" className="perspective">
									<a href="/perspectives#perspective-citizen" target="_blank">
										<span className="icon"><svg><use xlinkHref="#icon-citizen" /></svg></span>
										As a Citizen, I can&hellip;
									</a>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th className="concept" rowspan="3">
									<a href="/concepts#concept-algorithms" target="_blank">
										Algorithms
										<span className="icon"><svg><use xlinkHref="#icon-algorithm" /></svg></span>
									</a>
								</th>
								<td className="practice">
									<a href="/practices#practice-analyze" target="_blank">
										<h4>
											Analyze
											<span className="icon"><svg><use xlinkHref="#icon-analyze" /></svg></span>
										</h4>
									</a>
								</td>
								<td dataColumn="Explorers can" data-header="outcomes-algorithm-explorer" dataDokNumber="2" dataDokVerb="examining" className="perspective explorers">
									<strong>describe</strong> more than one set of instructions that might complete a task.
								</td>
								<td dataColumn="Creators can" data-header="outcomes-algorithm-creator" dataDokNumber="3" dataDokVerb="interpreting" className="perspective creators">
									<strong>describe how</strong> instructions can have different outputs depending on inputs.
								</td>
								<td dataColumn="Innovators can" data-header="outcomes-algorithm-innovator" dataDokNumber="4" dataDokVerb="evaluating" className="perspective innovators">
									<strong>compare and contrast</strong> instructions for completing a task with algorithms for completing types of tasks.
								</td>
								<td dataColumn="Citizens can" data-header="outcomes-algorithm-citizen" dataDokNumber="4" dataDokVerb="evaluating" className="perspective citizens">
									<strong>explain</strong> the positive and negative impacts of an algorithm’s design on my family or my community.
								</td>
							</tr>
							<tr>
								<td className="practice">
									<a href="/practices#practice-prototype" target="_blank">
										<h4>Prototype <span className="icon"><svg><use xlinkHref="#icon-prototype" /></svg></span></h4>
									</a>
								</td>
								<td dataColumn="Explorers can" data-header="outcomes-algorithm-explorer" dataDokNumber="3" dataDokVerb="planning" className="perspective explorers">
									<strong>explain why</strong> I used specific instructions to complete a task.
								</td>
								<td dataColumn="Creators can" data-header="outcomes-algorithm-creator" dataDokNumber="3" dataDokVerb="planning" className="perspective creators">
									<strong>demonstrate</strong> the benefit of using an event, conditional or loop in my prototype.
								</td>
								<td dataColumn="Innovators can" data-header="outcomes-algorithm-innovator" dataDokNumber="4" dataDokVerb="designing" className="perspective innovators">
									<strong>explain how</strong> a function I prototyped can be used by someone else.
								</td>
								<td dataColumn="Citizens can" data-header="outcomes-algorithm-citizen" dataDokNumber="4" dataDokVerb="designing" className="perspective citizens">
									<strong>suggest changes</strong> to an algorithm that impacts my family or my community.
								</td>
							</tr>
							<tr>
								<td className="practice">
									<a href="/practices#practice-communicate" target="_blank">
										<h4>
											Communicate
											<span className="icon"><svg><use xlinkHref="#icon-communicate" /></svg></span>
										</h4>
									</a>
								</td>
								<td dataColumn="Explorers can" data-header="outcomes-algorithm-explorer" dataDokNumber="4" dataDokVerb="discussing" className="perspective explorers">
									<strong>compare and contrast</strong> my instructions with other instructions that complete the same task.
								</td>
								<td dataColumn="Creators can" data-header="outcomes-algorithm-creator" dataDokNumber="4" dataDokVerb="discussing" className="perspective creators">
									<strong>compare and contrast</strong> how conditionals or loops were used in classmates’ prototypes.
								</td>
								<td dataColumn="Innovators can" data-header="outcomes-algorithm-innovator" dataDokNumber="3" dataDokVerb="presenting" className="perspective innovators">
									<strong>teach</strong> someone the difference between instructions and an algorithm.
								</td>
								<td dataColumn="Citizens can" data-header="outcomes-algorithm-citizen" dataDokNumber="4" dataDokVerb="discussing" className="perspective citizens">
									<strong>research and defend</strong> an opinion about an algorithm’s impacts on my family or community.
								</td>
							</tr>
            </tbody>

						<thead>
							<tr>
								<th className="concept">Concept</th>
								<th className="practice">Practice</th>
								<th id="outcomes-programming-explorer" className="perspective">
									<a href="/perspectives#perspective-explorer" target="_blank">
										<span className="icon"><svg><use xlinkHref="#icon-explorer" /></svg></span>
										As an Explorer, I can&hellip;
									</a>
								</th>
								<th id="outcomes-programming-creator" className="perspective">
									<a href="/perspectives#perspective-creator" target="_blank">
										<span className="icon"><svg><use xlinkHref="#icon-creator" /></svg></span>
										As a Creator, I can&hellip;
									</a>
								</th>
								<th id="outcomes-programming-innovator" className="perspective">
									<a href="/perspectives#perspective-innovator" target="_blank">
										<span className="icon"><svg><use xlinkHref="#icon-innovator" /></svg></span>
										As an Innovator, I can&hellip;
									</a>
								</th>
								<th id="outcomes-programming-citizen" className="perspective">
									<a href="/perspectives#perspective-citizen" target="_blank">
										<span className="icon"><svg><use xlinkHref="#icon-citizen" /></svg></span>
										As a Citizens, I can&hellip;
									</a>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th className="concept" rowspan="3">
									<a href="/concepts#concept-programming" target="_blank">
										Programming
										<span className="icon"><svg><use xlinkHref="#icon-programming" /></svg></span>
									</a>
                </th>
								<td className="practice">
									<a href="/practices#practice-analyze" target="_blank">
										<h4>
											Analyze
											<span className="icon"><svg><use xlinkHref="#icon-analyze" /></svg></span>
										</h4>
									</a>
								</td>
								<td dataColumn="Explorers can" data-header="outcomes-programming-explorer" dataDokNumber="2" dataDokVerb="examining" className="perspective explorers">
									<strong>experiment</strong> with the commands of a programming language.
								</td>
								<td dataColumn="Creators can" data-header="outcomes-programming-creator" dataDokNumber="3" dataDokVerb="interpreting" className="perspective creators">
									<strong>describe</strong> three ways a development environment helps me create a project.
								</td>
								<td dataColumn="Innovators can" data-header="outcomes-programming-innovator" dataDokNumber="2" dataDokVerb="examining" className="perspective innovators">
									<strong>describe</strong> tools and processes needed to collaborate on programming projects.
								</td>
								<td dataColumn="Citizens can" data-header="outcomes-programming-citizen" dataDokNumber="4" dataDokVerb="evaluating" className="perspective citizens">
									<strong>describe</strong> the communities that developed a programming language and why.
								</td>
							</tr>
							<tr>
								<td className="practice">
									<a href="/practices#practice-prototype" target="_blank">
										<h4>Prototype <span className="icon"><svg><use xlinkHref="#icon-prototype" /></svg></span></h4>
									</a>
								</td>
								<td dataColumn="Explorers can" data-header="outcomes-programming-explorer" dataDokNumber="3" dataDokVerb="planning" className="perspective explorers">
									<strong>explain why</strong> I chose specific commands to communicate my instructions.
								</td>
								<td dataColumn="Creators can" data-header="outcomes-programming-creator" dataDokNumber="3" dataDokVerb="planning" className="perspective creators">
									<strong>describe the changes</strong> I made after testing at least three parts of my program.
								</td>
								<td dataColumn="Innovators can" data-header="outcomes-programming-innovator" dataDokNumber="4" dataDokVerb="designing" className="perspective innovators">
									<strong>explain how</strong> I used or remixed someone else’s project in my prototype and give them credit.
								</td>
								<td dataColumn="Citizens can" data-header="outcomes-programming-citizen" dataDokNumber="4" dataDokVerb="designing" className="perspective citizens">
									<strong>describe how</strong> I used community research to make technical decisions in the creation of my prototype.
								</td>
							</tr>
							<tr>
								<td className="practice">
									<a href="/practices#practice-communicate" target="_blank">
										<h4>
											Communicate
											<span className="icon"><svg><use xlinkHref="#icon-communicate" /></svg></span>
										</h4>
									</a>
								</td>
								<td dataColumn="Explorers can" data-header="outcomes-programming-explorer" dataDokNumber="4" dataDokVerb="discussing" className="perspective explorers">
									<strong>discuss</strong> what can and cannot be done with a specific set of commands.
								</td>
								<td dataColumn="Creators can" data-header="outcomes-programming-creator" dataDokNumber="3" dataDokVerb="presenting" className="perspective creators">
									<strong>teach</strong> another person how to use a development environment and the basics of programming.
								</td>
								<td dataColumn="Innovators can" data-header="outcomes-programming-innovator" dataDokNumber="3" dataDokVerb="presenting" className="perspective innovators">
									<strong>present</strong> the challenges, and benefits of using tools to program collaboratively.
								</td>
								<td dataColumn="Citizens can" data-header="outcomes-programming-citizen" dataDokNumber="4" dataDokVerb="discussing" className="perspective citizens">
									<strong>discuss the impact</strong> on my family or community of access to programming skills.
								</td>
							</tr>
						</tbody>

						<thead>
							<tr>
								<th className="concept">Concept</th>
								<th className="practice">Practice</th>
								<th id="outcomes-data-explorer" className="perspective">
									<a href="/perspectives#perspective-explorer" target="_blank">
										<span className="icon"><svg><use xlinkHref="#icon-explorer" /></svg></span>
										As an Explorer, I can&hellip;
									</a>
								</th>
								<th id="outcomes-data-creator" className="perspective">
									<a href="/perspectives#perspective-creator" target="_blank">
										<span className="icon"><svg><use xlinkHref="#icon-creator" /></svg></span>
										As a Creator, I can&hellip;
									</a>
								</th>
								<th id="outcomes-data-innovator" className="perspective">
									<a href="/perspectives#perspective-innovator" target="_blank">
										<span className="icon"><svg><use xlinkHref="#icon-innovator" /></svg></span>
										As an Innovator, I can&hellip;
									</a>
								</th>
								<th id="outcomes-data-citizen" className="perspective">
									<a href="/perspectives#perspective-citizen" target="_blank">
										<span className="icon"><svg><use xlinkHref="#icon-citizen" /></svg></span>
										As a Citizen, I can&hellip;
									</a>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th className="concept" rowspan="3">
									<a href="/concepts#concept-data" target="_blank">
										Data
										<span className="icon"><svg><use xlinkHref="#icon-data" /></svg></span>
									</a>
								</th>
								<td className="practice">
									<a href="/practices#practice-analyze" target="_blank">
										<h4>
											Analyze
											<span className="icon"><svg><use xlinkHref="#icon-analyze" /></svg></span>
										</h4>
									</a>
								</td>
								<td dataColumn="Explorers can" data-header="outcomes-data-explorer" dataDokNumber="2" dataDokVerb="examining" className="perspective explorers">
									<strong>provide examples</strong> of how sensors are used.
								</td>
								<td dataColumn="Creators can" data-header="outcomes-data-creator" dataDokNumber="2" dataDokVerb="examining" className="perspective creators">
									<strong>explain how</strong> a sensor can allow the user to interact with my project.
								</td>
								<td dataColumn="Innovators can" data-header="outcomes-data-innovator" dataDokNumber="3" dataDokVerb="interpreting" className="perspective innovators">
									<strong>explain how</strong> to find, store, and use public or sensor data as part of a larger project.
								</td>
								<td dataColumn="Citizens can" data-header="outcomes-data-citizen" dataDokNumber="4" dataDokVerb="evaluating" className="perspective citizens">
									<strong>discuss the impact</strong> on my family or community of data or sensors in a computing application.
								</td>
							</tr>
							<tr>
								<td className="practice">
									<a href="/practices#practice-prototype" target="_blank">
										<h4>Prototype <span className="icon"><svg><use xlinkHref="#icon-prototype" /></svg></span></h4>
									</a>
								</td>
								<td dataColumn="Explorers can" data-header="outcomes-data-explorer" dataDokNumber="2" dataDokVerb="imagining" className="perspective explorers">
									<strong>select a sensor</strong> among many to achieve a goal and explain why I chose that sensor.
								</td>
								<td dataColumn="Creators can" data-header="outcomes-data-creator" dataDokNumber="3" dataDokVerb="planning" className="perspective creators">
									<strong>describe</strong> at least three reasons I chose a specific sensor or dataset for my prototype.
								</td>
								<td dataColumn="Innovators can" data-header="outcomes-data-innovator" dataDokNumber="4" dataDokVerb="designing" className="perspective innovators">
									<strong>explain how</strong> I transformed data for use in my prototype application or visualization.
								</td>
								<td dataColumn="Citizens can" data-header="outcomes-data-citizen" dataDokNumber="4" dataDokVerb="designing" className="perspective citizens">
									<strong>explain how</strong> my prototype meets or adapts to community needs using data.
								</td>
							</tr>
							<tr>
								<td className="practice">
									<a href="/practices#practice-communicate" target="_blank">
										<h4>
											Communicate
											<span className="icon"><svg><use xlinkHref="#icon-communicate" /></svg></span>
										</h4>
									</a>
								</td>
								<td dataColumn="Explorers can" data-header="outcomes-data-explorer" dataDokNumber="3" dataDokVerb="presenting" className="perspective explorers">
									<strong>present</strong> potential uses of a sensor to others.
								</td>
								<td dataColumn="Creators can" data-header="outcomes-data-creator" dataDokNumber="2" dataDokVerb="explaining" className="perspective creators">
									<strong>compare and contrast</strong> how sensors or datasets were used in classmates’ projects.
								</td>
								<td dataColumn="Innovators can" data-header="outcomes-data-innovator" dataDokNumber="3" dataDokVerb="presenting" className="perspective innovators">
									<strong>present</strong> a persuasive argument using data as evidence in my presentation.
								</td>
								<td dataColumn="Citizens can" data-header="outcomes-data-citizen" dataDokNumber="4" dataDokVerb="discussing" className="perspective citizens">
									<strong>discuss trade-offs</strong> of using technology with sensor and dataset inputs and feedback loops.
								</td>
							</tr>
						</tbody>

						<thead>
							<tr>
								<th className="concept">Concept</th>
								<th className="practice">Practice</th>
								<th id="outcomes-networks-explorer" className="perspective">
									<a href="/perspectives#perspective-explorer" target="_blank">
										<span className="icon"><svg><use xlinkHref="#icon-explorer" /></svg></span>
										Explorers can&hellip;
									</a>
								</th>
								<th id="outcomes-networks-creator" className="perspective">
									<a href="/perspectives#perspective-creator" target="_blank">
										<span className="icon"><svg><use xlinkHref="#icon-creator" /></svg></span>
										Creators&nbsp;can&hellip;
									</a>
								</th>
								<th id="outcomes-networks-innovator" className="perspective">
									<a href="/perspectives#perspective-innovator" target="_blank">
										<span className="icon"><svg><use xlinkHref="#icon-innovator" /></svg></span>
										Innovators can&hellip;
									</a>
								</th>
								<th id="outcomes-networks-citizen" className="perspective">
									<a href="/perspectives#perspective-citizen" target="_blank">
										<span className="icon"><svg><use xlinkHref="#icon-citizen" /></svg></span>
										Citizens can&hellip;
									</a>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th className="concept" rowspan="3">
									<a href="/concepts#concept-networks" target="_blank">
										Networks
										<span className="icon"><svg><use xlinkHref="#icon-network" /></svg></span>
									</a>
								</th>
								<td className="practice">
									<a href="/practices#practice-analyze" target="_blank">
										<h4>
											Analyze
											<span className="icon"><svg><use xlinkHref="#icon-analyze" /></svg></span>
										</h4>
									</a>
								</td>
								<td dataColumn="Explorers can" data-header="outcomes-networks-explorer" dataDokNumber="2" dataDokVerb="examining" className="perspective explorers">
									<strong>identify the hardware</strong> used for computers to connect to the Internet.
								</td>
								<td dataColumn="Creators can" data-header="outcomes-networks-creator" dataDokNumber="2" dataDokVerb="examining" className="perspective creators">
									<strong>explain</strong> what markup languages are and the role they play in creating websites.
								</td>
								<td dataColumn="Innovators can" data-header="outcomes-networks-innovator" dataDokNumber="3" dataDokVerb="interpreting" className="perspective innovators">
									<strong>explain how</strong> consent, privacy and security impact my trust in an application.
								</td>
								<td dataColumn="Citizens can" data-header="outcomes-networks-citizen" dataDokNumber="4" dataDokVerb="evaluating" className="perspective citizens">
									<strong>describe</strong> the groups who develop the protocols that govern the Internet.
								</td>
							</tr>
							<tr>
								<td className="practice">
									<a href="/practices#practice-prototype" target="_blank">
										<h4>Prototype <span className="icon"><svg><use xlinkHref="#icon-prototype" /></svg></span></h4>
									</a>
								</td>
								<td dataColumn="Explorers can" data-header="outcomes-networks-explorer" dataDokNumber="2" dataDokVerb="imagining" className="perspective explorers">
									<strong>explain</strong> the components of an Internet model that I made.
								</td>
								<td dataColumn="Creators can" data-header="outcomes-networks-creator" dataDokNumber="3" dataDokVerb="planning" className="perspective creators">
									<strong>explain how</strong> I used at least three different markup tags to build a website.
								</td>
								<td dataColumn="Innovators can" data-header="outcomes-networks-innovator" dataDokNumber="4" dataDokVerb="designing" className="perspective innovators">
									<strong>describe how</strong> my application makes consent, privacy and security explicit to the user.
								</td>
								<td dataColumn="Citizens can" data-header="outcomes-networks-citizen" dataDokNumber="4" dataDokVerb="designing" className="perspective citizens">
									<strong>explain</strong> three Internet protocols that enable us to build and use a web applications.
								</td>
							</tr>
							<tr>
								<td className="practice">
									<a href="/practices#practice-communicate" target="_blank">
										<h4>
											Communicate
											<span className="icon"><svg><use xlinkHref="#icon-communicate" /></svg></span>
										</h4>
									</a>
								</td>
								<td dataColumn="Explorers can" data-header="outcomes-networks-explorer" dataDokNumber="3" dataDokVerb="presenting" className="perspective explorers">
									<strong>explain how</strong> information might travel over the hardware that connects us to the Internet.
								</td>
								<td dataColumn="Creators can" data-header="outcomes-networks-creator" dataDokNumber="2" dataDokVerb="explaining" className="perspective creators">
									<strong>present</strong> my thoughts, ideas, or interests through a website built using markup.
								</td>
								<td dataColumn="Innovators can" data-header="outcomes-networks-innovator" dataDokNumber="3" dataDokVerb="presenting" className="perspective innovators">
									<strong>discuss how</strong> issues of trust might change the way we interact on the Internet.
								</td>
								<td dataColumn="Citizens can" data-header="outcomes-networks-citizen" dataDokNumber="4" dataDokVerb="discussing" className="perspective citizens">
									<strong>make</strong> a persuasive argument for a new or revised Internet protocol.
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</article>

      <div className="interior-container">
        <div className="exit-menu">
          <ol className="list-unstyled">
            <li><a className="box" href="/what-is-cs" role="button"><span className="box-content">CS Education</span></a></li>
            <li><a className="box" href="/perspectives" role="button"><span className="box-content">Perspectives</span></a></li>
            <li><a className="box" href="/practices" role="button"><span className="box-content">Practices</span></a></li>
            <li><a className="box" href="/concepts" role="button"><span className="box-content">Concepts</span></a></li>
            <li className="current"><a href="">Outcomes</a></li>
          </ol>
        </div>
        <div className="exit-links">
          <div className="box">
            <a className="btn" href="/units" role="button"><span className="preamble">Cool. Let&rsquo;s find a</span> unit <span className="preamble">to teach.</span></a>
          </div>
          <div className="box">
            <a className="btn" href="/resources" role="button"> <span className="preamble">Hold on, I still have questions.</span></a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
export default Outcomes
