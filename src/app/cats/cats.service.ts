import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CatsService{

  constructor(private readonly http: HttpClient) {
  }

  public getCats(): Observable<any> {
    return this.http.get('http://localhost:8000/cats');
  }

  public deleteCat(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8000/cats/${id}`);
  }

}
