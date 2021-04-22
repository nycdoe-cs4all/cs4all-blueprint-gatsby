import React from "react"

const CurriculumCard = props => {
  const { link, pic, grade, title, devices, concepts } = props

  return (
    <li>
      <a href={link}>
        <div className="preview">
          <img
            src={pic}
            alt=""
            style={{
              objectFit: "cover",
              maxHeight: "180px",
            }}
          />
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
