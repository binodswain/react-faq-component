# react-faq-component

[![release](https://badgen.net/npm/v/react-faq-component)](https://www.npmjs.com/package/react-faq-component)
[![issues](https://badgen.net/github/issues/binodswain/react-faq-component)](https://github.com/binodswain/react-faq-component/issues)
[![license](https://badgen.net/github/license/binodswain/react-faq-component)](https://github.com/binodswain/react-faq-component/blob/master/LICENSE)
[![Build Status](https://travis-ci.com/binodswain/react-faq-component.svg?branch=master)](https://travis-ci.com/binodswain/react-faq-component)

React package to render FAQ section.
[view demo](https://binodswain.github.io/react-faq-component/)

## Install

```bash
npm install --save react-faq-component
```

## Usage

```jsx
import React, { Component } from "react";
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
            content: "v1.0.0",
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

export default class App extends Component {
    render() {
        return (
            <div>
                <Faq data={data} styles={styles} />
            </div>
        );
    }
}
```

## `data` props

The data passed to react-faq-component is an object having below keys(mentioned in the table).

| attribute |  type  | optional | details                                               |
| --------- | :----: | :------: | :---------------------------------------------------- |
| title     | String |   true   | Text displayed as the title/header of the FAQ section |
| rows      | Array  |   true   | Array of obj containing title and content of each row |
| styles    | Object |   true   | Object that updates default text/bg color             |

## `config` props (optional)

```js
const config = {
    animate: true,
    arrowIcon: "V",
};
```

The config passed to react-faq-component is an object having below keys(mentioned in the table).

| attribute |    type    | optional | details                                              |
| --------- | :--------: | :------: | :--------------------------------------------------- |
| animate   |  Boolean   |   true   | whether to enable the (row) content animation        |
| arrowIcon | JSX/string |   true   | custom component to display instead of default arrow |

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
    rowTitleColor: 'blue',
    // rowContentColor: 'grey',
    // arrowColor: "red",
  }
}
```

| attribute       |  type  | optional | default value | details                                   |
| --------------- | :----: | :------: | :-----------: | :---------------------------------------- |
| bgColor         | String |   true   |     white     | changes background color of faq-component |
| titleTextColor  | String |   true   |     black     | changes color of FAQ title/header text    |
| rowTitleColor   | String |   true   |     black     | changes color of title text of rowItems   |
| rowContentColor | String |   true   |     black     | changes color of content text of rowItems |
| arrowColor      | String |   true   |     black     | changes color of row arrow                |

## Screenshot

![Screenshot 1](/example/closed.png?raw=true "closed state")

---

![Screenshot 2](/example/expanded.png?raw=true "expanded state")

## License

MIT © [binodswain](https://github.com/binodswain)
