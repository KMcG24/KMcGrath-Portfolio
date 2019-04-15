import React from "react"
import css from "./home.module.css"
import { Link } from "gatsby"

export default () => 
<>
<div className={css.landing}>
<img src="https://images.unsplash.com/photo-1546146830-2cca9512c68e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" alt="computer and phone that says developer" />


<div className={css.text}>
<h1 className={css.name}> KIM McGRATH </h1>
<div className={css.links}>

<Link className={css.about} to="About">About Me</Link>
<br></br>
<Link className={css.cv} to="CV">CV</Link>
<br></br>
<Link className={css.projects} to="Projects">Projects</Link>
<br></br>
<Link className={css.contact} to="Contact">Contact</Link>
</div>


</div>
</div>

</>