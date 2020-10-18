(window.webpackJsonp = window.webpackJsonp || []).push([
    [5],
    {
        Agvw: function (e, t, a) {
            
            a.r(t);
            const n = a("q1tI"),
                l = a.n(n),
                o = a("Bl7J"),
                r = a("vrFN"),
                i = a("TwNY"),
                s = a("W/9C"),
                m = a("tHFp"),
                u = a("jHpe"),
                c = a.n(u),
                d =
                    (a("y1X9"),
                    a("QWvX"),
                    a("ZgVT"),
                    a("bPOv"),
                    a("85O/"),
                    a("CjHp"),
                    a("hL/g"),
                    {
                        title: "FAQ (How it works)",
                        rows: [
                            {
                                title:
                                    "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat Lorem ipsum dolor sit amet, ",
                                content:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,\n              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.\n              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.\n              Fusce sed commodo purus, at tempus turpis.",
                            },
                            {
                                title: "Nunc maximus, magna at ultricies elementum",
                                content:
                                    "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
                            },
                            {
                                title: "Can I use html as content",
                                content:
                                    'Yes, here is an example of a <a href="https://binodswain.github.io/react-faq-component/">link</a>',
                            },
                            { title: "What is the package version", content: "v1.0.5" },
                        ],
                    });
            t.default = function () {
                return (
                    Object(n.useEffect)(function () {
                        c.a.highlightAll();
                    }, []),
                    l.a.createElement(
                        n.Fragment,
                        null,
                        l.a.createElement(
                            o.a,
                            null,
                            l.a.createElement(r.a, { title: "More demos" }),
                            l.a.createElement(i.a, null),
                            l.a.createElement("h1", null, "More Demos"),
                            l.a.createElement(
                                "section",
                                { className: "demo" },
                                l.a.createElement("h2", null, "View 1 (with animation):"),
                                l.a.createElement(
                                    "pre",
                                    null,
                                    l.a.createElement(
                                        "code",
                                        { className: "language-jsx" },
                                        '<Faq data={data} styles={{\n                    titleTextColor: "green",\n                    rowTitleColor: "mediumseagreen"\n                    }} />',
                                    ),
                                ),
                                l.a.createElement(m.a, {
                                    data: d,
                                    styles: {
                                        titleTextColor: "green",
                                        rowTitleColor: "mediumseagreen",
                                    },
                                    config: { animate: !0 },
                                }),
                                l.a.createElement(
                                    "h2",
                                    null,
                                    "View 2 (with animation, custom icon):",
                                ),
                                l.a.createElement(
                                    "pre",
                                    null,
                                    l.a.createElement(
                                        "code",
                                        { className: "language-jsx" },
                                        '<Faq data={data} styles={{\n                    titleTextColor: "green",\n                    rowTitleColor: "mediumseagreen"\n                    }} />',
                                    ),
                                ),
                                l.a.createElement(m.a, {
                                    data: d,
                                    styles: {
                                        titleTextColor: "green",
                                        rowTitleColor: "mediumseagreen",
                                        arrowColor: "red",
                                    },
                                    config: { animate: !0, arrowIcon: "V" },
                                }),
                                l.a.createElement("h2", null, "View 3:"),
                                l.a.createElement(
                                    "pre",
                                    null,
                                    l.a.createElement(
                                        "code",
                                        { className: "language-jsx" },
                                        '<Faq data={data} styles={{\n                    titleTextColor: "green",\n                    rowTitleColor: "mediumseagreen"\n                    }} />',
                                    ),
                                ),
                                l.a.createElement(m.a, {
                                    data: d,
                                    styles: {
                                        titleTextColor: "green",
                                        rowTitleColor: "mediumseagreen",
                                    },
                                }),
                                l.a.createElement("h2", null, "View 4:"),
                                l.a.createElement(
                                    "pre",
                                    null,
                                    l.a.createElement(
                                        "code",
                                        { className: "language-jsx" },
                                        '<Faq data={data} styles={{\n                    titleTextColor: "green",\n                    rowContentColor: "grey"\n                    }} />',
                                    ),
                                ),
                                l.a.createElement(m.a, {
                                    data: d,
                                    styles: { titleTextColor: "green", rowContentColor: "grey" },
                                }),
                                l.a.createElement("h2", null, "View 5:"),
                                l.a.createElement(
                                    "pre",
                                    null,
                                    l.a.createElement(
                                        "code",
                                        { className: "language-jsx" },
                                        "<Faq data={data} styles={{\n                    bgColor: \"white\",\n                    titleTextColor: \"#48482a\",\n                    rowTitleColor: \"#78789a\",\n                    rowTitleTextSize: 'large',\n                    rowContentColor: \"#48484a\",\n                    rowContentTextSize: '16px',\n                    rowContentPaddingTop: '10px',\n                    rowContentPaddingBottom: '10px',\n                    rowContentPaddingLeft: '50px',\n                    rowContentPaddingRight: '150px',\n                    arrowColor: \"black\",\n                    }} />",
                                    ),
                                ),
                                l.a.createElement(m.a, {
                                    data: d,
                                    styles: {
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
                                    },
                                }),
                            ),
                        ),
                        l.a.createElement(s.a, null),
                    )
                );
            };
        },
    },
]);
//# sourceMappingURL=component---src-pages-demo-more-js-1bd810612e408df8c2e7.js.map
