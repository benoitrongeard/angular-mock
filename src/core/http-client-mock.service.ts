import { HttpClient, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class HttpClientMock extends HttpClient {
    constructor(handler: HttpHandler) {
        super(handler);
        console.log('HttpClientMock');
    }
}