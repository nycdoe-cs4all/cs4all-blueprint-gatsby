import React from "react"

const CurriculumCard = props => {
  const { link, pic, grade, title, available, devices, concepts } = props

  return (
    <li>
      <a href={link}>
        <div className="preview">
          <img
            src={pic}
            alt=""
          />
        </div>
        <h3>
          <span className="activity-grade">{grade}</span>
          <span className="activity-title">{title}</span>
        </h3>
        <h4>
          <span className={available ? "activity-offering inactive" : "activity-offering active"}>CS4All PD Available SY 21-22</span>
        </h4>
        <span className="activity-devices">{devices}</span>
        <span className="activity-concepts">{concepts}</span>
      </a>
    </li>
  )
}
export default CurriculumCard
