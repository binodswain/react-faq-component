# react-faq-component

[![release](https://badgen.net/github/release/binodswain/react-faq-component)](https://github.com/binodswain/react-faq-component)
[![issues](https://badgen.net/github/issues/binodswain/react-faq-component)](https://github.com/binodswain/react-faq-component/issues)
[![license](https://badgen.net/github/license/binodswain/react-faq-component)](https://github.com/binodswain/react-faq-component/blob/master/LICENSE)


> React package to render FAQ section

## Install

```bash
npm install --save react-faq-component
```

## Usage

```jsx
import React, { Component } from 'react';
import Faq from 'react-faq-component';

const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat, 
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus. 
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae. 
              Fusce sed commodo purus, at tempus turpis.`
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor."
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem. 
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam. 
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat. 
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `
    },
    {
      title: "What is the package version",
      content: "v1.0.0"
    }]
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Faq data={data}/>
      </div>
    )
  }
}

```
## Screenshot

![Screenshot 1](/example/closed.png?raw=true "closed state")
***
![Screenshot 2](/example/expanded.png?raw=true "expanded state")

### TODO
- [x] Support HTML tags in content section.

## License

MIT © [binodswain](https://github.com/binodswain)
