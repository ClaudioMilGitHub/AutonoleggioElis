import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {Automobile} from "../models/Automobile";
import {MainUrls} from "../../MainUrls";
import {DisponibilitaRequest} from "../models/DisponibilitaRequest";

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Automobile[]> {
    return this.http.get<Automobile[]>(MainUrls.mainUrl() + 'logged/automobile/findAll');
  }

  findDisponibilita(body: DisponibilitaRequest): Observable<Automobile[]> {
    return this.http.post<Automobile[]>(MainUrls.mainUrl() + 'all/automobile/findDisponibilita', body);

  }
}
