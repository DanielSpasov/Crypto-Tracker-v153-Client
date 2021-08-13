import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IArticle } from '../interfaces/article.model';

import { environment } from 'src/environments/environment';
const apiUrl = environment.apiUrl;



@Injectable()
export class NewsService {

    constructor(private http: HttpClient) { }

    createArticle(
        title: string,
        image: FormData,
        imageInfo: {
            name: string,
            format: string,
        },
        content: string,
        userID: string
    ): Observable<IArticle> {
        this.http.post<IArticle>(`${apiUrl}/news/uploadImage`, image).subscribe()
        return this.http.post<IArticle>(`${apiUrl}/news/createArticle`, {
            title,
            imageInfo,
            content,
            userID
        })
    }

    getLatest(): Observable<IArticle[]> { return this.http.get<IArticle[]>(`${apiUrl}/news/getLatest`) }
    getArticle(articleID: string): Observable<IArticle> { return this.http.get<IArticle>(`${apiUrl}/news/${articleID}`) }

    deleteArticle(articleID: string): Observable<object> {
        let userID = localStorage.getItem('user-id');
        if (!userID) userID = '';

        return this.http
            .delete<IArticle>(`${apiUrl}/news/${articleID}`, {
                headers: {
                    'userID': userID
                }
            });
    };

    editArticle(articleID: string, editedData: object): Observable<IArticle> {
        let userID = localStorage.getItem('user-id');
        if (!userID) userID = '';

        return this.http
            .patch<IArticle>(`${apiUrl}/news/${articleID}`,
                editedData, {
                headers: { 'userID': userID }
            })
    }

}
