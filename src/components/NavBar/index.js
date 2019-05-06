import React from "react"
import css from "./navbar.module.css"
import { Link } from "gatsby"

export default () => 

<>
<div className={css.links}>
<Link className={css.home} to="index">Home</Link>
<Link className={css.about}to="about">About Me</Link>
<Link className={css.cv}to="CV">CV</Link>
{/* <Link className={css.projects}to="Projects">Projects</Link> */}
<Link className={css.contact}to="Contact">Contact</Link>
</div>
<div className={css.images}>
</div>
</>
    


