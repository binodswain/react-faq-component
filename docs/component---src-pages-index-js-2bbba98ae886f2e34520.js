(window.webpackJsonp = window.webpackJsonp || []).push([
    [6],
    {
        PdVa: function (e) {
            e.exports = JSON.parse(
                '{"data":{"site":{"siteMetadata":{"title":"react-faq-component","description":"An accessible react package to render FAQ(frequently asked questions) in your React web app. Supports configurable parameters to customize as per requirement."}}}}',
            );
        },
        RXBc: function (e, t, a) {
            
            a.r(t);
            const n = a("q1tI"),
                l = a.n(n),
                r = a("Wbzz"),
                s = a("Bl7J"),
                i = a("vrFN"),
                c = a("TwNY"),
                o = a("tHFp"),
                m = a("jHpe"),
                u = a.n(m),
                p =
                    (a("y1X9"),
                    a("QWvX"),
                    a("ZgVT"),
                    a("bPOv"),
                    a("85O/"),
                    a("CjHp"),
                    a("hL/g"),
                    a("PdVa")),
                d = function () {
                    const e = p.data;
                    console.log(e);
                    const t = e.site.siteMetadata,
                        a = t.title,
                        n = t.description;
                    return l.a.createElement(
                        "header",
                        { className: "banner-sec" },
                        l.a.createElement(
                            "div",
                            {
                                style: {
                                    margin: "0 auto",
                                    maxWidth: 960,
                                    padding: "6.45rem 1.0875rem",
                                    marginBottom: "1em",
                                },
                            },
                            l.a.createElement("h1", { style: { margin: 0 } }, a),
                            l.a.createElement("p", { className: "banner-text" }, n),
                            l.a.createElement("div", { className: "button-sec" }),
                        ),
                    );
                };
            d.defaultProps = { siteTitle: "" };
            const g = d,
                E = a("W/9C"),
                b = {
                    title: "FAQ title",
                    rows: [
                        { title: "Question 1", content: "Answer 1" },
                        { title: "Question 2", content: "Answer 2" },
                    ],
                },
                f = {
                    title: "FAQ (How it works)",
                    rows: [
                        {
                            title: "Lorem ipsum dolor sit amet,",
                            content:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,\n              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.\n              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.\n              Fusce sed commodo purus, at tempus turpis.",
                        },
                        {
                            title: "Nunc maximus, magna at ultricies elementum",
                            content:
                                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
                        },
                        {
                            title: "Can I use html as content",
                            content:
                                'Yes, here is an example of a <a href="https://binodswain.github.io/react-faq-component/">link</a>',
                        },
                        { title: "What is the package version", content: "v1.0.5" },
                    ],
                },
                h = { animate: !0 },
                v = { titleTextColor: "blue", rowTitleColor: "blue" };
            t.default = function () {
                return (
                    Object(n.useEffect)(function () {
                        u.a.highlightAll();
                    }, []),
                    l.a.createElement(
                        n.Fragment,
                        null,
                        l.a.createElement(i.a, { title: "react-faq-component" }),
                        l.a.createElement(g, null),
                        l.a.createElement(
                            s.a,
                            null,
                            l.a.createElement(c.a, null),
                            l.a.createElement(
                                "section",
                                { className: "badges" },
                                l.a.createElement(
                                    "a",
                                    { href: "https://www.npmjs.com/package/react-faq-component" },
                                    l.a.createElement("img", {
                                        src: "https://badgen.net/npm/v/react-faq-component",
                                        alt: "release",
                                    }),
                                ),
                                l.a.createElement(
                                    "a",
                                    {
                                        href:
                                            "https://github.com/binodswain/react-faq-component/issues",
                                    },
                                    l.a.createElement("img", {
                                        src:
                                            "https://badgen.net/github/open-issues/binodswain/react-faq-component",
                                        alt: "open-issues",
                                    }),
                                ),
                                l.a.createElement(
                                    "a",
                                    {
                                        href:
                                            "https://github.com/binodswain/react-faq-component/blob/master/LICENSE",
                                    },
                                    l.a.createElement("img", {
                                        src:
                                            "https://badgen.net/github/license/binodswain/react-faq-component",
                                        alt: "license",
                                    }),
                                ),
                            ),
                            l.a.createElement(
                                "section",
                                { className: "demo" },
                                l.a.createElement("h2", null, "Demo"),
                                l.a.createElement(o.a, { data: f, styles: v, config: h }),
                                l.a.createElement(r.a, { to: "/demo-more" }, "More demo"),
                            ),
                            l.a.createElement(
                                "section",
                                { className: "usage" },
                                l.a.createElement("h3", null, "Usage"),
                                l.a.createElement("div", null, "Install the package."),
                                l.a.createElement(
                                    "pre",
                                    null,
                                    l.a.createElement(
                                        "code",
                                        { className: "language-markup" },
                                        "npm install --save react-faq-component",
                                    ),
                                ),
                                l.a.createElement("div", null, "Import the package."),
                                l.a.createElement(
                                    "pre",
                                    null,
                                    l.a.createElement(
                                        "code",
                                        { className: "language-jsx" },
                                        "import Faq from 'react-faq-component';",
                                    ),
                                ),
                                l.a.createElement("br", null),
                                l.a.createElement("div", null, "example: "),
                                l.a.createElement("br", null),
                                l.a.createElement(
                                    "pre",
                                    { className: "line-numbers" },
                                    l.a.createElement(
                                        "code",
                                        { className: "language-jsx" },
                                        'import React, { Component } from \'react\';\nimport Faq from \'react-faq-component\';\n\nconst data = {\n  title: "FAQ (How it works)",\n  rows: [\n    {\n      title: "Lorem ipsum dolor sit amet,",\n      content: "Lorem ipsum dolor sit amet, consectetur "\n    },\n    {\n      title: "Nunc maximus, magna at ultricies elementum",\n      content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."\n    },\n    {\n      title: "Curabitur laoreet, mauris vel blandit fringilla",\n      content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"\n    },\n    {\n      title: "What is the package version",\n      content: "v1.0.5"\n    }]\n}\n\nexport default class App extends Component {\n  render() {\n    return (\n      <div>\n        <Faq data={data}/>\n      </div>\n    )\n  }\n}\n',
                                    ),
                                ),
                            ),
                            l.a.createElement(
                                "section",
                                { className: "dataformat" },
                                l.a.createElement("h3", null, "Data format"),
                                l.a.createElement(
                                    "p",
                                    null,
                                    "The data passed into ",
                                    l.a.createElement("strong", null, "react-faq-component"),
                                    " is an object having two keys i.e ",
                                    l.a.createElement("strong", null, "title"),
                                    " (String) and",
                                    " ",
                                    l.a.createElement("strong", null, "rows"),
                                    " (array of objects).",
                                ),
                                l.a.createElement(
                                    "pre",
                                    { className: "line-numbers" },
                                    l.a.createElement(
                                        "code",
                                        { className: "language-json" },
                                        JSON.stringify(b, null, 4),
                                    ),
                                ),
                            ),
                        ),
                        l.a.createElement(E.a, null),
                    )
                );
            };
        },
    },
]);
//# sourceMappingURL=component---src-pages-index-js-2bbba98ae886f2e34520.js.map
