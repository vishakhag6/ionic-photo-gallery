import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommondataService {
  constructor(private http: HttpClient) {}

  getDataService() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
  }
}
