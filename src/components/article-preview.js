import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { previewTitle, preview } from './article-preview.module.css'

const ArticlePreview = ({ article }) => (
  <div className={preview}>
    <Img alt="" fluid={article.heroImage.fluid} />
    <h3 className={previewTitle}>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  </div>
)

export default ArticlePreview