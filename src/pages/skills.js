import React from "react"
import Layout from "../components/layout"
import BoldText from "../components/boldtext"

export default () => {
  return(
    <Layout>
        <p>My favourite technologies to work with are <BoldText>React Frameworks</BoldText> such as <BoldText primary>Gatsby</BoldText> or <BoldText primary>Next.js</BoldText> and <BoldText primary>Vue</BoldText>.</p>

        <p>However I am also skilled in <BoldText secondary>Kentico CMS</BoldText>, agile project management, <BoldText secondary>Figma</BoldText>, <BoldText secondary>Wordpress</BoldText> and general <BoldText secondary>HTML</BoldText>, <BoldText secondary>CSS</BoldText> and <BoldText secondary>JavaScript</BoldText>. </p>
    </Layout>
  )
}