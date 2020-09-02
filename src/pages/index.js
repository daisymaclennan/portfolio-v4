import React from "react"
import Layout from "../components/Layout"
import BoldText from "../components/BoldText"

export default () => {
  return(
    <Layout>
      <p>I am a <BoldText primary>perfectionistic</BoldText> front end developer with a passion for problem solving and pretty websites!</p>
      <img src="/holiday-pic.jpg" />
    </Layout>
  )
}
