import React from "react"

const CurriculumCard = props => {
  const { link, pic, alt, grade, title, devices, concepts } = props

  return (
    <li>
      <a href={link}>
        <div className="preview">
          <img src={pic} alt="" />
        </div>
        <h3>
          <span className="activity-grade">{grade}</span>
          <span className="activity-title">{title}</span>
        </h3>
        <span className="activity-devices">{devices}</span>
        <span className="activity-concepts">{concepts}</span>
      </a>
    </li>
  )
}
export default CurriculumCard
