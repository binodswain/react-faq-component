import React from "react";
import Faq from "./";
import TestRenderer from "react-test-renderer";
import ReactTestUtils from "react-dom/test-utils";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

const data = {
    title: "FAQ (How it works)",
    rows: [
        {
            title: "Lorem ipsum dolor sit amet,",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempo.
                Aenean vel turpis feugiat, ultricies metus at, consequat velit. Curabitur est nibh,
                 varius in tellus nec, mattis pulvinar metus. In maximus cursus lorem, nec laoreet
                 velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                Fusce sed commodo purus, at tempus turpis.`,
        },
        {
            title: "Nunc maximus, magna at ultricies elementum",
            content: `Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam,
                 vitae convallis ex tortor sed dolor.`,
        },
        {
            title: "Can I use html as content",
            content: `Yes, here is an example of
                    a <a href="https://binodswain.github.io/react-faq-component/">link</a>`,
        },
        {
            title: "What is the package version",
            content: "v1.0.0",
        },
    ],
};

describe("FAQ component setup", () => {
    const testRenderer = TestRenderer.create(<Faq data={data} />);
    const testRendererEmpty = TestRenderer.create(<Faq />);
    it("is truthy", () => {
        expect(Faq).toBeTruthy();
    });

    it("should render FAQ with child element", () => {
        const comp = testRenderer.toJSON();
        expect(comp.children.length).toEqual(2);
    });

    it("should render FAQ with no child element", () => {
        const comp = testRendererEmpty.toJSON();
        expect(comp.children).toEqual(null);
    });
});

describe("Accessibility attribute", () => {
    let container;
    let faqBody;
    let firstRow;
    let rowTitle;
    let rowContent;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);

        // Test first render and componentDidMount
        act(() => {
            ReactDOM.render(<Faq data={data} />, container);
        });
        faqBody = container.querySelector("section.faq-body");
        firstRow = faqBody.children[0];
        rowTitle = firstRow.querySelector(".row-title");
        rowContent = firstRow.querySelector(".row-content");
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    });

    it(" should render a row with all required ARIA attributes", () => {
        expect(rowTitle.getAttribute("aria-expanded")).toBe("false");
        expect(rowTitle.getAttribute("aria-controls")).toBe(rowContent.id);
        expect(rowContent.getAttribute("aria-hidden")).toBe("true");
        expect(rowContent.getAttribute("aria-expanded")).toBe("false");
    });

    it("should update ARIA attributes after click event ", () => {
        // Test second render and componentDidUpdate
        // expand the row item
        act(() => {
            rowTitle.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });

        expect(rowTitle.getAttribute("aria-expanded")).toBe("true");
        expect(rowTitle.getAttribute("aria-controls")).toBe(rowContent.id);
        expect(rowContent.getAttribute("aria-hidden")).toBe("false");
        expect(rowContent.getAttribute("aria-expanded")).toBe("true");
    });

    it("should update ARIA attributes after keyboard space event ", () => {
        // Test second render and componentDidUpdate
        // expand the row item
        act(() => {
            ReactTestUtils.Simulate.keyPress(rowTitle, { keyCode: 32 });
        });

        expect(rowTitle.getAttribute("aria-expanded")).toBe("true");
        expect(rowTitle.getAttribute("aria-controls")).toBe(rowContent.id);
        expect(rowContent.getAttribute("aria-hidden")).toBe("false");
        expect(rowContent.getAttribute("aria-expanded")).toBe("true");

        // Close expanded rowitem
        act(() => {
            ReactTestUtils.Simulate.keyPress(rowTitle, { keyCode: 32 });
        });

        expect(rowTitle.getAttribute("aria-expanded")).toBe("false");
        expect(rowTitle.getAttribute("aria-controls")).toBe(rowContent.id);
        expect(rowContent.getAttribute("aria-hidden")).toBe("true");
        expect(rowContent.getAttribute("aria-expanded")).toBe("false");
    });

    it("should update ARIA attributes after keyboard enter event ", () => {
        // Test second render and componentDidUpdate
        // expand the row item
        act(() => {
            ReactTestUtils.Simulate.keyPress(rowTitle, { keyCode: 13 });
        });

        expect(rowTitle.getAttribute("aria-expanded")).toBe("true");
        expect(rowTitle.getAttribute("aria-controls")).toBe(rowContent.id);
        expect(rowContent.getAttribute("aria-hidden")).toBe("false");
        expect(rowContent.getAttribute("aria-expanded")).toBe("true");

        // Close expanded rowitem
        act(() => {
            ReactTestUtils.Simulate.keyPress(rowTitle, { keyCode: 13 });
        });
        expect(rowTitle.getAttribute("aria-expanded")).toBe("false");
        expect(rowTitle.getAttribute("aria-controls")).toBe(rowContent.id);
        expect(rowContent.getAttribute("aria-hidden")).toBe("true");
        expect(rowContent.getAttribute("aria-expanded")).toBe("false");
    });
});
