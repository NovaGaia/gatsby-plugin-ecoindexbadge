"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.onRenderBody = void 0;

var _react = _interopRequireDefault(require("react"));

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */
function buildScriptLoader(pluginOptions) {
  var modeOfUse = pluginOptions.mode || 'external';

  if (modeOfUse === 'external') {
    return /*#__PURE__*/_react["default"].createElement("script", {
      key: "ecoindex",
      src: "https://cdn.jsdelivr.net/gh/simonvdfr/ecoindex-light-js@main/ecoindex.min.js"
    });
  }

  return null;
}

function buildInformationMessage() {
  return /*#__PURE__*/_react["default"].createElement("script", {
    key: "ecoindex_message",
    dangerouslySetInnerHTML: {
      __html: "\n        console.log(\"l'\xC9coindex, c'est quoi ? http://www.ecoindex.fr/quest-ce-que-ecoindex/\")\n      "
    }
  });
}

var onRenderBody = function onRenderBody(_ref, pluginOptions) {
  var setBodyAttributes = _ref.setBodyAttributes,
      setPostBodyComponents = _ref.setPostBodyComponents;
  setBodyAttributes({
    style: {
      position: 'relative'
    }
  });
  setPostBodyComponents([buildScriptLoader(pluginOptions), buildInformationMessage()]);
};

exports.onRenderBody = onRenderBody;