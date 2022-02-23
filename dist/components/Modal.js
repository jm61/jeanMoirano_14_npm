"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: fixed;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0,0,0,.5);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"])));

const Content = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 20rem;\n    background-color: white;\n    border-radius: 1rem;\n    text-align: center;\n"])));

const Footer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    padding: 10px;\n"])));

const Header = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    padding: 10px;\n"])));

const Title = _styledComponents.default.h3(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    margin: 0;\n    color: #5e6e11;\n"])));

const Body = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    padding: 10px;\n    border-top: 1px solid #888;\n    border-bottom: 1px solid #888;\n    color: #5e6e11;\n"])));

const Button = _styledComponents.default.button(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    border: none;\n    padding: 0 1rem;\n"])));

const Modal = props => {
  if (!props.show) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(Container, {
    onClick: props.onClose
  }, /*#__PURE__*/_react.default.createElement(Content, {
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/_react.default.createElement(Header, null, /*#__PURE__*/_react.default.createElement(Title, null, "New employee added")), /*#__PURE__*/_react.default.createElement(Body, null, props.children), /*#__PURE__*/_react.default.createElement(Footer, null, /*#__PURE__*/_react.default.createElement(Button, {
    onClick: props.onClose
  }, "Close"))));
};

var _default = Modal;
exports.default = _default;