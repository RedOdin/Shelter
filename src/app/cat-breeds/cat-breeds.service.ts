import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CatBreedsService{

  constructor(private readonly http: HttpClient) {
  }

  public getCatBreeds(): Observable<any> {
    return this.http.get('http://localhost:8000/cat_breeds');
  }

  public deleteCatBreed(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8000/cat_breeds/${id}`);
  }

}
