import { ICrypto } from './crypto.model';



export interface IUser {
    email: string,
    username: string,
    _id: string,
    watchlist: ICrypto[]
}