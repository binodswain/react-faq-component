import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FaqRow from "./rowItem";

import './styles.scss';

class FaqComponent extends PureComponent {
    static propTypes = {
        data: PropTypes.object
    }

    render() {
        const {
            title,
            rows = []
        } = this.props.data || {};
        const {
            styles = {}
        } = this.props;
        
        let styleConfig = {
            "--faq-bg-color": styles.bgColor,
            "--title-text-color": styles.titleTextColor,
            "--row-title-color": styles.rowTitleColor,
            "--row-content-color": styles.rowContentColor,
        }
        return (
            <div className="faq-row-wrapper" style={styleConfig}>
                {title ?
                    <section className="faq-row">
                        <h2>{title}</h2>
                    </section>
                    : null}
                {rows.length ? 
                    <section className="row-body">
                        {rows.map((row, i) => {
                            return <FaqRow data={row} key={i} rowid={i+1}/>
                        })}
                    </section>
                    : null}
                
            </div>
        )
    }
}

let rootComponent;

if (typeof window !== 'undefined') {
  rootComponent = FaqComponent
}

export default rootComponent;