import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class LoginService implements OnInit {

    constructor(private _http: HttpClient) {}

    ngOnInit() {}

    saveUserLoginDetails(loginData: any) {
        return this._http.post('http://localhost:3000/logindata', loginData);
    }

    getUserLoginDetails() {
        return this._http.get('http://localhost:3000/logindata');
    }

}