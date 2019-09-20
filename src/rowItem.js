import React, { Component } from 'react'

export default class rowItem extends Component {
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
            onClick: this.expand
        }

        const className = [
            'row-title',
            isExpanded ? 'expanded' : 'closed'
        ].join(' ');
        
        return (
            <section className="faq-row">
                <div className={className} {...attrs} role="button">
                    <div>{title}</div>
                    <span className="icon-wrapper">
                        <svg viewBox="0 0 32 32" class="icon icon-chevron-bottom" viewBox="0 0 32 32" aria-hidden="true"><path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"/></svg>
                    </span>
                </div>
                <div className="row-content">
                    {content}
                </div>

            </section>
        )
    }
}
