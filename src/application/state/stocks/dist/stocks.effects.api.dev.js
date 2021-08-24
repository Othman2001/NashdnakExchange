"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StockCall = void 0;

var _memoryCache = _interopRequireDefault(require("memory-cache"));

var _axios = _interopRequireDefault(require("axios"));

var _axiosCacheAdapter = require("axios-cache-adapter");

var _stokcs = require("../../../infstracture/effects/StokcsApi/stokcs.cahe");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StockCall = {
  getSocks: function getSocks(url) {
    var response, data;
    return regeneratorRuntime.async(function getSocks$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(fetch(url));

          case 2:
            response = _context.sent;
            _context.next = 5;
            return regeneratorRuntime.awrap(response.json());

          case 5:
            data = _context.sent;
            return _context.abrupt("return", data.results);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
exports.StockCall = StockCall;