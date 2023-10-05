import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class UserDataService implements OnInit {
    constructor(private _http: HttpClient) {}

    ngOnInit(): void {   
    }

    /**
     * get the user data from the JSON server
     * @returns Observable
     */
    getUserData() {
        return this._http.get('http://localhost:3000/users');
    }
}