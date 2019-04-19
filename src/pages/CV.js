import React from "react"
import NavBar from "../components/NavBar"
import { Link } from "gatsby"
// import css from "./pages.module.css"
import css from "./cv.module.css"

export default () => 
<>

<div className={css.container}>
<h1 className={css.name}>Kim McGrath</h1>
<div className={css.profile}>I am a newly qualified junior developer looking to work as an entry level developer.  Last year, I decided to re-train as a software developer and will complete a 16 week coding bootcamp in May.  In this bootcamp, I have learned the skills necessary to work for you.  I am over the moon to be joining the tech world, and the opportunity to diligently and creatively solve problems with code.</div>
<div className={css.skillset}>
<ul>
<li>React</li>
<li>Agile Teamwork</li>
<li>Git Hub</li>
<li>Node.js</li>
<li>Expess</li>
<li>Gatsby</li>
<li>JavaScript</li>
<li>HTML</li>
<li>CSS</li>
<li>MongoDB</li>
<li>Mongoose</li>
</ul>
</div>
<div className={css.experience}>
    <ul>
    <a className={css.soc} src="https://schoolofcode.co.uk/"></a>
        <li>February - May 2019</li>
        <li>In May 2019 I will graduate from the School of Code bootcamp.  There I have learned to code with JavaScript, React, node.js, Expres, HTML, and CSS.  We have learned to be full stack developers, with team and individual projects covering front-end, back-end, databases, static websites and more.  We have spent every day of the bootcamp focussing on agile teamwork by pair programming, working in teams of four, and taking on project management roles.</li>
        
    </ul>
</div>
<div className={css.workExperience}>
<ul>
        <li>Teacher</li>
        <li>President of Everything</li>
        <li>Founder</li>
        <li>Account Manager</li>
    </ul>
</div>
<div className={css.education}/>

</div>
<NavBar/>


</>