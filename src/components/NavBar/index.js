import React from "react"
import css from "./navbar.module.css"
import { Link } from "gatsby"

export default () => 
<>
<div>
<div className={css.links}>
<Link to="index">Home</Link>
<Link to="about">About Me</Link>
<Link to="CV">CV</Link>
<Link to="Projects">Projects</Link>
<Link to="Contact">Contact</Link>
</div>
{/* <ShareLink/>
<ShareLink/> */}

</div>


</>