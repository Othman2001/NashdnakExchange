"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = void 0;
var actions = {
  fetchStocks: function fetchStocks(_ref, url) {
    var state, effects;
    return regeneratorRuntime.async(function fetchStocks$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            state = _ref.state, effects = _ref.effects;
            state.stokcs.loading = true;
            _context.next = 4;
            return regeneratorRuntime.awrap(effects.stokcs.StockCall.getSocks(url));

          case 4:
            state.stokcs.stockData = _context.sent;
            state.stokcs.loading = false;

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
exports.actions = actions;