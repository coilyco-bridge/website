import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

// Placeholder page. Infrastructure scaffold only — visuals land in a later pass.
const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Coily Co — Bridge</h1>
      <p>Coming soon.</p>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Coily Co — Bridge</title>
