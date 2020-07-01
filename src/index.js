import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import FaqRow from "./rowItem";
import style from "./styles.scss";

export default class FaqComponent extends PureComponent {
    static propTypes = {
        data: PropTypes.object,
    };

    render() {
        const { title, rows = [] } = this.props.data || {};
        const { styles = {}, config: { animate } = {} } = this.props;

        let styleConfig = {
            "--faq-bg-color": styles.bgColor,
            "--title-text-color": styles.titleTextColor,
            "--row-title-color": styles.rowTitleColor,
            "--row-content-color": styles.rowContentColor,
            "--arrow-color": styles.arrowColor,
        };

        const wrapperClass = `faq-row-wrapper ${style["faq-row-wrapper"]}`;
        const titleClass = `faq-row ${style["faq-row"]}`;
        const rowlistClass = `row-body ${style["row-body"]}`;

        return (
            <div className={wrapperClass} style={styleConfig}>
                {title ? (
                    <section className={titleClass}>
                        <h2>{title}</h2>
                    </section>
                ) : null}
                {rows.length ? (
                    <section className={rowlistClass}>
                        {rows.map((row, i) => {
                            return (
                                <FaqRow
                                    data={row}
                                    key={i}
                                    rowid={i + 1}
                                    config={this.props.config}
                                />
                            );
                        })}
                    </section>
                ) : null}
            </div>
        );
    }
}
