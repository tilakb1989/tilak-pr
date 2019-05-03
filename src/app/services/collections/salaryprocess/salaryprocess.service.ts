import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SALARYPROCESS } from '../../../models/salaryprocess';
import { httpOptions,apiUrl } from '../../../api/api';
import { Observable, throwError } from 'rxjs';
import { catchError,tap  } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SalaryprocessService {

  constructor(private http: HttpClient) { }
  getsalaryProcess(): Observable<SALARYPROCESS[]>{
    return this.http.get<SALARYPROCESS[]>(apiUrl.salaryProcess,httpOptions).pipe(
      tap(data => console.log("Salary Processed datas : "+data.length)),
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
