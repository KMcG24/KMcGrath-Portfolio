import React from "react"
import css from "./projects.module.css"
import { Link } from "gatsby"


export default () => 
<>
<div className={css.projects}>
<div className={css.container}>
<div className={css.articles}>
<h1 className={css.fullstackh1}>Full Stack</h1>
<div className={css.fullstack}>
{/* Need to put link to updated Santander project here */}
<h1 className={css.react}>React</h1>
<h1 className={css.articlesh1}>Articles</h1>
<a href="https://medium.com/@KLMcGrath2/mongoose-schemas-in-react-f5c0afa5a47d">Mongoose Schemas in React</a>
</div>
<h1 className={css.gatsby}>Gatsby</h1>
</div> 
</div>

<img className={css.image} src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" alt="colorful paintbrushes" ></img>
</div>
</>