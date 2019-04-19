import React from "react"
import css from "./contact.module.css"
import { Link } from "gatsby"


export default () =>
<>
<form 
name="Contact Form"
netlify
// method="post"
// data-netlify="true"
// data-netlify-honeypot="bot-field"
>
<input name="name" placeholder="Your Name" type="text"/>
<input name="email" placeholder="Your Email Address" type="email"/>
<textarea name="message"/>
<button>Send</button>
</form>
</>