export interface IArticle {
    _id: string,
    title: string,
    content: string,
    image: string,
    creator: {
        _id: string,
        username: string,
    },
    dateCreated: string,
}