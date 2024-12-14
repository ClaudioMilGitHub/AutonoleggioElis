import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {Esito} from "../../shared/models/Esito";
import {AuthUrls} from "../AuthUrls/AuthUrls";
import {User} from "../../shared/models/User";
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userDecoded: User;
  token: string;

  constructor(private http: HttpClient) { }

  login(body: User): Observable<Esito> {
    return this.http.post(AuthUrls.login(), body, {observe:'response'}).pipe(
      map(response => {
        this.token = response.headers.get('Authorization');
        if(!this.token) return {code:400, message:"Login Failed token not found"};
        localStorage.setItem('token',this.token);
        this.userDecoded = jwtDecode(this.token);
        if(!this.userDecoded) return {code:400, message:"Login Failed token not found"};
        return {code:200, message:"Login Success!"};
      }),
      catchError(error=> {
        return of({code: error.status, message:"Login Failed"});
      })
    );
  }

  registra(body: User): Observable<Esito> {
    return this.http.post(AuthUrls.registra(), body, {observe: 'response'}).pipe(
      map(response => {
        if(response.status == 200) {
          return {code: 200, message:"Registrato con successo!"};
        } else {
          return {code: response.status, message:"Registrazione fallita"};
        }
      }),
      catchError(error => {
        return of({code: error.status, message:"Registrazione Fallita"});
      })
    )

  }

  logout() {
    this.userDecoded = null;
    localStorage.removeItem('token');
  }
}
