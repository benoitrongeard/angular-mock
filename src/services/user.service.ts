import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { HttpClientAPI } from "src/core/http-client-api.service";
import { User } from "src/models/user.model";

@Injectable({ providedIn: 'root' })
export class UserService {

    readonly baseUrl: string = 'http://localhost:3000/';

    constructor(private httpClient: HttpClientAPI) {
        console.log('UserService');
    }

    // getUsers(): Observable<User[]> {
    //     return this.httpClient.get(this.baseUrl + 'users') as Observable<User[]>;
    // }
}