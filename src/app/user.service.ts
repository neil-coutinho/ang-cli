import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import{ Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor(private http: HttpClient ) {}

  url: string = 'https://jsonplaceholder.typicode.com/users';

  getUsers(): Observable<User[]> {
    return this.http.get(this.url).pipe(

      catchError(this.handleError('getUsers',[]))

    );
  }


  private handleError<T>(operation='operation', result?: T){
    return function(error: any): Observable<T>{
      console.log(error);

      return of(result as T);
    }
  }

}
