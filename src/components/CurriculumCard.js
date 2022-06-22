import React from "react"
import { Link } from "gatsby"

const CurriculumCard = props => {
  const { link, pic, grade, title, available, devices, concepts } = props

  return (
    <li>
      <Link to={link}>
        <div className="preview">
          <img src={pic} alt="" />
        </div>
        <h3>
          <span className="activity-grade">{grade}</span>
          <span className="activity-title">{title}</span>
        </h3>
        {/* <h4>
          <span
            className={
              available
                ? "activity-offering active"
                : "activity-offering inactive"
            }
          >
            CS4All PD Available SY 21-22
          </span>
          <span
            className={
              available
                ? "activity-offering inactive"
                : "activity-offering active"
            }
          >
            &nbsp;
          </span>
        </h4> */}
        <span className="activity-devices">{devices}</span>
        <span className="activity-concepts">{concepts}</span>
      </Link>
    </li>
  )
}
export default CurriculumCard
