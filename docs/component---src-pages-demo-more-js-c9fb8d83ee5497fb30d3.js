(window.webpackJsonp = window.webpackJsonp || []).push([
    [4],
    {
        Agvw: function (e, t, n) {
            
            n.r(t);
            const a = n("q1tI"),
                o = n.n(a),
                l = n("Bl7J"),
                r = n("vrFN"),
                i = n("TwNY"),
                s = n("W/9C"),
                m = n("oPzb"),
                u = n("jHpe"),
                c = n.n(u),
                d =
                    (n("y1X9"),
                    n("QWvX"),
                    n("ZgVT"),
                    n("bPOv"),
                    n("85O/"),
                    n("CjHp"),
                    n("hL/g"),
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
                    Object(a.useEffect)(function () {
                        c.a.highlightAll();
                    }, []),
                    o.a.createElement(
                        a.Fragment,
                        null,
                        o.a.createElement(
                            l.a,
                            null,
                            o.a.createElement(r.a, { title: "More demos" }),
                            o.a.createElement(i.a, null),
                            o.a.createElement("h1", null, "More Demos"),
                            o.a.createElement(
                                "section",
                                { className: "demo" },
                                o.a.createElement("h2", null, "View 1 (with animation):"),
                                o.a.createElement(
                                    "pre",
                                    null,
                                    o.a.createElement(
                                        "code",
                                        { className: "language-jsx" },
                                        '<Faq \n    data={data}\n    styles={{\n        titleTextColor: "green",\n        rowTitleColor: "mediumseagreen"\n    }} \n/>',
                                    ),
                                ),
                                o.a.createElement(m.a, {
                                    data: d,
                                    styles: {
                                        titleTextColor: "green",
                                        rowTitleColor: "mediumseagreen",
                                    },
                                }),
                                o.a.createElement(
                                    "h2",
                                    null,
                                    "View 2 (with animation, custom icon):",
                                ),
                                o.a.createElement(
                                    "pre",
                                    null,
                                    o.a.createElement(
                                        "code",
                                        { className: "language-jsx" },
                                        '<Faq \n    data={data} \n    styles={{\n        titleTextColor: "green",\n        rowTitleColor: "mediumseagreen"\n    }} \n    config={{\n        arrowIcon: "V",\n    }}\n/>',
                                    ),
                                ),
                                o.a.createElement(m.a, {
                                    data: d,
                                    styles: {
                                        titleTextColor: "green",
                                        rowTitleColor: "mediumseagreen",
                                        arrowColor: "red",
                                    },
                                    config: { arrowIcon: "V" },
                                }),
                                o.a.createElement(
                                    "h2",
                                    null,
                                    "View 3 (with different title colors):",
                                ),
                                o.a.createElement(
                                    "pre",
                                    null,
                                    o.a.createElement(
                                        "code",
                                        { className: "language-jsx" },
                                        '<Faq \n    data={data} \n    styles={{\n        titleTextColor: "green",\n        rowTitleColor: "mediumseagreen",\n        rowContentColor: "grey"\n    }}\n/>',
                                    ),
                                ),
                                o.a.createElement(m.a, {
                                    data: d,
                                    styles: {
                                        titleTextColor: "green",
                                        rowTitleColor: "mediumseagreen",
                                        rowContentColor: "grey",
                                    },
                                }),
                                o.a.createElement("h2", null, "View 4 (with content padding):"),
                                o.a.createElement(
                                    "pre",
                                    null,
                                    o.a.createElement(
                                        "code",
                                        { className: "language-jsx" },
                                        "<Faq \n    data={data} \n    styles={{\n        bgColor: \"white\",\n        titleTextColor: \"#48482a\",\n        rowTitleColor: \"#78789a\",\n        rowTitleTextSize: 'large',\n        rowContentColor: \"#48484a\",\n        rowContentTextSize: '16px',\n        rowContentPaddingTop: '10px',\n        rowContentPaddingBottom: '10px',\n        rowContentPaddingLeft: '50px',\n        rowContentPaddingRight: '150px',\n        arrowColor: \"black\",\n        }} \n/>",
                                    ),
                                ),
                                o.a.createElement(m.a, {
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
                                o.a.createElement(
                                    "h2",
                                    null,
                                    "View 5 (with custom transition and tabFocus):",
                                ),
                                o.a.createElement(
                                    "pre",
                                    null,
                                    o.a.createElement(
                                        "code",
                                        { className: "language-jsx" },
                                        '<Faq data={data} \n    styles={{\n        transitionDuration: "2.5s",\n        timingFunc: "linear"\n    }}\n    config={{\n        tabFocus: true,\n    }}\n/>',
                                    ),
                                ),
                                o.a.createElement(m.a, {
                                    data: d,
                                    styles: { transitionDuration: "2.5s", timingFunc: "linear" },
                                    config: { tabFocus: !0 },
                                }),
                            ),
                        ),
                        o.a.createElement(s.a, null),
                    )
                );
            };
        },
    },
]);
//# sourceMappingURL=component---src-pages-demo-more-js-c9fb8d83ee5497fb30d3.js.map
