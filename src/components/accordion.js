import React, { useState, useRef, useEffect } from "react";
import scrollTo from 'gatsby-plugin-smoothscroll'

function Accordion(props) {
  const [height, setHeight] = useState("0px");

  const content = useRef(null);

  useEffect(() => {
    checkHash();
    open();
  });

  function updateState() {
    if(props.state === props.name) {
      props.changeState("none");
    } else {
      props.changeState(props.name);
    }
    return false;
  }

  function checkHash() {
    if(props.state !== 'none' && (window.location.href.split('#')[1] !== props.state)) {
      props.changeState(window.location.href.split('#')[1]);
    }
  }

  function open() {
    setHeight(props.state === props.name ? `${content.current.scrollHeight}px` : "0px");
    if(props.state === props.name) {
      setTimeout(() => {scrollTo("#" + props.name)}, 500);
    } if(props.state === 'none') {
      setTimeout(() => {typeof window !== 'undefined' && window.scroll({
        top: 0,
        behavior: "smooth"
      })}, 500);
    }
  }

  return (
    <section id={props.name} className={props.state === props.name ? "accordion-target" : "accordion-target compressed"}>
      <header>
        <a className="box accordion" href={"#" + props.name} onClick={updateState} >
          <div className="box-content" dangerouslySetInnerHTML={{ __html: props.header }} />
        </a>
      </header>
      <div className="section-content" ref={content} style={{ maxHeight: `${height}` }} dangerouslySetInnerHTML={{ __html: props.content }} />
    </section>
  )
}
export default Accordion
