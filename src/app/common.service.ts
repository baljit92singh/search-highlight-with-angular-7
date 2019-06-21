import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public http: HttpClient) {

  }
  getSearchResults(searchTerm): Observable<any> {
    return this.http.get('https://api.github.com/search/users?q=' + searchTerm)
  }
}
