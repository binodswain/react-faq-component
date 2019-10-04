import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import FaqRow from "./rowItem";

import styles from './styles.scss';

export default class ExampleComponent extends Component {
    static propTypes = {
        data: PropTypes.object
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {
            title,
            rows
        } = this.props.data;
        
        return (
            <div className="faq-row-wrapper">
                <section className="faq-row">
                    <h2>{title}</h2>
                </section>
                <section className="row-body">
                    {rows.map((row, i) => {
                        return <FaqRow data={row} key={i} rowid={i+1}/>
                    })}
                </section>
            </div>
        )
    }
}
