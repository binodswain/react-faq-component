import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gitfork from "../components/githubFork"
import Footer from "../components/footer"
import Faq from "react-faq-component"
import Prism from "prismjs"
import { Fragment } from "react"

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
      content: "v1.0.5",
    },
  ],
}

const IndexPage = () => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  }, [])

  return (
    <Fragment>
      <Layout>
        <SEO title="More demos" />
        <Gitfork />
        <h1>More Demos</h1>
        <section className="demo">
          <h2>View 1 (with animation):</h2>
          <pre>
            <code className="language-jsx">
              {`<Faq data={data} styles={{
                    titleTextColor: "green",
                    rowTitleColor: "mediumseagreen"
                    }} />`}
            </code>
          </pre>
          <Faq
            data={data}
            styles={{
              titleTextColor: "green",
              rowTitleColor: "mediumseagreen",
            }}
            config={{
              animate: true,
            }}
          />

          <h2>View 2 (with animation, custom icon):</h2>
          <pre>
            <code className="language-jsx">
              {`<Faq data={data} styles={{
                    titleTextColor: "green",
                    rowTitleColor: "mediumseagreen"
                    }} />`}
            </code>
          </pre>
          <Faq
            data={data}
            styles={{
              titleTextColor: "green",
              rowTitleColor: "mediumseagreen",
              arrowColor: "red",
            }}
            config={{
              animate: true,
              arrowIcon: "V",
            }}
          />

          <h2>View 3:</h2>
          <pre>
            <code className="language-jsx">
              {`<Faq data={data} styles={{
                    titleTextColor: "green",
                    rowTitleColor: "mediumseagreen"
                    }} />`}
            </code>
          </pre>
          <Faq
            data={data}
            styles={{
              titleTextColor: "green",
              rowTitleColor: "mediumseagreen",
            }}
          />

          <h2>View 4:</h2>
          <pre>
            <code className="language-jsx">
              {`<Faq data={data} styles={{
                    titleTextColor: "green",
                    rowContentColor: "grey"
                    }} />`}
            </code>
          </pre>
          <Faq
            data={data}
            styles={{
              titleTextColor: "green",
              rowContentColor: "grey",
            }}
          />

          <h2>View 5:</h2>
          <pre>
            <code className="language-jsx">
              {`<Faq data={data} styles={{
                    bgColor: "white",
                    titleTextColor: "#48482a",
                    rowTitleColor: "#78789a",
                    rowTitleTextSize: 'large',
                    rowContentColor: "#48484a",
                    rowContentTextSize: '16px',
                    rowContentPaddingTop: '10px',
                    rowContentPaddingBottom: '10px',
                    rowContentPaddingLeft: '50px',
                    rowContentPaddingRight: '150px',
                    arrowColor: "black",
                    }} />`}
            </code>
          </pre>
          <Faq
            data={data}
            styles={{
              bgColor: "white",
              titleTextColor: "#48482a",
              rowTitleColor: "#78789a",
              rowTitleTextSize: "large",
              rowContentColor: "#48484a",
              rowContentTextSize: "16px",
              rowContentPaddingTop: "10px",
              rowContentPaddingBottom: "10px",
              rowContentPaddingLeft: "50px",
              rowContentPaddingRight: "150px",
              arrowColor: "black",
            }}
          />
        </section>
      </Layout>
      <Footer />
    </Fragment>
  )
}

export default IndexPage
