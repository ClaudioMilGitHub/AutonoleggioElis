import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Esito} from "../models/Esito";
import {catchError, map, Observable, of} from "rxjs";
import {Automobile} from "../models/Automobile";
import {MainUrls} from "../../MainUrls";

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Automobile[]> {
    return this.http.get<Automobile[]>(MainUrls.mainUrl() + 'logged/automobile/findAll');
  }

  findDisponibilita(body): Observable<Automobile[]> {
    return this.http.post(MainUrls.mainUrl() + 'all/automobile/findDisponibilita', body).pipe(
      map(responce => {
        return true;
      }),
      catchError((error: HttpErrorResponse) => {
        return of(false);
      })
  }
}
