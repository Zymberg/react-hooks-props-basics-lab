import React from 'react'

function links(props) {
  console.log(props)
  return  (
    <>
        <h3>Links</h3>
        <a href={props.github}>{props.github}</a>
        <a href={props.linkedin}>{props.linkedin}</a>
    </>
    );
}

export default links