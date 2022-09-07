import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { GenericDto } from '../models/genericDto';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends HttpService {

  private urlBase:string = 'http://localhost:9598/api/listoclientes/autenticacion/iniciar-sesion'

  constructor(protected override http:HttpClient) {
    super(http);
  }

  auth(usuario:Usuario): Observable<GenericDto>{
    return super.post<GenericDto>(this.urlBase,JSON.parse(JSON.stringify(usuario)));
  }
}
