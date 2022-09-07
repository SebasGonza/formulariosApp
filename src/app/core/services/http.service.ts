import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { GenericDto } from '../models/genericDto';

@Injectable({
  providedIn: 'root'
})
export class HttpService{
  constructor(
    protected http:HttpClient,
    ) { }
  

  protected post<T>(url:string,argumento:T)
  :Observable<GenericDto>{
    console.log('holuu');
    return this.http.post<GenericDto>(url,argumento)
    .pipe(
      tap((data)=>{
        if(data.status === 200){
          console.log('Entraste');
          return data.payload;
        }
        if(data.status===500){
          console.log(data.payload);
          throw new Error('Sos un gilipollas');
        }
      })
    );
  }

}
