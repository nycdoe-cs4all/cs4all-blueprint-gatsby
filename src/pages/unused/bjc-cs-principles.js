import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const BJCCSPrinciples = () => (
  <Layout>
    <SEO title="BJC CS Principles" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header><span className="preamble"><h2 className="title"  style={{lineHeight: 1}}>Beauty & Joy of Computing</h2></span></header>
          <div className="article-content">
            <p>The CS4All team, in partnership with the Education Development Center (EDC), University of California, Berkeley (UCB), and CSNYC, offers The Beauty and Joy of Computing’s Advanced Placement Computer Science Principles (AP CSP) curriculum, as well as professional development. The purpose of AP CSP is to attract non-traditional computing students such as female and underrepresented minority students, to the breadth and depth of ideas in modern computer science. The program curriculum is based on a successful computer science undergraduate course for non-majors; Beauty and Joy of Computing (BJC) at UC Berkeley. The curriculum, adapted for New York City high schools by the EDC, will prepare students to take the new AP CSP exam. The program is underwritten by a grant from the National Science Foundation (NSF) and includes a research component that involves consenting teachers and students. <a href="https://vimeo.com/164491027">Watch this video</a> for more information.</p>

            <div className="submenu">
              <a href="http://bjc.edc.org" className="box" target="blank">
                <div className="box-content"><h4>View the Beauty & Joy of Computing curriculum</h4></div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
)
export default BJCCSPrinciples
