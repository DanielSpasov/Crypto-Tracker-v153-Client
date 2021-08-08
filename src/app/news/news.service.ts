import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IArticle } from '../interfaces/article.model';



@Injectable()
export class NewsService {

    constructor(private http: HttpClient) { }

    createArticle(
        title: string,
        content: string,
        userID: string
    ): Observable<IArticle> {
        return this.http.post<IArticle>(`http://localhost:4153/news/createArticle`, {
            title,
            content,
            userID
        })
    }

}
