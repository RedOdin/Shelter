import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CatBreedUpdateService{

  constructor(private readonly http: HttpClient) {
  }

  public sendDataCatBreed(catBreedData: ICatBreedModel): Observable<any> {
    return this.http.post(`http://localhost:8000/cat_breeds/${catBreedData.idCatBreeds}`, catBreedData );
  }

  public getCatBreed(id: number): Observable<any> {
    return this.http.get(`http://localhost:8000/cat_breeds/${id}`);
  }
}
