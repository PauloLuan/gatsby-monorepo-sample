import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Button } from "ui"

const IndexPage = () => (
  <Layout>
    <h1>This button was imported from the shared ui lib</h1>
    <Button />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
