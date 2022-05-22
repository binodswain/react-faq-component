import React, { Component } from "react";
import Faq from "react-faq-component";
import { Link } from "react-router-dom";

const data = {
    title: "FAQ (How it works)",
    rows: [
        {
            title:
                "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
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
        {
            title: "How about <Link/> to other page (react-router-dom)",
            content: (
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            ),
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    // rowContentColor: 'grey',
    timingFunc: "linear",
};

const config = {
    animate: true,
    arrowIcon: "V",
    tabFocus: true,
};

export default class WithStyleComp extends Component {
    render() {
        return (
            <div>
                <h2 className="section-title">Component with style parameter</h2>

                <div>
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
                            transitionDuration: "5s",
                            timingFunc: "linear",
                        }}
                    />
                    <br />
                    <br />
                    <br />
                    <Faq
                        data={data}
                        styles={{
                            titleTextColor: "green",
                            rowContentColor: "grey",
                        }}
                        config={config}
                    />
                    <br />
                    <br />
                    <br />
                    <Faq
                        data={data}
                        styles={styles}
                        config={{
                            animate: false,
                            arrowIcon: "V",
                        }}
                    />
                    <br />
                    <br />
                    <br />
                    <Faq
                        data={data}
                        styles={{
                            titleTextColor: "green",
                            rowTitleColor: "mediumseagreen",
                            arrowColor: "red",
                        }}
                        config={config}
                    />
                    <br />
                    <br />
                    <br />

                    <Faq
                        data={data}
                        styles={{
                            titleTextColor: "green",
                            rowContentColor: "grey",
                        }}
                        config={config}
                    />

                    <br />
                    <br />
                    <br />

                    <Faq
                        data={data}
                        styles={{
                            titleTextColor: "red",
                            rowContentColor: "red",
                        }}
                        config={{ ...config, openOnload: 0 }}
                    />
                </div>
            </div>
        );
    }
}
