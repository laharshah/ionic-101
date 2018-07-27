import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class BeerService {

    constructor(private http: HttpClient, private oauthService: OAuthService) {
    }

    getAll(): Observable<any> {
        const headers: HttpHeaders = new HttpHeaders();
        headers.append('Authorization', this.oauthService.authorizationHeader());
        const httpOptions = {
            headers: headers
        };

        return this.http.get('http://localhost:8100/good-beers', httpOptions)
            .map((response: any) => response.json());
    }
}