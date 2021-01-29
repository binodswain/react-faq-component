(window.webpackJsonp = window.webpackJsonp || []).push([
    [5],
    {
        Agvw: function (e, t, n) {
            
            n.r(t);
            const a = n("q1tI"),
                i = n.n(a),
                s = n("Bl7J"),
                o = n("vrFN"),
                r = n("TwNY"),
                l = n("W/9C"),
                u = n("tHFp"),
                m = n("jHpe"),
                c = n.n(m),
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
                                    "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat",
                                content:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,\n            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.\n            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.\n            Fusce sed commodo purus, at tempus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,\n            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.\n            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.\n            Fusce sed commodo purus, at tempus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,\n            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.\n            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.\n            Fusce sed commodo purus, at tempus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,\n            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.\n            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.\n            Fusce sed commodo purus, at tempus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,\n            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.\n            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.\n            Fusce sed commodo purus, at tempus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,\n            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.\n            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.\n            Fusce sed commodo purus, at tempus turpis.",
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
                            { title: "What is the package version", content: "v1.0.0" },
                        ],
                    });
            function p() {
                const e = Object(a.useState)(null),
                    t = e[0],
                    n = e[1],
                    s = Object(a.useState)(!1),
                    o = s[0],
                    r = s[1];
                return (
                    Object(a.useEffect)(
                        function () {
                            t &&
                                (setTimeout(function () {
                                    t[0].expand();
                                }, 2500),
                                setTimeout(function () {
                                    t[0].close();
                                }, 5e3),
                                setTimeout(function () {
                                    t[0].scrollIntoView();
                                }, 1e4));
                        },
                        [t],
                    ),
                    Object(a.useEffect)(function () {
                        new IntersectionObserver(
                            function (e, t) {
                                o ||
                                    e.forEach(function (e) {
                                        e.intersectionRatio > 0 && r(!0);
                                    });
                            },
                            { root: null, rootMargin: "0px", threshold: 1 },
                        ).observe(document.getElementById("external-toggle"));
                    }, []),
                    i.a.createElement(
                        "div",
                        { id: "external-toggle" },
                        o
                            ? i.a.createElement(
                                "div",
                                null,
                                i.a.createElement(u.a, { data: d, getRowOptions: n }),
                            )
                            : null,
                    )
                );
            }
            const g = {
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
            };
            t.default = function () {
                return (
                    Object(a.useEffect)(function () {
                        c.a.highlightAll();
                    }, []),
                    i.a.createElement(
                        a.Fragment,
                        null,
                        i.a.createElement(
                            s.a,
                            null,
                            i.a.createElement(o.a, { title: "More demos" }),
                            i.a.createElement(r.a, null),
                            i.a.createElement("h1", null, "More Demos"),
                            i.a.createElement(
                                "section",
                                { className: "demo" },
                                i.a.createElement("h2", null, "View 1 (with animation):"),
                                i.a.createElement(
                                    "pre",
                                    null,
                                    i.a.createElement(
                                        "code",
                                        { className: "language-jsx" },
                                        '<Faq \n    data={data}\n    styles={{\n        titleTextColor: "green",\n        rowTitleColor: "mediumseagreen"\n    }} \n/>',
                                    ),
                                ),
                                i.a.createElement(u.a, {
                                    data: g,
                                    styles: {
                                        titleTextColor: "green",
                                        rowTitleColor: "mediumseagreen",
                                    },
                                }),
                                i.a.createElement(
                                    "h2",
                                    null,
                                    "View 2 (with animation, custom icon):",
                                ),
                                i.a.createElement(
                                    "pre",
                                    null,
                                    i.a.createElement(
                                        "code",
                                        { className: "language-jsx" },
                                        '<Faq \n    data={data} \n    styles={{\n        titleTextColor: "green",\n        rowTitleColor: "mediumseagreen"\n    }} \n    config={{\n        arrowIcon: "V",\n    }}\n/>',
                                    ),
                                ),
                                i.a.createElement(u.a, {
                                    data: g,
                                    styles: {
                                        titleTextColor: "green",
                                        rowTitleColor: "mediumseagreen",
                                        arrowColor: "red",
                                    },
                                    config: { arrowIcon: "V" },
                                }),
                                i.a.createElement(
                                    "h2",
                                    null,
                                    "View 3 (with different title colors):",
                                ),
                                i.a.createElement(
                                    "pre",
                                    null,
                                    i.a.createElement(
                                        "code",
                                        { className: "language-jsx" },
                                        '<Faq \n    data={data} \n    styles={{\n        titleTextColor: "green",\n        rowTitleColor: "mediumseagreen",\n        rowContentColor: "grey"\n    }}\n/>',
                                    ),
                                ),
                                i.a.createElement(u.a, {
                                    data: g,
                                    styles: {
                                        titleTextColor: "green",
                                        rowTitleColor: "mediumseagreen",
                                        rowContentColor: "grey",
                                    },
                                }),
                                i.a.createElement("h2", null, "View 4 (with content padding):"),
                                i.a.createElement(
                                    "pre",
                                    null,
                                    i.a.createElement(
                                        "code",
                                        { className: "language-jsx" },
                                        "<Faq \n    data={data} \n    styles={{\n        bgColor: \"white\",\n        titleTextColor: \"#48482a\",\n        rowTitleColor: \"#78789a\",\n        rowTitleTextSize: 'large',\n        rowContentColor: \"#48484a\",\n        rowContentTextSize: '16px',\n        rowContentPaddingTop: '10px',\n        rowContentPaddingBottom: '10px',\n        rowContentPaddingLeft: '50px',\n        rowContentPaddingRight: '150px',\n        arrowColor: \"black\",\n        }} \n/>",
                                    ),
                                ),
                                i.a.createElement(u.a, {
                                    data: g,
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
                                i.a.createElement(
                                    "h2",
                                    null,
                                    "View 5 (with custom transition and tabFocus):",
                                ),
                                i.a.createElement(
                                    "pre",
                                    null,
                                    i.a.createElement(
                                        "code",
                                        { className: "language-jsx" },
                                        '<Faq data={data} \n    styles={{\n        transitionDuration: "2.5s",\n        timingFunc: "linear"\n    }}\n    config={{\n        tabFocus: true,\n    }}\n/>',
                                    ),
                                ),
                                i.a.createElement(u.a, {
                                    data: g,
                                    styles: { transitionDuration: "2.5s", timingFunc: "linear" },
                                    config: { tabFocus: !0 },
                                }),
                                i.a.createElement(
                                    "h2",
                                    null,
                                    "View 6 (with custom transition and tabFocus):",
                                ),
                                i.a.createElement(
                                    "pre",
                                    null,
                                    i.a.createElement(
                                        "code",
                                        { className: "language-jsx" },
                                        "export default function App() {\n    const [rows, setRowsOption] = useState(null);\n\n    useEffect(() => {\n        if (rows) {\n            setTimeout(() => {\n                rows[0].expand();\n            }, 2500);\n\n            setTimeout(() => {\n                rows[0].close();\n            }, 5000);\n\n            setTimeout(() => {\n                rows[0].scrollIntoView();\n            }, 10000);\n        }\n    }, [rows]);\n\n    return (\n        <div>\n          <Faq data={data} getRowOptions={setRowsOption} />\n        </div>\n    );\n}\n\n            ",
                                    ),
                                ),
                                i.a.createElement(p, null),
                            ),
                        ),
                        i.a.createElement(l.a, null),
                    )
                );
            };
        },
    },
]);
//# sourceMappingURL=component---src-pages-demo-more-js-f7dde2d59c1d109d892c.js.map
