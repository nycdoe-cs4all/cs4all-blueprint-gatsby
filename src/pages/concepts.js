/**
 * A deeper dive into the CS Concepts and sub-concepts
 */

/* Imports */
import React from "react"
import Layout from "../components/layout"
import Accordion from "../components/accordion"
import SEO from "../components/seo"

import Abstraction from "../assets/svg/icon-abstraction.svg"
import Algorithm from "../assets/svg/icon-algorithm.svg"
import Programming from "../assets/svg/icon-programming.svg"
import Data from "../assets/svg/icon-data.svg"
import Network from "../assets/svg/icon-network.svg"

/* Component */
class Concepts extends React.Component {
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
        <SEO title="Computer Science Concepts" />
        <div id="page">
          <article className="orange-theme">
            <header>
              <h2>
                <span className="preamble">Computer Science</span> Concepts
              </h2>
              <h3>A framework for what computers can and cannot do.</h3>
            </header>

            <div className="article-content">
              <p className="sub-head">
                Here are definitions of common CS concepts, alongside parallels
                from other subjects to help to demystify unfamiliar vocabulary.
              </p>
            </div>

            <Accordion
              state={this.state.state}
              changeState={this.handleState}
              name="concept-abstraction"
              icon={<Abstraction />}
              header="Abstraction"
              statement="Extracting essential details and repeatable patterns from a more complex system."
              content="
                <p>An abstraction represents a simplified idea or problem derived by ignoring details and using patterns or general characteristics. A simple example of a CS abstraction can be found in programming languages: They allow programmers to give complex instructions to computers without worrying about the bits and bytes!</p>
                <table>
                  <caption>Abstraction sub-concepts and interdisciplinary parallels</caption>
                  <thead>
                    <tr>
                      <th>Sub-concept</th>
                      <th>Definition</th>
                      <th>Math</th>
                      <th>ELA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Decomposition</th>
                      <td><p>Ideas, problems, or projects are broken down into component parts to set the stage for deeper analysis.</p></td>
                      <td dataColumn='Math'><p>145 can be decomposed as 100 + 40 + 5.</p></td>
                      <td dataColumn='ELA'><p>Words can be broken into syllables to sound them out. Essays have three parts—introduction, body, and conclusion.</p></td>
                    </tr>
                    <tr>
                      <th>Pattern Recognition</th>
                      <td><p>Decomposed component parts are examined to find patterns like similarities, repetition, conditional relationships, or nested relationships.</p></td>
                      <td dataColumn='Math'><p>2, 4, 6, 8, 10 are even numbers. 1, 3, 5, 7, 9, 11 are odd numbers.</p></td>
                      <td dataColumn='ELA'><p>As an alphabetic language, English has many systematic spelling patterns—“change y to i before adding es,” “i before e except after c”</p></td>
                    </tr>
                    <tr>
                      <th>Generalization and Detail Removal</th>
                      <td><p>Component parts are grouped by general characteristics, and unnecessary details filtered out.</p></td>
                      <td dataColumn='Math'><p>Rounding or estimating removes details to provide a general understanding.</p></td>
                      <td dataColumn='ELA'><p>The main idea is determined by identifying the most salient idea and filtering out supporting details.</p></td>
                    </tr>
                    <tr>
                      <th>Modularity</th>
                      <td><p>A process that completes a single task is more useful when it can be chained together with other processes to accomplish something more complex.</p></td>
                      <td dataColumn='Math'><p>Inscribing a shape inside another shape is a process that can be done regardless of the inner and outer shape.</p></td>
                      <td dataColumn='ELA'><p>Each phase of the writing process has individual work that leads to creating a developed piece of writing—generating, rehearsing, drafting, revising, editing, and publishing.</p></td>
                    </tr>
                    <tr>
                      <th>Interfaces</th>
                      <td><p>Interfaces help users complete tasks, while hiding details of the overall process.</p></td>
                      <td dataColumn='Math'><p>Function machines in math that take inputs and produce outputs represent the math being done.</p></td>
                      <td dataColumn='ELA' class='placeholder'></td>
                    </tr>
                  </tbody>
                </table>
              "
            />

