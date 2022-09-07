import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { GenericDto } from '../models/genericDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlBase:string = 'http://10.102.1.72:9598/api/listoclientes/autenticacion/iniciar-sesion'

  constructor(private http:HttpClient) { }

  auth(usuario:Usuario): Observable<GenericDto>{
    return this.http.post<GenericDto>(this.urlBase,JSON.parse(JSON.stringify(usuario)));
  }
}
