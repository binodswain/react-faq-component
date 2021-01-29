import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gitfork from "../components/githubFork"
import Footer from "../components/footer"
import Faq from "react-faq-component"
import Prism from "prismjs"
import { Fragment } from "react"
import FaqExternal from "../components/faqToggleOption"

const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title:
        "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat Lorem ipsum dolor sit amet, ",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
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
      {/* <header className="banner-sec">
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.0875rem`,
            marginBottom: `1em`,
          }}
        >
          <h1 style={{ margin: 0 }}>react-faq-component</h1>
        </div>
      </header> */}

      <Layout>
        <SEO title="More demos" />
        <Gitfork />
        <h1>More Demos</h1>
        <section className="demo">
          <h2>View 1 (with animation):</h2>
          <pre>
            <code className="language-jsx">
              {`<Faq 
    data={data}
    styles={{
        titleTextColor: "green",
        rowTitleColor: "mediumseagreen"
    }} 
/>`}
            </code>
          </pre>
          <Faq
            data={data}
            styles={{
              titleTextColor: "green",
              rowTitleColor: "mediumseagreen",
            }}
          />

          <h2>View 2 (with animation, custom icon):</h2>
          <pre>
            <code className="language-jsx">
              {`<Faq 
    data={data} 
    styles={{
        titleTextColor: "green",
        rowTitleColor: "mediumseagreen"
    }} 
    config={{
        arrowIcon: "V",
    }}
/>`}
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
              arrowIcon: "V",
            }}
          />

          <h2>View 3 (with different title colors):</h2>
          <pre>
            <code className="language-jsx">
              {`<Faq 
    data={data} 
    styles={{
        titleTextColor: "green",
        rowTitleColor: "mediumseagreen",
        rowContentColor: "grey"
    }}
/>`}
            </code>
          </pre>
          <Faq
            data={data}
            styles={{
              titleTextColor: "green",
              rowTitleColor: "mediumseagreen",
              rowContentColor: "grey",
            }}
          />

          <h2>View 4 (with content padding):</h2>
          <pre>
            <code className="language-jsx">
              {`<Faq 
    data={data} 
    styles={{
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
        }} 
/>`}
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

          <h2>View 5 (with custom transition and tabFocus):</h2>
          <pre>
            <code className="language-jsx">{`<Faq data={data} 
    styles={{
        transitionDuration: "2.5s",
        timingFunc: "linear"
    }}
    config={{
        tabFocus: true,
    }}
/>`}</code>
          </pre>
          <Faq
            data={data}
            styles={{
              transitionDuration: "2.5s",
              timingFunc: "linear",
            }}
            config={{
              tabFocus: true,
            }}
          />

          <h2>View 6 (with custom transition and tabFocus):</h2>
          <pre>
            <code className="language-jsx">{`export default function App() {
    const [rows, setRowsOption] = useState(null);

    useEffect(() => {
        if (rows) {
            setTimeout(() => {
                rows[0].expand();
            }, 2500);

            setTimeout(() => {
                rows[0].close();
            }, 5000);

            setTimeout(() => {
                rows[0].scrollIntoView();
            }, 10000);
        }
    }, [rows]);

    return (
        <div>
          <Faq data={data} getRowOptions={setRowsOption} />
        </div>
    );
}

            `}</code>
          </pre>
          <FaqExternal />
        </section>
      </Layout>
      <Footer />
    </Fragment>
  )
}

export default IndexPage
