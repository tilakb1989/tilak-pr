import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MOSTPROBABLEMATCH } from '../../../models/mostprobablematch';
import { httpOptions,apiUrl } from '../../../api/api';
import { Observable, throwError } from 'rxjs';
import { catchError,tap  } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MostprobablematchService {

  constructor(private http: HttpClient) { }
  getMpm(): Observable<MOSTPROBABLEMATCH[]>{
    return this.http.get<MOSTPROBABLEMATCH[]>(apiUrl.mostprobablematch,httpOptions).pipe(
      tap(data => console.log("Most Probable Datas datas : "+data.length)),
      catchError(this.handleError)
    );
  }

  postMpm(data: any): Observable<MOSTPROBABLEMATCH[]>{
    console.log("post request:"+JSON.stringify(data));
    return this.http.post<MOSTPROBABLEMATCH[]>(apiUrl.mostprobablematchPost,data,httpOptions).pipe(
      tap(res => {
        console.log("mostprobablematch data processed");
      }),
      catchError(this.handleError)
    );  
  }
  private handleError(err: HttpErrorResponse)
  {
    let errorMessage = "";
    if(err.error instanceof ErrorEvent)
    {
      errorMessage = `An error occurred: ${err.error.message}`;
    }
    else 
    {
      errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
