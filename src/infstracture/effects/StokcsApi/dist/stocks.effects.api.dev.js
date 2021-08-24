"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StockCall = void 0;
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
            console.log(data, "mock ");
            return _context.abrupt("return", data.results);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  callStockData: function callStockData(url) {
    var response, data;
    return regeneratorRuntime.async(function callStockData$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(fetch(url));

          case 2:
            response = _context2.sent;
            data = response.json();
            return _context2.abrupt("return", data);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};
exports.StockCall = StockCall;