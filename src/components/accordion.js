import React, { useState, useRef, useEffect } from "react";
import scrollTo from 'gatsby-plugin-smoothscroll'

function Accordion(props) {
  const [height, setHeight] = useState("0px");
  const content = useRef(null);

  useEffect(() => {
    checkHash();
    console.log(props.state);
    if(props.state === 'none' || props.state === props.name) {
        open();
    }
  });

  function updateState(e) {
    e.preventDefault();
    if(props.state === props.name) {
      window.history.replaceState(null, null, "#")
      props.changeState("none");
      setHeight("0px");
      setTimeout(() => {typeof window !== 'undefined' && window.scroll({
        top: 0,
        behavior: "smooth"
      })}, 500);
    } else {
      window.history.replaceState(null, null, "#" + props.name)
      props.changeState(props.name);
      setHeight(`${content.current.scrollHeight}px`);
      setTimeout(() => {scrollTo("#" + props.name)}, 500);
    }
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
        <a className="box accordion" href={"#" + props.name} onClick={e => updateState(e)} >
          <div className="box-content" dangerouslySetInnerHTML={{ __html: props.header }} />
        </a>
      </header>
      <div className="section-content" ref={content} style={{ maxHeight: `${height}` }} dangerouslySetInnerHTML={{ __html: props.content }} />
    </section>
  )
}
export default Accordion
