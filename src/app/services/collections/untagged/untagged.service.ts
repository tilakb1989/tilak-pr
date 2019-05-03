import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UNTAGGED } from '../../../models/untagged';
import { httpOptions,apiUrl } from '../../../api/api';
import { Observable, throwError } from 'rxjs';
import { catchError,tap  } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UntaggedService {

  constructor(private http: HttpClient) { }

  getUntaggedContent(): Observable<UNTAGGED[]>{
    return this.http.get<UNTAGGED[]>(apiUrl.untagged,httpOptions).pipe(
      tap(data => console.log("Untagged datas : "+data.length)),
      catchError(this.handleError)
    );
  }

  postUntaggedContent(data: any): Observable<UNTAGGED[]>{
    console.log("post request:"+JSON.stringify(data));
    return this.http.post<UNTAGGED[]>(apiUrl.untaggedPost,data,httpOptions).pipe(
      tap(res => {
        console.log("Untagged data processed");
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
