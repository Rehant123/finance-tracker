import React from 'react'

import style from "./Navbar.module.css"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className={style.navbar}>
        <ul>
            <li className={style.title}><Link to = "/">myMoney</Link></li>
            <li><Link to = "/login">Login</Link></li>
            <li><Link to = "/signup">Signup</Link></li>
        </ul>

    </nav>
  )
}

export default Navbar