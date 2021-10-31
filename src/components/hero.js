import React from 'react'
import Img from 'gatsby-image'

import { hero, heroImage, heroDetails, heroHeadline, heroTitle } from './hero.module.css'

const Hero = ({ data }) => (
  <div className={hero}>
    <Img
      className={heroImage}
      alt={data.name}
      fluid={data.heroImage.fluid}
    />
    <div className={heroDetails}>
      <h3 className={heroHeadline}>洪偉筆記 Wei's Note</h3>
      <p>洪偉日常閱讀以及評論的筆記。哲學、遊戲、文學。</p>
    </div>
  </div>
)

export default Hero