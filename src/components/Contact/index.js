import React from "react"
import css from "./contact.module.css"
import { Link } from "gatsby"
import NavBar from "../NavBar"


export default () =>
<>
<div className={css.container}>

<div className={css.formContainer}>
<div className={css.greeting}>
<h4>Please contact me at:</h4>
<h3>KLMcGrath2@gmail.com</h3>
<p>or, leave me a message below</p>
<p>I look forward to hearing from you!</p>
</div>

<form 
classname={css.contactForm}

method="post"
data-netlify="true"
data-netlify-honeypot="bot-field"
>


<input className={css.name} placeholder="Your Name" type="text"/>
<br></br>
<input className={css.email} placeholder="Your Email Address" type="email"/>
<br></br>
<textarea className={css.message} placeholder="Please write your message here"/>
<br></br>
<button className={css.button}>Send</button>
</form>
</div>
<img className={css.image} src="https://images.unsplash.com/photo-1535264325674-401238afc8b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"></img>

</div>
</>

