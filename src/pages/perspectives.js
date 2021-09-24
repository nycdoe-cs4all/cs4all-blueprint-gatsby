/**
 * A deeper dive into the CS Perspectives with examples
 */

/* Imports */
import React from "react"
import Layout from "../components/layout"
import Accordion from "../components/accordion"
import Seo from "../components/seo"

import Explorer from "../assets/svg/icon-explorer.svg"
import Creator from "../assets/svg/icon-creator.svg"
import Innovator from "../assets/svg/icon-innovator.svg"
import Citizen from "../assets/svg/icon-citizen.svg"

/* Component */
class Perspectives extends React.Component {
  /* Constructor */
  constructor(props) {
    super(props)
    this.handleState = this.handleState.bind(this)
    if (typeof window !== "undefined") {
      if (window.location.hash) {
        this.state = { state: window.location.href.split("#")[1] }
      } else {
        this.state = { state: "none" }
      }
    } else {
      this.state = { state: "none" }
    }
  }

  /* Handles state for open accordion */
  handleState(state) {
    this.setState({ state })
  }

  /* Display component */
  render() {
    return (
      <Layout>
        <Seo title="Computer Science Perspectives" />
        <div id="page">
          <article className="blue-theme">
            <header>
              <h2>
                <span className="preamble">Computer Science</span> Perspectives
              </h2>
              <h3>
                How students progress in their understanding of computing
                concepts and practices.
              </h3>
            </header>

            <div className="article-content">
              <p className="sub-head">
                Meaningful computer science units help students fully embrace a
                perspective such that they are ready and interested in
                progressing to the next.
              </p>
            </div>

            <Accordion
              state={this.state.state}
              changeState={this.handleState}
              name="perspective-explorer"
              icon={<Explorer />}
              header="Explorer"
              statement="At the beginning of their journey, students learn CS concepts and practices by manipulating physical models and working in guided digital environments."
              content="
                <div class='introduction col-sm-6 col-md-7'>
                  <p class='headline'>&ldquo;I can play with computing practices and concepts.&rdquo;</p>
                  <ul class='examples'>
                    <li>Second graders Grismely and Angie programmed a robot to complete a maze by trying different solutions and talking about when the robot didn't do what they expected.</li>
                    <li>Sixth grader Julio made a funny animation about a polar bear meeting a dinosaur using only 10 blocks in the Scratch programming environment. This was the first part of a unit about using Scratch to create a public service announcement for his school community.</li>
                    <li>Ninth grader Annabella used Python to look for patterns and trends in presidential election data from the past 10 years. This was the first part of a unit about evaluating how computing could impact our electoral process.</li>
                  </ul>
                  <p>Educators teaching Kindergarten to second grade should focus on developing their students' confidence as Explorers by providing them with defined tasks that allow students to tinker, try things, and persist until they find a possible solution. The goal of this exploration is to help students build familiarity and facility with CS so they can progress to becoming Creators who are able to start defining the ideas they would like to express through CS.</p>
                  <p>Educators teaching third to fifth grade, middle school and high school students should also utilize this perspective to begin meaningful CS units that aim to help students embrace the Creator, Innovator, Citizen perspectives. Exploring early in a unit can help students with little or no prior experience gain confidence before learning CS from more advanced perspectives.</p>
                </div>
                <div class='case-study col-sm-6 col-md-5'>
                  <a href='http://alpha.editor.p5js.org/KCintheNYC/sketches/Hyvg4Kw8Z' target='_blank' rel='noreferrer'><img src='/static/explorer-robot.jpg' alt='Link to sample animation by Kara' /></a>
                  <h4>Exploring Animation</h4>
                  <p>Kara works on partnerships for Computer Science for All (CS4All) in NYC. She is an economist by training who loves finding ways to engage young women in STEM.</p>
                  <p>She didn't know computer science when she joined the CS4All team so she attended teacher professional development to explore CS. During PD she learned a creative coding programming language that allowed her to draw fun sketches on the screen with code. In the PD participants were asked to draw a robot by hand using only simple shapes. She enjoyed seeing everyone's design and trying to code her robot.</p>
                  <p>Eventually she was not only able to draw the robot on the screen with code, but to also animate it so it moved when the mouse was clicked. When she tried to sketch a complicated design with repeated features, she discovered the value of being able to use code to repeat functions instead of having to do it by hand.</p>
                </div>
              "
            />

            <Accordion
              state={this.state.state}
              changeState={this.handleState}
              name="perspective-creator"
              icon={<Creator />}
              header="Creator"
              statement="Continuing on their journey, students excited by the possibilities of computing can use friendly, open-ended physical and digital tools to represent their ideas, thoughts, or interests."
              content="
                <div class='introduction col-sm-7'>
                  <p class='headline'>&ldquo;I can express myself with computing practices and concepts&rdquo;</p>
                  <ul class='examples'>
                    <li>A group of fourth graders create an interactive Scratch project that helps to introduce new students to the school, providing information about key locations and resources throughout the building.</li>
                    <li>Seventh grader Umaima programmed a micro:bit to pick a random number and used it to choose the winning tickets at a school event's raffle.</li>
                    <li>Ninth grader Nora used Python and conditionals to create choose-your-own-adventure story with different outcomes depending on the decisions made by the user. This was part of a unit to create an web application that improved upon an existing product based on the student's’ research.</li>
                  </ul>
                  <p>Educators teaching third to fifth grade students should focus on developing their students' confidence as Creators by providing them with opportunities to analyze computing projects, imagine how they might express themselves through computing, and build prototypes of their ideas. The goal of these opportunities for expression is to help students develop a sense of self-efficacy with CS that will enable them to be Innovators who can build on or incorporate the work of the larger CS community.  Educators teaching from this perspective should scaffold instruction with elements of the Explorer perspective.</p>
                  <p>Educators teaching middle and high school students should also utilize the Creator perspective to introduce or provide structure to students learning CS as Innovators or Citizens. Both the Innovator and Citizen perspectives ask students to consider how they might bring their ideas into existing systems, so educators should ensure that students are confident expressing their ideas before asking them to learn as Innovators and Citizens.</p>
                </div>
                <div class='case-study col-sm-5'>
                  <a href='http://ariellehein.com/projects.html' target='_blank' rel='noreferrer'><img src='/static/perspective-arielle.jpg' alt='Link to bio of Arielle Hein' /></a>
                  <h4>Creating More Hours in the Day(light)</h4>
                  <p>Arielle is a visual designer exploring the effects of natural light on humans. She assembled a wearable light sensor to track her own exposure to the sun (sort of like a FitBit for sunlight).</p>
                  <p>But she wasn't content merely to measure the Sun; she wanted to celebrate it, like the ancient Greeks did Helios. So she created a web application that retrieved sunrise and sunset times from an online source, and mapped them to the movement of a clock prototype. She found that clock, which began its rotation upon sunrise and completed it at sunset, truly inspired her to spend more time in the sun, and soon made a physical version that hangs on the wall, reminding its observers to make the most of the daylight. </p>
                </div>
              "
            />

            <Accordion
              state={this.state.state}
              changeState={this.handleState}
              name="perspective-innovator"
              icon={<Innovator />}
              header="Innovator"
              statement="Innovators build and share ideas, thoughts, and interests with others by contributing to or building on other projects."
              content="
                <div class='introduction col-sm-7'>
                  <p class='headline'>&ldquo;I can connect to the work of others using computing practices and concepts.&rdquo;</p>
                  <ul class='examples'>
                    <li>An eighth grade student creates a Scratch Studio and then 'interviews' other Scratchers to 'hire' them to make a Scratch project with the goal of animating a comic book that she designed and wrote.</li>
                    <li>Tenth grader Stephanie utilized an interactive map showing average temperature by year in a website that she created to discuss the impacts of humans on the environment.</li>
                    <li>A group of high schoolers building an app to help people struggling from addiction used a Javascript calendar library to create a way for their users to plan out new routines and document their progress.</li>
                  </ul>
                  <p>Educators teaching middle school and career and technical high school should focus on developing their students' confidence as Innovators by challenging them to consider how their work connects to, builds on, or can incorporate the work of individuals in the public, private, and open-source domains. The goal of challenging students in this way is to help them see themselves as part of the larger CS community. These connections can mean analyzing data from government agencies, utilizing software libraries from open source organizations, or communicating their projects to professionals visiting the classroom. Educators teaching from this perspective should scaffold instruction with elements of the Explorer and Creator perspectives.</p>
                  <p>Educators teaching general education high school can use the Innovator perspective to introduce students to connecting their work to the world outside the classroom before asking students to think like Citizens considering how computing intersects with the social systems important to them.</p>
                </div>
                <div class='case-study col-sm-5'>
                  <a href='https://tonejs.github.io/' target='_blank' rel='noreferrer'><img src='/static/perspective-innovator.jpg' alt='Link to Tone.js library' /></a>
                  <h4>Musical Innovation</h4>
                  <p>Yotam was studying jazz piano in college when he stumbled upon a place at his college where people were making music with technology. He was inspired to earn a second degree in computer science so he too could make music with computers. Yotam wanted to make it easy for musicians of all types to make music with computers so he decided to write music-making software that could run in a web browser.</p>
                  <p>Every web browser has software built-in called Web Audio, but it’s hard for most people to use. Yotam wanted something that would make sense to musicians as well as programmers, so he wrote new software called Tone.js that uses structure and language that would be familiar to the different types of people he knew wanted to make music on the Internet.</p>
                </div>
              "
            />

            <Accordion
              state={this.state.state}
              changeState={this.handleState}
              name="perspective-citizen"
              icon={<Citizen />}
              header="Citizen"
              statement="Citizens explore the systemic impact and application of computing by studying the current and historical context of the field."
              content="
                <div class='introduction col-sm-7'>
                  <p class='headline'>&ldquo;I can question how computing practices and concepts affect my community.&rdquo;</p>
                  <ul class='examples'>
                    <li>Isabel analyzed the NYC high school assignment algorithm and prototyped her own version before sharing with her class how she thinks it might be improved to make school placement more equitable.</li>
                    <li>Jason and Aminata held a debate to discuss the ways in which self-driving cars might be programmed to value human lives.</li>
                    <li>A group of students wrote to Facebook with ideas for filtering out fake news posts.</li>
                  </ul>
                  <p>Educators teaching general education high school should focus on developing their students’ ability to think systemically about the impacts of computing by challenging students to research how computers are involved in or are changing the systems with which they interact. The goal of this exploration is to help students develop the confidence to apply CS concepts and practices to difficult social, economic and political issues that do not have clear solutions. Students should feel confident developing informed opinions on the impacts of computing and effectively communicating them with their community.  Educators teaching from this perspective should scaffold instruction with elements of the Explorer, Creator, Innovator perspectives.</p>
                </div>
                <div class='case-study col-sm-5'>
                  <a href='https://www.mhpbooks.com/books/networks-of-new-york/' target='_blank' rel='noreferrer'><img src='/static/perspective-citizen.jpg' alt='Link to more information about &quot;Networks of New York&quot; book' /></a>
                  <h4>Networked Citizenship</h4>
                  <p>Ingrid is a writer who became interested in the impact of the Internet on social, economic and political systems. She felt that it was important that a broad audience of people understood the people, companies, and interests that drove the development and use of the Internet. Much of the information about the how the Internet works, however, revolves around technology that’s behind secure doors or rules, or protocols, written in technical language or code that is hard to understand.</p>
                  <p>She wanted a way for people to recognize and think about the infrastructure behind the time they spend online everyday. This infrastructure was hiding in plain sight in the form of spray-painted sidewalk markings, manhole covers, and networked police cameras, so she created an illustrated field guide to the urban internet infrastructure called “Networks of New York”. In it she gives readers a tour of the urban network visible in New York City and ties it to important stories about telecommunications monopolies, public and private companies that control network infrastructure, and networks impact things like the stock market through high frequency trading.</p>
                </div>
              "
            />
          </article>

          <div className="interior-container">
            <div className="exit-menu">
              <ol className="list-unstyled">
                <li>
                  <a className="box" href="/what-is-cs/" role="button">
                    <span className="box-content">CS Education</span>
                  </a>
                </li>
                <li className="current">
                  <a href="/perspectives/">Perspectives</a>
                </li>
                <li>
                  <div className="box">
                    <a
                      className="btn btn-primary btn-lg"
                      href="/practices/"
                      role="button"
                    >
                      Next: <span className="preamble">Let's discuss the</span>{" "}
                      Practices{" "}
                      <span className="preamble">
                        each perspective employs.
                      </span>
                    </a>
                  </div>
                </li>
                <li>
                  <a className="box" href="/concepts/" role="button">
                    <span className="box-content">Concepts</span>
                  </a>
                </li>
                <li>
                  <a className="box" href="/outcomes/" role="button">
                    <span className="box-content">Outcomes</span>
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Perspectives
