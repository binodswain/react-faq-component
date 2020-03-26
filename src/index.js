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
        return (
            <div className={style["faq-row-wrapper"]} style={styleConfig}>
                {title ? (
                    <section className={style["faq-row"]}>
                        <h2>{title}</h2>
                    </section>
                ) : null}
                {rows.length ? (
                    <section className={style["row-body"]}>
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
