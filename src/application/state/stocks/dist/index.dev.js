"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "state", {
  enumerable: true,
  get: function get() {
    return _state.state;
  }
});
Object.defineProperty(exports, "actions", {
  enumerable: true,
  get: function get() {
    return _action.actions;
  }
});
exports.effects = exports.useReaction = exports.useEffects = exports.userActions = exports.useAppState = void 0;

var _overmindReact = require("overmind-react");

var _state = require("./state");

var _action = require("./action");

var effects = _interopRequireWildcard(require("../../../infstracture/effects/StokcsApi/stocks.effects.api"));

exports.effects = effects;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useAppState = (0, _overmindReact.createStateHook)();
exports.useAppState = useAppState;
var userActions = (0, _overmindReact.createActionsHook)();
exports.userActions = userActions;
var useEffects = (0, _overmindReact.createEffectsHook)();
exports.useEffects = useEffects;
var useReaction = (0, _overmindReact.createReactionHook)();
exports.useReaction = useReaction;