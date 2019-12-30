import React, { PureComponent } from 'react';

export default class rowItem extends PureComponent {
    state = {
        isExpanded: false
    }

    expand = () => {
        this.setState(prevState => {
            return { isExpanded: !prevState.isExpanded };
        });
    }

    render() {
        const {
            title, content
        } = this.props.data;

        const { isExpanded } = this.state;
        
        const attrs = {
            onClick: this.expand,
            "role": "button",
            "aria-expanded": isExpanded,
            "aria-controls": `react-faq-rowcontent-${this.props.rowid}`
        }

        const contentAttrs = {
            "role": "region",
            "id": `react-faq-rowcontent-${this.props.rowid}`,
            "aria-expanded": isExpanded,
            "aria-hidden": !isExpanded
        }

        const className = [
            'row-title',
            isExpanded ? 'expanded' : 'closed'
        ].join(' ');
        
        return (
            <section className="faq-row">
                <div className={className} {...attrs} role="button">
                    <div>{title}</div>
                    <span className="icon-wrapper" aria-hidden="true">
                        <img className="arrow-image" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMTYuMDAzIDE4LjYyNmw3LjA4MS03LjA4MUwyNSAxMy40NmwtOC45OTcgOC45OTgtOS4wMDMtOSAxLjkxNy0xLjkxNnoiLz48L3N2Zz4='/>
                    </span>
                </div>
                <div className="row-content" {...contentAttrs}
                    dangerouslySetInnerHTML={{ __html: content }}/>
            </section>
        )
    }
}
