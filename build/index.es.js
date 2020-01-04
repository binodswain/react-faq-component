import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".styles_faq-row-wrapper__3Hsch {\n  background-color: var(--faq-bg-color, white); }\n  .styles_faq-row-wrapper__3Hsch h2 {\n    margin: 0;\n    color: var(--title-text-color, black); }\n  .styles_faq-row-wrapper__3Hsch .styles_faq-row__2Rd2Y {\n    display: flex;\n    justify-content: space-between;\n    padding: 10px 0;\n    border-bottom: 1px solid #ccc; }\n  .styles_faq-row-wrapper__3Hsch .styles_row-body__8wIE9 .styles_faq-row__2Rd2Y {\n    flex-direction: column; }\n    .styles_faq-row-wrapper__3Hsch .styles_row-body__8wIE9 .styles_faq-row__2Rd2Y .styles_row-title__2yqnt {\n      padding: 10px 0;\n      display: flex;\n      justify-content: space-between;\n      color: var(--row-title-color, black);\n      font-weight: 400;\n      cursor: pointer; }\n      .styles_faq-row-wrapper__3Hsch .styles_row-body__8wIE9 .styles_faq-row__2Rd2Y .styles_row-title__2yqnt .styles_icon-wrapper__wjX56 {\n        max-width: 20px;\n        max-height: 20px;\n        margin: 0;\n        padding: 0; }\n        .styles_faq-row-wrapper__3Hsch .styles_row-body__8wIE9 .styles_faq-row__2Rd2Y .styles_row-title__2yqnt .styles_icon-wrapper__wjX56 .styles_arrow-image__qLm48 {\n          width: 100%;\n          height: 100%; }\n      .styles_faq-row-wrapper__3Hsch .styles_row-body__8wIE9 .styles_faq-row__2Rd2Y .styles_row-title__2yqnt.styles_closed__3LKOc + .styles_row-content__TVd0Y {\n        max-height: 0;\n        visibility: hidden; }\n      .styles_faq-row-wrapper__3Hsch .styles_row-body__8wIE9 .styles_faq-row__2Rd2Y .styles_row-title__2yqnt.styles_closed__3LKOc .styles_icon-wrapper__wjX56 {\n        transform: rotate(0deg);\n        transition: transform 0.12s ease-in-out; }\n      .styles_faq-row-wrapper__3Hsch .styles_row-body__8wIE9 .styles_faq-row__2Rd2Y .styles_row-title__2yqnt.styles_expanded__2KFpr + .styles_row-content__TVd0Y {\n        max-height: 100%;\n        visibility: visible; }\n      .styles_faq-row-wrapper__3Hsch .styles_row-body__8wIE9 .styles_faq-row__2Rd2Y .styles_row-title__2yqnt.styles_expanded__2KFpr .styles_icon-wrapper__wjX56 {\n        transform: rotate(180deg);\n        transition: transform 0.12s ease-in-out; }\n    .styles_faq-row-wrapper__3Hsch .styles_row-body__8wIE9 .styles_faq-row__2Rd2Y .styles_row-content__TVd0Y {\n      color: var(--row-content-color, black); }\n";
var style = {"faq-row-wrapper":"styles_faq-row-wrapper__3Hsch","faq-row":"styles_faq-row__2Rd2Y","row-body":"styles_row-body__8wIE9","row-title":"styles_row-title__2yqnt","icon-wrapper":"styles_icon-wrapper__wjX56","arrow-image":"styles_arrow-image__qLm48","closed":"styles_closed__3LKOc","row-content":"styles_row-content__TVd0Y","expanded":"styles_expanded__2KFpr"};
styleInject(css);

var rowItem =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(rowItem, _PureComponent);

  function rowItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, rowItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(rowItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isExpanded: false
    });

    _defineProperty(_assertThisInitialized(_this), "expand", function () {
      _this.setState(function (prevState) {
        return {
          isExpanded: !prevState.isExpanded
        };
      });
    });

    return _this;
  }

  _createClass(rowItem, [{
    key: "render",
    value: function render() {
      var _this$props$data = this.props.data,
          title = _this$props$data.title,
          content = _this$props$data.content;
      var isExpanded = this.state.isExpanded;
      var attrs = {
        onClick: this.expand,
        "role": "button",
        "aria-expanded": isExpanded,
        "aria-controls": "react-faq-rowcontent-".concat(this.props.rowid)
      };
      var contentAttrs = {
        "role": "region",
        "id": "react-faq-rowcontent-".concat(this.props.rowid),
        "aria-expanded": isExpanded,
        "aria-hidden": !isExpanded
      };
      var className = [style['row-title'], style[isExpanded ? 'expanded' : 'closed']].join(' ');
      return React.createElement("section", {
        className: style["faq-row"]
      }, React.createElement("div", _extends({
        className: className
      }, attrs, {
        role: "button"
      }), React.createElement("div", null, title), React.createElement("span", {
        className: style["icon-wrapper"],
        "aria-hidden": "true"
      }, React.createElement("img", {
        className: style["arrow-image"],
        src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMTYuMDAzIDE4LjYyNmw3LjA4MS03LjA4MUwyNSAxMy40NmwtOC45OTcgOC45OTgtOS4wMDMtOSAxLjkxNy0xLjkxNnoiLz48L3N2Zz4="
      }))), React.createElement("div", _extends({
        className: style["row-content"]
      }, contentAttrs, {
        dangerouslySetInnerHTML: {
          __html: content
        }
      })));
    }
  }]);

  return rowItem;
}(PureComponent);

var FaqComponent =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(FaqComponent, _PureComponent);

  function FaqComponent() {
    _classCallCheck(this, FaqComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(FaqComponent).apply(this, arguments));
  }

  _createClass(FaqComponent, [{
    key: "render",
    value: function render() {
      var _ref = this.props.data || {},
          title = _ref.title,
          _ref$rows = _ref.rows,
          rows = _ref$rows === void 0 ? [] : _ref$rows;

      var _this$props$styles = this.props.styles,
          styles = _this$props$styles === void 0 ? {} : _this$props$styles;
      var styleConfig = {
        "--faq-bg-color": styles.bgColor,
        "--title-text-color": styles.titleTextColor,
        "--row-title-color": styles.rowTitleColor,
        "--row-content-color": styles.rowContentColor
      };
      return React.createElement("div", {
        className: style["faq-row-wrapper"],
        style: styleConfig
      }, title ? React.createElement("section", {
        className: style["faq-row"]
      }, React.createElement("h2", null, title)) : null, rows.length ? React.createElement("section", {
        className: style["row-body"]
      }, rows.map(function (row, i) {
        return React.createElement(rowItem, {
          data: row,
          key: i,
          rowid: i + 1
        });
      })) : null);
    }
  }]);

  return FaqComponent;
}(PureComponent);

_defineProperty(FaqComponent, "propTypes", {
  data: PropTypes.object
});

var rootComponent;

if (typeof window !== 'undefined') {
  rootComponent = FaqComponent;
}

var rootComponent$1 = rootComponent;

export default rootComponent$1;
//# sourceMappingURL=index.es.js.map
