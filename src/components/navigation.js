import React from 'react'
import { Link } from 'gatsby'
import { navigation, navigationItem } from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation">
    <ul className={navigation}>
      <li className={navigationItem}>
        <Link to="/">Home</Link>
      </li>
    </ul>
  </nav>
)

export default Navigation