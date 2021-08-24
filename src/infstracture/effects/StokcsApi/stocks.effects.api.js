// eslint-disable-next-line import/prefer-default-export
export const StockCall = {
  getSocks: async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data, 'cehcek next ulr');
    return data;
  },
  callStockData: async (url) => {
    const response = await fetch(url);
    const data = response.json();
    return data;
  },

};
