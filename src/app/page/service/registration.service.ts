import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from  '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  _url = "http://localhost:3000/api";
  constructor(private _http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
       Authorization: 'auth-token'
    })
  };

  register(userData: any): Observable<any>{
    return this._http.post<any>(this._url, userData)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteUser(id: number){
    return this._http.delete<any>(`${this._url}/${id}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  getAllUser(){
    return this._http.get<any>(`${this._url}`);
  }
  
  getUser(id: number){
    return this._http.get<any>(`${this._url}/${id}`);
  }

  updateUser(userData: any){
    const id = this.userId();
    return this._http.put<any>(`${this._url}/${id}`, userData);
  }

  logIn(userData: any){
    return this._http.post<any>(`${this._url}/auth`, userData);
  }

  userId(){
    return Number(localStorage.getItem('id'));
  }

}
