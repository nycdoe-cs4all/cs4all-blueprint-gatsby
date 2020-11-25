import React, { useState, useRef } from "react";
import scrollTo from 'gatsby-plugin-smoothscroll'

function Accordion(props) {
  const [height, setHeight] = useState("0px");

  const content = useRef(null);

  function toggle() {
    if(props.state === props.name) {
      props.changeState("none");
    } else {
      props.changeState(props.name);
    }
    setHeight(props.state === props.name ? "0px" : `${content.current.scrollHeight}px`);
    setTimeout(() => {scrollTo("#" + props.name)}, 500);
  }

  return (
    <section id={props.name} className={props.state === props.name ? "accordion-target" : "accordion-target compressed"}>
      <header>
        <a className="box accordion" href="javascript:void(0)" onClick={toggle} >
          <div className="box-content" dangerouslySetInnerHTML={{ __html: props.header }} />
        </a>
      </header>
      <div className="section-content" ref={content} style={{ maxHeight: `${height}` }} dangerouslySetInnerHTML={{ __html: props.content }} />
    </section>
  )
}
export default Accordion
