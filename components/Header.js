import React from 'react'
import Headerstyle from'../styles/Header.module.css'

function Header() {
  return (
    <div>
        <h1 className={Headerstyle.title}>
            <span>WebDev</span> News
        </h1>
        <p className={Headerstyle.description}>Keep up to date with the latest web dev news</p>
    </div>
  )
}

export default Header