import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import style from "./styles.scss";
import arrow_down from "./assets/arrow_down.svg";

// const ref = React.createRef();

export default class rowItem extends PureComponent {
    static propTypes = {
        config: PropTypes.object,
        data: PropTypes.object,
        rowContentPaddingTop: PropTypes.string,
        rowContentPaddingBottom: PropTypes.string,
        rowid: PropTypes.number,
    };

    state = {
        isExpanded: false,
        ref: React.createRef(),
        height: 0,
    };

    expand = () => {
        const { config: { animate = true } = {} } = this.props;

        this.setState(
            (prevState) => {
                return { isExpanded: !prevState.isExpanded };
            },
            animate ? this.setHeight : undefined,
        );
    };

    setHeight = () => {
        setTimeout(() => {
            const { ref, isExpanded } = this.state;
            const height =
                "calc(" +
                ref.current.scrollHeight +
                "px" +
                " + " +
                (this.props.rowContentPaddingTop ? this.props.rowContentPaddingTop : "0px") +
                " + " +
                (this.props.rowContentPaddingBottom ? this.props.rowContentPaddingBottom : "0px") +
                ")";
            this.setState({
                height: isExpanded ? height : 0,
            });
        }, 1);
    };

    render() {
        const {
            data: { title, content },
            config: { animate = true, arrowIcon } = {},
        } = this.props;

        const { isExpanded, ref, height } = this.state;

        const attrs = {
            onClick: this.expand,
            role: "button",
            "aria-expanded": isExpanded,
            "aria-controls": `react-faq-rowcontent-${this.props.rowid}`,
        };

        const contentAttrs = {
            role: "region",
            id: `react-faq-rowcontent-${this.props.rowid}`,
            "aria-expanded": isExpanded,
            "aria-hidden": !isExpanded,
        };

        if (animate) {
            contentAttrs["style"] = {
                height,
            };
        }

        const className = [
            "row-title",
            isExpanded ? "expanded" : "closed",
            style["row-title"],
            style[isExpanded ? "expanded" : "closed"],
        ].join(" ");

        const icon = arrowIcon || (
            <div
                dangerouslySetInnerHTML={{ __html: arrow_down }}
                className={`arrow-image ${style["arrow-image"]}`}
                alt="Expand arrow"
            />
        );

        const contentClasses = [
            style["row-content"],
            "row-content",
            animate ? style["animate"] : style["static"],
        ].join(" ");

        const contentTextClasses = [style["row-content-text"], "row-content-text"].join(" ");

        return (
            <section className={`faq-row ${style["faq-row"]}`}>
                <div className={className} {...attrs} role="button">
                    <div>{title}</div>
                    <span className={`icon-wrapper ${style["icon-wrapper"]}`} aria-hidden="true">
                        {icon}
                    </span>
                </div>
                <div className={contentClasses} {...contentAttrs}>
                    <div
                        className={contentTextClasses}
                        ref={ref}
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>
            </section>
        );
    }
}
