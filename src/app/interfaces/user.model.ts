import { IArticle } from './article.model';



export interface IUser {
    email: string,
    username: string,
    _id: string,
    watchlist: string[],
    createdArticles: IArticle[]
}