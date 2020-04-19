import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BreedsForCatsService{

  constructor(private readonly http: HttpClient) {
  }

  public getBreedsForCats(): Observable<any> {
    return this.http.get('http://localhost:8000/breeds_for_cats');
  }

  public deleteBreedForCat(breedsForCats: ICatForBreedModel): Observable<any> {
    return this.http.delete(`http://localhost:8000/breeds_for_cats/${breedsForCats.idCats}/${breedsForCats.idCatBreed}`);
  }

}
