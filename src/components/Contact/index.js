import React from "react"
import css from "./contact.module.css"
import { Link } from "gatsby"
import NavBar from "../NavBar"


export default () =>
<>
<form 
classname={css.contactForm}
netlify
// method="post"
// data-netlify="true"
// data-netlify-honeypot="bot-field"
>


<input className={css.name} placeholder="Your Name" type="text"/>
<br></br>
<input className={css.email} placeholder="Your Email Address" type="email"/>
<br></br>
<textarea className={css.message} placeholder="Please write your message here"/>
<br></br>
<button className={css.button}>Send</button>
</form>

</>

