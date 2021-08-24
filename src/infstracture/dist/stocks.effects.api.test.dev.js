"use strict";

var _stocksEffects = require("./effects/StokcsApi/stocks.effects.api");

it('fetches stock data from the first stock', function _callee() {
  var value;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          global.fetch = jest.fn(function () {
            Promise.resolve();
          });
          _context.next = 3;
          return regeneratorRuntime.awrap(_stocksEffects.StockCall.getSocks());

        case 3:
          value = _context.sent;
          expect(fetch).toHaveBeenCalledTimes(1);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});