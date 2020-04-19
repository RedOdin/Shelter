import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CatInsertService{

  constructor(private readonly http: HttpClient) {
  }

  public sendDataCat(catData: ICatModel): Observable<any> {
    return this.http.post('http://localhost:8000/cats', catData);
  }
}
