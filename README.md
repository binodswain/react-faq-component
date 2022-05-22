# react-faq-component

[![release](https://badgen.net/npm/v/react-faq-component)](https://www.npmjs.com/package/react-faq-component)
[![open issues](https://badgen.net/github/open-issues/binodswain/react-faq-component)](https://github.com/binodswain/react-faq-component/issues)
[![license](https://badgen.net/github/license/binodswain/react-faq-component)](https://github.com/binodswain/react-faq-component/blob/master/LICENSE)
[![Build](https://github.com/binodswain/react-faq-component/actions/workflows/package-build.yml/badge.svg)](https://github.com/binodswain/react-faq-component/actions/workflows/package-build.yml)

An accessible React package to render FAQ section.
[view demo](https://binodswain.github.io/react-faq-component/)

## Install

```bash
npm install --save react-faq-component
```

## Usage

```jsx
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

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
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "What is the package version",
            content: <p>current version is 1.2.1</p>,
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

export default function App {

    return (
        <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}
```

## `data` props

The data passed to react-faq-component is an object having below keys(mentioned in the table).

| attribute |  type  | optional | details                                               |
| --------- | :----: | :------: | :---------------------------------------------------- |
| title     | String |   true   | Text displayed as the title/header of the FAQ section |
| rows      | Array  |   true   | Array of obj containing title and content of each row |

## `config` props (optional)

```js
const config = {
    animate: true,
    arrowIcon: "V",
    openOnload: 0,
    expandIcon: "+",
    collapseIcon: "-",
};
```

The config passed to react-faq-component is an object having below keys(mentioned in the table).

| attribute    |    type    | optional | details                                                                                                                                      |
| ------------ | :--------: | :------: | :------------------------------------------------------------------------------------------------------------------------------------------- |
| animate      |  Boolean   |   true   | Whether to enable the (row) content animation (default val : true)                                                                           |
| arrowIcon    | JSX/string |   true   | Custom component to display instead of default arrow                                                                                         |
| tabFocus     |  Boolean   |   true   | Whether to add outline on tab focus (default val : false). Focus outline is added when keyboard tab is used to navigate through the contents |
| openOnload   |  Boolean   |   true   | Index of the row to expand onload (0 for first row)                                                                                          |
| expandIcon   |   string   |   true   | Text to Show when row is collapsed (collapseIcon is required).                                                                               |
| collapseIcon |   string   |   true   | Text to Show when row is expanded                                                                                                            |

Note: `arrowIcon` is not displayed if `expandIcon` and `collapseIcon` is provided.

## `styles` props format

`styles` attribute in data is optional and can be used to change text/bg color in FAQ component.
e.g:

```js
const data = {
  title: ...,
  rows: [...],
  styles: {
    // bgColor: 'white',
    titleTextColor: 'blue',
    // titleTextSize: '48px',
    rowTitleColor: 'blue',
    // rowTitleTextSize: 'medium',
    // rowContentColor: 'grey',
    rowContentTextSize: '16px',
    // rowContentPaddingTop: '10px',
    rowContentPaddingBottom: '10px',
    rowContentPaddingLeft: '50px',
    // rowContentPaddingRight: '150px',
    // arrowColor: "red",
    //transitionDuration: "1s",
    // timingFunc: "ease"
  }
}
```

| attribute               |  type  | optional | default value | details                                            |
| ----------------------- | :----: | :------: | :-----------: | :------------------------------------------------- |
| bgColor                 | String |   true   |     white     | background color of faq-component                  |
| titleTextColor          | String |   true   |     black     | text color of FAQ title/header text                |
| titleTextSize           | String |   true   |     30px      | size of FAQ title/header text                      |
| rowTitleColor           | String |   true   |     black     | text color of title text of rowItems               |
| rowTitleTextSize        | String |   true   |     large     | size of title text in rowItems                     |
| rowContentColor         | String |   true   |     black     | text color of row content in rowItems              |
| rowContentTextSize      | String |   true   |    medium     | size of row content in rowItems                    |
| arrowColor              | String |   true   |     black     | color of row arrow                                 |
| rowContentPaddingTop    | String |   true   |       0       | value of padding-top of row content in rowItems    |
| rowContentPaddingBottom | String |   true   |       0       | value of padding-bottom of row content in rowItems |
| rowContentPaddingLeft   | String |   true   |       0       | value of padding-left of row content in rowItems   |
| rowContentPaddingRight  | String |   true   |       0       | value of padding-right of row content in rowItems  |
| transitionDuration      | String |   true   |     0.3s      | transition duration for expanding row content      |
| timingFunc              | String |   true   |     ease      | transition function for expanding row content      |

If the above style options are not enough, you can write you own custom css to apply styles on the elements.

```scss
.faq-row-wrapper {
    .faq-title {
    }

    .faq-body {
        .faq-row {
            .row-title {
            }

            .row-content {
                .row-content-text {
                }
            }
        }
    }
}
```

[Example with css style](/example/src/with-css-override)

These classnames are applied to the elements and do not contain any styles.

## `getRowOptions` props (optional)

A function is passed as a value to getRowOptions prop, which gets called with an array parameter. The length of the array is the same as the number of rows present in FAQ data. 3 functions in an object are exported per row to toggle and scrollTntoView.

```js
[
    // option for first row item
    {
        close: () => {},
        expand: () => {},
        scrollIntoView: (option) => {}, // option values : https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters
    },
    {...},
    {...},
    {...},
];
```

**Example:**

```jsx
export default function SampleFaqApp() {
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
                // rows[0].scrollIntoView(true);
            }, 10000);
        }
    }, [rows]);

    return (
        <div>
            <h2 className="section-title">FAQ section</h2>

            <div className="faq-style-wrapper">
                <Faq data={data} getRowOptions={setRowsOption} />
            </div>
        </div>
    );
```

Note: On accessing invalid array index, an error will be logged in console.

## Screenshot

![Screenshot 1](/example/closed.png?raw=true "closed state")

---

![Screenshot 2](/example/expanded.png?raw=true "expanded state")

## License

MIT © [binodswain](https://github.com/binodswain)
