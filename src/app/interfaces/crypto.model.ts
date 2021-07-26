export interface ICrypto {
    id: number,
    symbol: string,
    cmc_rank: number,
    name: string,
    max_supply: number,
    total_supply: number,
    circulating_supply: number,
    num_market_pairs: number,
    date_added: string,
    quote: {
        USD: {
            price: number,
            percent_change_1h: number,
            percent_change_24h: number,
            percent_change_7d: number,
            percent_change_30d: number,
            percent_change_60d: number,
            percent_change_90d: number,
            market_cap: number,
            volume_24h: number,
            [key: string]: any,
        }
    },
    tags: Array<string>,
    [key: string]: any,
}