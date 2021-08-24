/* eslint-disable no-param-reassign */
export const actions = {
  fetchStocks: async ({ state, effects }, url) => {
    // eslint-disable-next-line no-param-reassign
    state.stokcs.loading = true;
    state.stokcs.stockData = await effects.stokcs.StockCall.getSocks(url);
    state.stokcs.loading = false;
  },
  fetchStockData: async ({ state, effects }, url) => {
    state.stokcs.loading = true;
    state.stokcs.stockDetalies = await effects.stokcs.StockCall.callStockData(url);
    state.stokcs.loading = false;
  },
  fetchDailyData: async ({ state, effects }, url) => {
    state.stokcs.loading = true;
    state.stokcs.dailyData = await effects.stokcs.StockCall.callStockData(url);
  },
};
export default actions;
