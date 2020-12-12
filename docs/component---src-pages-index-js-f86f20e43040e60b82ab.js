(window.webpackJsonp = window.webpackJsonp || []).push([
    [5],
    {
        PdVa: function (e) {
            e.exports = JSON.parse(
                '{"data":{"site":{"siteMetadata":{"title":"react-faq-component","description":"An accessible react package to render FAQ(frequently asked questions) in your React web app. Supports configurable parameters to customize as per requirement."}}}}',
            );
        },
        RXBc: function (e, t, a) {
            
            a.r(t);
            const n = a("q1tI"),
                r = a.n(n),
                l = (a("qePV"), a("+ZDr")),
                s = a.n(l);
            a("lw3w"), a("emEt").default.enqueue;
            const i = a("Bl7J"),
                o = a("vrFN"),
                c = a("TwNY"),
                m = a("oPzb"),
                u = a("jHpe"),
                p = a.n(u),
                f =
                    (a("y1X9"),
                    a("QWvX"),
                    a("ZgVT"),
                    a("bPOv"),
                    a("85O/"),
                    a("CjHp"),
                    a("hL/g"),
                    a("PdVa")),
                d = function () {
                    const e = f.data;
                    console.log(e);
                    const t = e.site.siteMetadata,
                        a = t.title,
                        n = t.description;
                    return r.a.createElement(
                        "header",
                        { className: "banner-sec" },
                        r.a.createElement(
                            "div",
                            {
                                style: {
                                    margin: "0 auto",
                                    maxWidth: 960,
                                    padding: "6.45rem 1.0875rem",
                                    marginBottom: "1em",
                                },
                            },
                            r.a.createElement("h1", { style: { margin: 0 } }, a),
                            r.a.createElement("p", { className: "banner-text" }, n),
                            r.a.createElement("div", { className: "button-sec" }),
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
                h = {
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
                v = { animate: !0 },
                N = { titleTextColor: "blue", rowTitleColor: "blue" };
            t.default = function () {
                return (
                    Object(n.useEffect)(function () {
                        p.a.highlightAll();
                    }, []),
                    r.a.createElement(
                        n.Fragment,
                        null,
                        r.a.createElement(o.a, { title: "react-faq-component" }),
                        r.a.createElement(g, null),
                        r.a.createElement(
                            i.a,
                            null,
                            r.a.createElement(c.a, null),
                            r.a.createElement(
                                "section",
                                { className: "badges" },
                                r.a.createElement(
                                    "a",
                                    { href: "https://www.npmjs.com/package/react-faq-component" },
                                    r.a.createElement("img", {
                                        src: "https://badgen.net/npm/v/react-faq-component",
                                        alt: "release",
                                    }),
                                ),
                                r.a.createElement(
                                    "a",
                                    {
                                        href:
                                            "https://github.com/binodswain/react-faq-component/issues",
                                    },
                                    r.a.createElement("img", {
                                        src:
                                            "https://badgen.net/github/open-issues/binodswain/react-faq-component",
                                        alt: "open-issues",
                                    }),
                                ),
                                r.a.createElement(
                                    "a",
                                    {
                                        href:
                                            "https://github.com/binodswain/react-faq-component/blob/master/LICENSE",
                                    },
                                    r.a.createElement("img", {
                                        src:
                                            "https://badgen.net/github/license/binodswain/react-faq-component",
                                        alt: "license",
                                    }),
                                ),
                            ),
                            r.a.createElement(
                                "section",
                                { className: "demo" },
                                r.a.createElement("h2", null, "Demo"),
                                r.a.createElement(m.a, { data: h, styles: N, config: v }),
                                r.a.createElement(s.a, { to: "/demo-more" }, "More demo"),
                            ),
                            r.a.createElement(
                                "section",
                                { className: "usage" },
                                r.a.createElement("h3", null, "Usage"),
                                r.a.createElement("div", null, "Install the package."),
                                r.a.createElement(
                                    "pre",
                                    null,
                                    r.a.createElement(
                                        "code",
                                        { className: "language-markup" },
                                        "npm install --save react-faq-component",
                                    ),
                                ),
                                r.a.createElement("div", null, "Import the package."),
                                r.a.createElement(
                                    "pre",
                                    null,
                                    r.a.createElement(
                                        "code",
                                        { className: "language-jsx" },
                                        "import Faq from 'react-faq-component';",
                                    ),
                                ),
                                r.a.createElement("br", null),
                                r.a.createElement("div", null, "example: "),
                                r.a.createElement("br", null),
                                r.a.createElement(
                                    "pre",
                                    { className: "line-numbers" },
                                    r.a.createElement(
                                        "code",
                                        { className: "language-jsx" },
                                        'import React, { Component } from \'react\';\nimport Faq from \'react-faq-component\';\n\nconst data = {\n  title: "FAQ (How it works)",\n  rows: [\n    {\n      title: "Lorem ipsum dolor sit amet,",\n      content: "Lorem ipsum dolor sit amet, consectetur "\n    },\n    {\n      title: "Nunc maximus, magna at ultricies elementum",\n      content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."\n    },\n    {\n      title: "Curabitur laoreet, mauris vel blandit fringilla",\n      content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"\n    },\n    {\n      title: "What is the package version",\n      content: "v1.0.5"\n    }]\n}\n\nexport default class App extends Component {\n  render() {\n    return (\n      <div>\n        <Faq data={data}/>\n      </div>\n    )\n  }\n}\n',
                                    ),
                                ),
                            ),
                            r.a.createElement(
                                "section",
                                { className: "dataformat" },
                                r.a.createElement("h3", null, "Data format"),
                                r.a.createElement(
                                    "p",
                                    null,
                                    "The data passed into ",
                                    r.a.createElement("strong", null, "react-faq-component"),
                                    " is an object having two keys i.e ",
                                    r.a.createElement("strong", null, "title"),
                                    " (String) and",
                                    " ",
                                    r.a.createElement("strong", null, "rows"),
                                    " (array of objects).",
                                ),
                                r.a.createElement(
                                    "pre",
                                    { className: "line-numbers" },
                                    r.a.createElement(
                                        "code",
                                        { className: "language-json" },
                                        JSON.stringify(b, null, 4),
                                    ),
                                ),
                            ),
                        ),
                        r.a.createElement(E.a, null),
                    )
                );
            };
        },
        WJkJ: function (e, t) {
            e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
        },
        WKiH: function (e, t, a) {
            const n = a("HYAF"),
                r = "[" + a("WJkJ") + "]",
                l = RegExp("^" + r + r + "*"),
                s = RegExp(r + r + "*$"),
                i = function (e) {
                    return function (t) {
                        let a = String(n(t));
                        return 1 & e && (a = a.replace(l, "")), 2 & e && (a = a.replace(s, "")), a;
                    };
                };
            e.exports = { start: i(1), end: i(2), trim: i(3) };
        },
        lw3w: function (e, t, a) {
            let n;
            e.exports = ((n = a("rzlk")) && n.default) || n;
        },
        qePV: function (e, t, a) {
            
            const n = a("g6v/"),
                r = a("2oRo"),
                l = a("lMq5"),
                s = a("busE"),
                i = a("UTVS"),
                o = a("xrYK"),
                c = a("cVYH"),
                m = a("wE6v"),
                u = a("0Dky"),
                p = a("fHMY"),
                f = a("JBy8").f,
                d = a("Bs8V").f,
                g = a("m/L8").f,
                E = a("WKiH").trim,
                b = r.Number,
                h = b.prototype,
                v = "Number" == o(p(h)),
                N = function (e) {
                    let t,
                        a,
                        n,
                        r,
                        l,
                        s,
                        i,
                        o,
                        c = m(e, !1);
                    if ("string" == typeof c && c.length > 2)
                        if (43 === (t = (c = E(c)).charCodeAt(0)) || 45 === t) {
                            if (88 === (a = c.charCodeAt(2)) || 120 === a) return NaN;
                        } else if (48 === t) {
                            switch (c.charCodeAt(1)) {
                                case 66:
                                case 98:
                                    (n = 2), (r = 49);
                                    break;
                                case 79:
                                case 111:
                                    (n = 8), (r = 55);
                                    break;
                                default:
                                    return +c;
                            }
                            for (s = (l = c.slice(2)).length, i = 0; i < s; i++)
                                if ((o = l.charCodeAt(i)) < 48 || o > r) return NaN;
                            return parseInt(l, n);
                        }
                    return +c;
                };
            if (l("Number", !b(" 0o1") || !b("0b1") || b("+0x1"))) {
                for (
                    var w,
                        q = function (e) {
                            const t = arguments.length < 1 ? 0 : e,
                                a = this;
                            return a instanceof q &&
                                (v
                                    ? u(function () {
                                        h.valueOf.call(a);
                                    })
                                    : "Number" != o(a))
                                ? c(new b(N(t)), a, q)
                                : N(t);
                        },
                        I = n
                            ? f(b)
                            : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                                ",",
                            ),
                        x = 0;
                    I.length > x;
                    x++
                )
                    i(b, (w = I[x])) && !i(q, w) && g(q, w, d(b, w));
                (q.prototype = h), (h.constructor = q), s(r, "Number", q);
            }
        },
        rzlk: function (e, t, a) {
            
            a.r(t);
            a("zKZe");
            const n = a("q1tI"),
                r = a.n(n),
                l = a("IOVJ");
            t.default = function (e) {
                const t = e.location,
                    a = e.pageResources;
                return a
                    ? r.a.createElement(
                        l.a,
                        Object.assign({ location: t, pageResources: a }, a.json),
                    )
                    : null;
            };
        },
    },
]);
//# sourceMappingURL=component---src-pages-index-js-f86f20e43040e60b82ab.js.map
