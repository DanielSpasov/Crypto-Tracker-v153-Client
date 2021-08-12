import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IArticle } from '../interfaces/article.model';



@Injectable()
export class NewsService {

    constructor(private http: HttpClient) { }

    createArticle(
        title: string,
        image: string,
        content: string,
        userID: string
    ): Observable<IArticle> {
        return this.http.post<IArticle>(`http://localhost:4153/news/createArticle`, {
            title,
            image,
            content,
            userID
        })
    }

    getLatest(): Observable<IArticle[]> { return this.http.get<IArticle[]>(`http://localhost:4153/news/getLatest`) }
    getArticle(articleID: string): Observable<IArticle> { return this.http.get<IArticle>(`http://localhost:4153/news/${articleID}`) }

    deleteArticle(articleID: string): Observable<object> {
        let userID = localStorage.getItem('user-id');
        if (!userID) userID = '';

        return this.http
            .delete<IArticle>(`http://localhost:4153/news/${articleID}`, {
                headers: {
                    'userID': userID
                }
            });
    };

    editArticle(articleID: string, editedData: object): Observable<IArticle> {
        let userID = localStorage.getItem('user-id');
        if (!userID) userID = '';

        return this.http
            .patch<IArticle>(`http://localhost:4153/news/${articleID}`,
                editedData, {
                headers: { 'userID': userID }
            })
    }

}
