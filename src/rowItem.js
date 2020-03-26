import React, { PureComponent } from 'react';
import style from './styles.scss';
import arrow_down from "./assets/arrow_down.svg";

// const ref = React.createRef();

export default class rowItem extends PureComponent {
    state = {
        isExpanded: false,
        ref: React.createRef(),
        height: 0
    }

    expand = () => {
        const {
            config: {
                animate
            } = {}
        } = this.props;

        this.setState(prevState => {
            return { isExpanded: !prevState.isExpanded };
        }, animate ? this.setHeight: undefined);
    }

    setHeight = () => {
        setTimeout(() => {
            const { ref, isExpanded } = this.state;
            this.setState({
                height: isExpanded ? ref.current.scrollHeight : 0
            })
        }, 1)
    }

    render() {
        const {
            data: {
                title, content
            }, 
            config: {
                animate,
                arrowIcon
            } = {}
        } = this.props;

        const { isExpanded, ref, height } = this.state;
        
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
            "aria-hidden": !isExpanded,
        }

        if (animate) {
            contentAttrs['style'] = {
                height
            }
        }

        const className = [
            style['row-title'],
            style[isExpanded ? 'expanded' : 'closed']
        ].join(' ');

        const icon = arrowIcon || <div dangerouslySetInnerHTML={{ __html: arrow_down }} className={style["arrow-image"]} alt="Expand arrow" />
        
        const contentClasses = [
            style["row-content"],
            animate ? style["animate"]: style["static"]
        ].join(' ');

        return (
            <section className={style["faq-row"]}>
                <div className={className} {...attrs} role="button">
                    <div>{title}</div>
                    <span className={style["icon-wrapper"]} aria-hidden="true">
                        {icon}
                    </span>
                </div>
                <div className={contentClasses} {...contentAttrs} ref={ref}
                    dangerouslySetInnerHTML={{ __html: content }}/>
            </section>
        )
    }
}
