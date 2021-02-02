(window.webpackJsonp = window.webpackJsonp || []).push([
    [5],
    {
        Agvw: function (e, t, n) {
            
            n.r(t);
            const a = n("q1tI"),
                i = n.n(a),
                o = n("Bl7J"),
                r = n("vrFN"),
                s = n("TwNY"),
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
                    o = Object(a.useState)(0),
                    r = o[0],
                    s = o[1];
                return i.a.createElement(
                    "div",
                    { id: "external-toggle" },
                    i.a.createElement(
                        "div",
                        { className: "row-option" },
                        i.a.createElement("label", { htmlFor: "rownum" }, "Enter row number:"),
                        i.a.createElement("input", {
                            type: "number",
                            id: "rownum",
                            value: r,
                            onChange: function (e) {
                                return s(e.target.value);
                            },
                            min: "0",
                            max: "3",
                            disabled: !t,
                        }),
                        i.a.createElement(
                            "button",
                            {
                                type: "button",
                                onClick: function () {
                                    t && t[r].expand();
                                },
                            },
                            "Exapnd row",
                        ),
                        i.a.createElement(
                            "button",
                            {
                                type: "button",
                                onClick: function () {
                                    t && t[r].close();
                                },
                            },
                            "Close row",
                        ),
                    ),
                    i.a.createElement(
                        "div",
                        null,
                        i.a.createElement(u.a, { data: d, getRowOptions: n }),
                    ),
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
                            o.a,
                            null,
                            i.a.createElement(r.a, { title: "More demos" }),
                            i.a.createElement(s.a, null),
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
                                i.a.createElement("h2", null, "View 6 (with external row toggle):"),
                                i.a.createElement(
                                    "pre",
                                    null,
                                    i.a.createElement(
                                        "code",
                                        { className: "language-jsx" },
                                        'export default function App() {\n    const [rows, setRowsOption] = useState(null)\n    const [row, setRow] = useState(0)\n  \n    const expand = () => {\n        rows && rows[row].expand()\n    }\n  \n    const close = () => {\n        rows && rows[row].close()\n    }\n\n    return (\n        <div>\n            <Faq data={data} getRowOptions={setRowsOption} />\n\n            <div className="row-option">\n                <label htmlFor="rownum">Enter row number:</label>\n                <input type="number" id="rownum"\n                    value={row} onChange={e => setRow(e.target.value)}\n                    min="0" max="3" disabled={!rows}\n                />\n                <button type="button" onClick={expand}>\n                    Exapnd row\n                </button>\n\n                <button type="button" onClick={close}>\n                    Close row\n                </button>\n            </div>\n        </div>\n    );\n}\n\n            ',
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
//# sourceMappingURL=component---src-pages-demo-more-js-49fa05d97992b1e4c641.js.map
