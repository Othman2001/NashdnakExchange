import { promises } from "fs";
import { createOvermindMock } from "overmind";

import { config } from "../index";

describe('state Testing', () => {
    test('should retrieve posts data', () => {
        const overmind = createOvermindMock(config, (state) => {
            state.stokcs.stockData = { symbol: "aa", title: "agent", market: "stock" }

        })
        expect(overmind.state.stokcs.stockData.title).toEqual('agent')
    })
})