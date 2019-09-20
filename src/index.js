import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import FaqRow from "./rowItem";

import styles from './styles.scss';

export default class ExampleComponent extends Component {
    static propTypes = {
        name: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            expandAll: false
        }
    }

    render() {

        const {
            title,
            rows
        } = this.props.data;

        const {
            expandAll
        } = this.state;
        
        return (
            <div className="faq-row-wrapper">
                <section className="faq-row">
                    <h2>{title}</h2>
                </section>
                <section className="row-body">
                    {rows.map((row, i) => {
                        return <FaqRow data={row} key={i}/>
                    })}
                </section>
            </div>
        )
    }
}
