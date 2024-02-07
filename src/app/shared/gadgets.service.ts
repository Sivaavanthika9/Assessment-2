import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { gadget } from './gadgets';
import { Observable,throwError } from 'rxjs';
import { retry,catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GadgetsService {
  apiUrl='http://localhost:3000'


  constructor(private http:HttpClient) { }
  httpOptions={
    headers:new HttpHeaders({
      'content-Type':'application/json',
    })
  };
  getGadgets():Observable<gadget>{
    return this.http.get<gadget>(this.apiUrl+'/gadgets')
    .pipe(retry(1),catchError(this.handleError));
  }
  getGadget(id:any):Observable<gadget>{
    console.log('id',id);
    
    return this.http.get<gadget>(this.apiUrl+'/gadgets/'+id)
    .pipe(retry(1),catchError(this.handleError));
  }
  deleteGadget(id:any){
    return this.http.delete<gadget>(this.apiUrl+'/gadgets/'+id,this.httpOptions)
    .pipe(retry(1),catchError(this.handleError));
  }
  updateGadget(id:any,gadget:any):Observable<gadget>{
    return this.http.put<gadget>(this.apiUrl+'/gadgets/'+id,JSON.stringify(gadget),this.httpOptions).pipe(retry(1),catchError(this.handleError));
  }
  CreateGadget(gadget:any):Observable<gadget>{
    return this.http
    .post<gadget>(
      this.apiUrl+'/gadgets',
      JSON.stringify(gadget),
      this.httpOptions
    )
    .pipe(retry(1),catchError(this.handleError));
  }
  handleError(error: any){
    let errorMessage='';
    if(error.error instanceof ErrorEvent){
      errorMessage=error.error.message;

    }
    else{
      errorMessage=`Error Code:${error.status}\nMessage:${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(()=>{
      return errorMessage;
    });
  }
}
