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
      title: "Can I use html as content",
      content: `Yes, here is an example of a <a href="https://binodswain.github.io/react-faq-component/">link</a>`
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
