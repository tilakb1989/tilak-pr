import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SALARYRELEASE } from '../../../models/salaryrelease';
import { httpOptions,apiUrl } from '../../../api/api';
import { Observable, throwError } from 'rxjs';
import { catchError,tap  } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SalaryreleaseService {

  constructor(private http: HttpClient) { }

  getSalarayRelease(): Observable<SALARYRELEASE[]>{
    return this.http.get<SALARYRELEASE[]>(apiUrl.salaryRelease,httpOptions).pipe(
      tap(data => console.log("Salary Released datas : "+data.length)),
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
