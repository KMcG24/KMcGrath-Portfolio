import React from "react"
import NavBar from "../components/NavBar"
import { Link } from "gatsby"
import css from "./cv.module.css"

export default () => 
<>

<div className={css.container}>
<div className={css.textContainer}>
<h1 className={css.name}>Kim McGrath</h1>

<div className={css.profile}>
<h3 className={css.profileh3}>Profile</h3>
<div className={css.profileText}>I am a newly qualified junior developer looking for an entry level position.  Last year, I decided to re-train as a software developer and will complete a 16 week coding bootcamp in May.  In this bootcamp, I have learned the skills necessary to work for you.  I am over the moon to be joining the tech world, and the opportunity to diligently and creatively solve problems with code.</div>
</div>
<div className={css.skillset}>
<h3>Skill set</h3>
<ul>
<li>Agile Teamwork</li>
<li>Git Hub</li>
<li>React</li>
<li>Node.js</li>
<li>Expess</li>
<li>JavaScript</li>
<li>Gatsby</li>
<li>MongoDB</li>
<li>Mongoose</li>
<li>CSS</li>
<li>HTML</li>
</ul>
</div>
<div className={css.experience}>
<h3 className={css.experienceh3}>Experience</h3>
    <ul>
    <a className={css.soc} src="https://schoolofcode.co.uk/">School of Code</a>
        <li>February - May 2019</li>
        <li>In May 2019 I will graduate from the School of Code bootcamp.  There I have learned to code with JavaScript, React, node.js, Expres, HTML, and CSS.  We have learned to be full stack developers, with team and individual projects covering front-end, back-end, databases, static websites and more.  We have spent every day of the bootcamp focussing on agile teamwork by pair programming, working in teams of four, and taking on project management roles.</li>
        
    </ul>
</div>
<div className={css.workExperience}>
<h3>Work Experience</h3>
<ul>
        <li>Teacher</li>
        <li>President of Everything</li>
        <li>Founder</li>
        <li>Account Manager</li>
    </ul>
</div>
<div className={css.education}/>
</div>

<img className={css.image} src="https://images.unsplash.com/photo-1488903809927-48c9b4e43700?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"/>

</div>
<NavBar/>


</>