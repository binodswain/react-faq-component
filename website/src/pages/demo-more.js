import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gitfork from "../components/githubFork"
import Faq from "react-faq-component";
import Prism from 'prismjs';


const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat, 
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus. 
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae. 
              Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Can I use html as content",
      content: `Yes, here is an example of a <a href="https://binodswain.github.io/react-faq-component/">link</a>`,
    },
    {
      title: "What is the package version",
      content: "v1.0.0",
    },
  ],
}

const IndexPage = () => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
    setShowFlag(true)
  })
  const [showFaq, setShowFlag] = useState(false)

  return (
    <Layout>
        <SEO title="Demo" />
        <Gitfork />
        <h1>More Demos</h1>
        <section className="demo">
            <h2>View 1:</h2>
            <pre>
                <code className="language-jsx">
                    {`<Faq data={data} styles={{
                    titleTextColor: "green",
                    rowTitleColor: "mediumseagreen"
                    }} />`}
                </code>
            </pre>
           {showFaq ?
           <Faq data={data} styles={{
                titleTextColor: "green",
                rowTitleColor: "mediumseagreen"
                }} />
          : null}
            

            <h2>View 2:</h2>
            <pre>
                <code className="language-jsx">
                    {`<Faq data={data} styles={{
                    titleTextColor: "green",
                    rowContentColor: "grey"
                    }} />`}
                </code>
            </pre>
            {showFaq ?
            <Faq data={data} styles={{
                titleTextColor: "green",
                rowContentColor: "grey"
                }} />
            : null}
    </section>
  </Layout>
)
}

export default IndexPage
