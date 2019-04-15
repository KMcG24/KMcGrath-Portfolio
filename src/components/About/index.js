import React from "react"
import css from "./about.module.css"

export default () => 
<>
<div className={css.about}>


<div className={css.text}>
<h1 className={css.greeting}>Hi, I'm Kim</h1>
<h3 className={css.h3}>I am a junior software developer looking for a job creating exciting products for exciting customers.  </h3>
<p className={css.para1}>I am currently about to finish an intensive 16 week bootcamp at the School of Code.  During this bootcamp, I have become a coder.  We have learned HTML, CSS, JavaScript, React, Express, Node, Gatsby, Git, Agile Teamwork, Google Analytics, and much, much more.  We have worked in agile teams of four since day one.  We finished a week-long project where we created software for a major bank.  It has been intense.  It has been fun.  And now, it's time for me to get into the real world of software development.</p> 

<p className={css.para2}>I am coming to coding a litte later in life, after having trained as a barrister and a few years at home with my young children.  I have always wanted to be in tech, and am over the moon to be here now.</p>

<p className={css.closing}> I look forward to hearing from you. </p>

<div className={css.signature}/>
</div>


<img className={css.aboutPhoto} src="https://images.unsplash.com/photo-1548279351-6f3a6448ada0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" alt="Capitol building in Madison Wisconsin" />

<nav className={css.aboutNavBar}></nav>
</div>
</>