            <Accordion
              state={this.state.state}
              changeState={this.handleState}
              name="concept-algorithms"
              icon={<Algorithm />}
              header="Algorithms"
              statement="Instructions that convert a set of inputs into a desired output (kind of like a recipe)."
              content="
                <p>Algorithms are a generalized and repeatable sequence of instructions that achieve a particular purpose and output, given a set of inputs. It's important to understand when, why and how to implement an algorithm, and to consider who or what might be affected.</p>
                <table>
                  <caption>Algorithm sub-concepts and interdisciplinary parallels</caption>
                  <thead>
                    <tr>
                      <th>Sub-concept</th>
                      <th>Definition</th>
                      <th>Math</th>
                      <th>ELA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Algorithm Design</th>
                      <td><p>Instructions should be general, clear, well-formed, complete, and capable of being executed as intended without confusion.</p></td>
                      <td dataColumn='Math'><p>Showing the strategies used to solve a problem.</p></td>
                      <td dataColumn='ELA'><p>Explicitly demonstrating strategies to determine character traits—a) notice a character’s actions and ask, “What kind of person acts this way?” b) pay attention to dialogue and ask, “What kind of person would say things like this?”</p></td>
                    </tr>
                    <tr>
                      <th>Control Flow</th>
                      <td><p>The order in which steps of an algorithm are executed; determined by logical constructs such as IF statements, loops and calls to other procedures.</p></td>
                      <td dataColumn='Math'><p>Students explain their problem-solving steps when addressing a word problem. First they decompose their problem, chose a strategy based on some logic, and so on.</p></td>
                      <td dataColumn='ELA'><p>In non-fiction texts, a footnote can redirect us to look elsewhere for more information, before taking us back to where we left off.</p><p>The steps in the writing process aren’t necessarily linear.  When revising, writers might need to return to the rehearsal phase and gather more information.  During rehearsal, writers might do some flash drafting to try out an idea.</p></td>
                    </tr>
                    <tr>
                      <th>Inputs, Variables, and Outputs</th>
                      <td><p>How <a href='#concept-data'>data</a> is passed into (inputs) manipulated by, used within (variables) and returned from the algorithm (outputs).</p></td>
                      <td dataColumn='Math'>
                        <p>A function machine is an example of a process that takes inputs, manipulates them in a way and outputs them.</p>
                        <p>* Variables in CS are more than just numbers - they can also represent strings of characters, lists, etc.</p>
                      </td>
                      <td dataColumn='ELA'>
                        <p>Writing a paper that must be on a specific topic, using vocabulary words and meeting a word count.</p>
                        <p>Writing an informational text (output) can be done by using varied research materials, explicitly taught vocabulary (inputs), and prior knowledge/experience (variable). </p>
                      </td>
                    </tr>
                    <tr>
                      <th>Application</th>
                      <td><p>Understanding where, when, why and how to apply algorithms and which algorithm to apply in a given context.</p></td>
                      <td dataColumn='Math'><p>Interpreting a word problem to know what strategy to utilize.</p></td>
                      <td dataColumn='ELA'><p>When encountering an unfamiliar word, readers make decisions about whether to use context clues or morphology clues (prefix, root, suffix). </p></td>
                    </tr>
                  </tbody>
                </table>
              "
            />

            <Accordion
              state={this.state.state}
              changeState={this.handleState}
              name="concept-programming"
              icon={<Programming />}
              header="Programming"
              statement="Giving instructions to computers in a human language."
              content="
                <p>Programming is about giving instructions to computers. Programming can be done through a constantly changing set of languages. Each language is translated from human-readable code into machine code that can be executed by the computer's central processing unit, CPU.</p>
                <table>
                  <caption>Programming sub-concepts and interdisciplinary parallels</caption>
                  <thead>
                    <tr>
                      <th>Sub-concept</th>
                      <th>Definition</th>
                      <th>Math</th>
                      <th>ELA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Languages</th>
                      <td><p>Programming languages have different applications and require different amounts of prior knowledge. Some languages can only be run on specific hardware, while others run inside software such as a web browser.</p></td>
                      <td dataColumn='Math'><p>Fractions, ratios, decimals and percentages all express proportions, but are used in different contexts and require different background knowledge to use correctly.</p></td>
                      <td dataColumn='ELA'><p>Within English there are different writing or speaking styles that are used depending on the situation: formal language, technical language, colloquial language, regional dialects, etc.</p></td>
                    </tr>
                    <tr>
                      <th>Syntax</th>
                      <td><p>All programming languages have a set of commands or reserved words and grammar rules that must be followed.</p></td>
                      <td dataColumn='Math'><p>Mathematical notation represents numbers, operations and relationships. The syntax for 5 plus 5 is 5+5.</p></td>
                      <td dataColumn='ELA'><p>Writers follow the common rules of grammar and mechanics in English to communicate easily with the reader.</p></td>
                    </tr>
                    <tr>
                      <th>Development Environments</th>
                      <td><p>Programmers use development environments to create applications; these environments have an editor to write code, run and show a program's output and log errors that arise.</p></td>
                      <td dataColumn='Math'><p>Excel can be used as a development environment when formulas are written in cells. It will give you help writing them, run the formula for you, and then tell you if there is an error.</p></td>
                      <td dataColumn='ELA'><p>Word processors or other digital media display errors in the form of spelling and grammar checks.</p></td>
                    </tr>
                    <tr>
                      <th>Collaboration</th>
                      <td><p>Collaborating on code is complex because each line is part of a larger algorithm or abstraction. Clearly setting team roles, saving versions along the way, and using parallel versions are some ways to manage the complexity.</p></td>
                      <td dataColumn='Math'><p>Extended problem-solving, such as that used to design a playground, requires students to combine their work in order to achieve a single goal.</p></td>
                      <td dataColumn='ELA'><p>Large research projects are often written in collaboration with others who may have different areas of expertise. The collaborators have to meet frequently to ensure cohesion in the content.</p></td>
                    </tr>
                  </tbody>
                </table>
              "
            />

            <Accordion
              state={this.state.state}
              changeState={this.handleState}
              name="concept-data"
              icon={<Data />}
              header="Data"
              statement="Information that can be collected, stored, and processed by a computer."
              content="
                <p>Computers can be used to collect, store and analyze massive amounts of data quickly and reliably. Computer programs can use data to make decisions or to automate tasks.</p>
                <table>
                  <caption>Data sub-concepts and interdisciplinary parallels</caption>
                  <thead>
                    <tr>
                      <th>Subconcept</th>
                      <th>Definition</th>
                      <th>Math</th>
                      <th>ELA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Sensors and Datasets</th>
                      <td><p>Data is collected by sensors such as video cameras or thermostats, or from other datasets such as government data, or your digital activity. Data from sensors and datasets must always be cleaned, to ensure its accuracy and usability.</p></td>
                      <td dataColumn='Math'><p>Data can be collected from the class such as heights, interests, country of origin, etc.</p><p>If students are taking measurements, rulers can be seen as analogous to sensors. Sensor data needs a reasonableness check.</p></td>
                      <td dataColumn='ELA'><p> When researching a topic, writers collect data and information from various sources. Writers should use current research to ensure its relevance and usability.</p></td>
                    </tr>
                    <tr>
                      <th>Data Abstraction and Storage</th>
                      <td><p>Data is represented in computers as binary, but humans save and use data on computers as lists, databases, key-value pairs, etc.</p></td>
                      <td dataColumn='Math'><p>Tables of rows and columns are an example of data representation.</p></td>
                      <td dataColumn='ELA'><p>Outlines, timelines, and graphic organizers can represent complex data in a structured form.</p></td>
                    </tr>
                    <tr>
                      <th>Transformation and Visualization</th>
                      <td><p>Computers make looking at data easier by allowing us to quickly visualize data in different ways; to break up a big problem into manageable pieces, operate on each piece independently, and then put all the pieces back together.</p></td>
                      <td dataColumn='Math'>
                        <p>When (x,y) points are plotted, it becomes easier to see their relationship.</p>
                        <p>If the (x,y) points are very far apart, the scale of a graph must be adjusted.</p>
                      </td>
                      <td dataColumn='ELA'><p>Infographics are used to visually represent complex information and convey scale, interconnections, and progressions.</p></td>
                    </tr>
                    <tr>
                      <th>Feedback Loops and Automation</th>
                      <td><p>Automation is controlled by data. Some automation uses data from outside the automated system, like time. Other automation uses data on the output of the system, like temperature.</p></td>
                      <td dataColumn='Math'><p>If the answer to a math problem doesn't pass the reasonableness check, the student may backpedal through their work.</p></td>
                      <td dataColumn='ELA'><p>Using editing and revision checklists during writing for accuracy and clarity through self-assessment, peer-assessment and teacher feedback.</p></td>
                    </tr>
                  </tbody>
                </table>
              "
            />

            <Accordion
              state={this.state.state}
              changeState={this.handleState}
              name="concept-networks"
              icon={<Network />}
              header="Networks"
              statement="Connections between computers that allow them to share data."
              content="
                <p>Networks, like the Internet, allow computers to interface with other computers through a set of rules, or protocols, that define how computers send and receive data. Protocols and standards are created and agreed upon by groups of people.</p>
                <table>
                  <caption>Network sub-concepts and interdisciplinary parallels</caption>
                  <thead>
                    <tr>
                      <th>Subconcept</th>
                      <th>Definition</th>
                      <th>Math</th>
                      <th>ELA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Trust</th>
                      <td><p>The common thread behind issues of security, privacy and consent is trust. Whenever we connect to a network, we decide our level of trust, based on our security and privacy needs. We implement and monitor protocols to protect those needs.</p></td>
                      <td dataColumn='Math' class='placeholder'></td>
                      <td dataColumn='ELA'><p>When researching a topic, writers should verify the credibility and accuracy of the source and information. Researchers look for evidence of expertise of the author.</p></td>
                    </tr>
                    <tr>
                      <th>Protocols</th>
                      <td><p>In order to send data from one device to another, the devices must be synchronized, share a syntax for the data, share a method of encryption, and have a way to report and recover from errors.</p></td>
                      <td dataColumn='Math'><p>Protocols for a math assignment include requirements like due date, format, and there are consequences if not followed.</p></td>
                      <td dataColumn='ELA'>
                        <p>When students are reading in a book club, they can follow a protocol for discussing the book and use talking prompts to share their thinking.</p>
                        <p>If there are misconceptions or confusion, readers can refer back to the text for evidence.</p>
                      </td>
                    </tr>
                    <tr>
                      <th>Physical Internet</th>
                      <td><p>It is critical to understand the infrastructure of the Internet, including the hardware, companies, governing bodies, etc., that connect your computer to internet exchanges -- where massive networks cross-connect to the undersea fiber optic cables that connect the world (not satellites).</p></td>
                      <td dataColumn='Math' class='placeholder'></td>
                      <td dataColumn='ELA' class='placeholder'></td>
                    </tr>
                    <tr>
                      <th>Markup</th>
                      <td><p>Hypertext Markup Language (HTML) is the standard way to publish information or applications on the Internet. It is a standard agreed upon by the Internet Engineering Task Force (IETF). It is not a programming language, as it doesn't use logic.</p></td>
                      <td dataColumn='Math'><p>Mathematics has standard representations of different expressions: 1 x 2 is multiplication, etc.</p></td>
                      <td dataColumn='ELA'><p>Underlining titles, indenting paragraphs, starting sentences with capitalization, and ending them with punctuation, are examples of publishing standards in English.</p></td>
                    </tr>
                  </tbody>
                </table>
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
                <li>
                  <a className="box" href="/perspectives/" role="button">
                    <span className="box-content">Perspectives</span>
                  </a>
                </li>
                <li>
                  <a className="box" href="/practices/" role="button">
                    <span className="box-content">Practices</span>
                  </a>
                </li>
                <li className="current">
                  <a href="/concepts/">Concepts</a>
                </li>
                <li>
                  <div className="box">
                    <a
                      className="btn btn-primary btn-lg"
                      href="/outcomes/"
                      role="button"
                    >
                      Next:{" "}
                      <span className="preamble">
                        let's put it all together and see{" "}
                      </span>{" "}
                      <span>what CS Students can do!</span>
                    </a>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Concepts
