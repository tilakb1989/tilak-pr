import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Content-Type':'application/json'
    })
}
 const apiUrl =  {
    login : '../assets/apis/login.json',
    untagged : '../assets/apis/untagged.json',
    untaggedPost:'http://jsonplaceholder.typicode.com/posts',
    mostprobablematch : '../assets/apis/mostprobmatch.json',
    mostprobablematchPost:'http://jsonplaceholder.typicode.com/posts',
    salaryRelease: '../assets/apis/salaryrelease.json',
    salaryProcess: '../assets/apis/salaryprocess.json'
}

export { httpOptions,apiUrl }
