import React from 'react'
import { InlineWidget } from "react-calendly";
import './Calendly.css';
const Calendly = (props) => {
  let link = `https://calendly.com/${props.link}`;
  return (
<div id='calendly' className='calendly'>
<h2>Book a meeting with Khalid?</h2>
<h3>Book a {props.type} with Khalid</h3>
<InlineWidget url={link} />
</div>
    )
}

export default Calendly;
