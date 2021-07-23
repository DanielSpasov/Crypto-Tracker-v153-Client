export interface ICrypto {
    'id': number,
    'cmc_rank': number,
    'symbol': string,
    'name': string,
    'quote': { 'USD': {
        'price': number
        'percent_change_24h': number,
        'percent_change_7d': number,
        'market_cap': number,
    } },
}