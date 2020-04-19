import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BreedsForCatsInsertService{

  constructor(private readonly http: HttpClient) {
  }

  public getCatBreeds(): Observable<any> {
    return this.http.get('http://localhost:8000/cat_breeds');
  }

  public getCats(): Observable<any> {
    return this.http.get('http://localhost:8000/cats');
  }

  public sendDataBreedForCat(idCats, idCatBreeds): Observable<any> {
    return this.http.post('http://localhost:8000/breeds_for_cats', {id_cats: parseInt(idCats), id_cat_breeds: parseInt(idCatBreeds)});
  }

}
