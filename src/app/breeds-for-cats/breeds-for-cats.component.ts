import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatBreedsService } from '../cat-breeds/cat-breeds.service';
import { BreedsForCatsService } from './breeds-for-cats.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-breeds-for-cats',
  templateUrl: './breeds-for-cats.component.html',
  styleUrls: ['./breeds-for-cats.component.scss'],
  providers: [ BreedsForCatsService ]
})
export class BreedsForCatsComponent implements OnInit {

  public breedsForCats: ICatForBreedModel[] = [];

  constructor(private readonly router: Router,
              private readonly breedsForCatsService: BreedsForCatsService) {
  }

  ngOnInit(): void {
    this.breedsForCatsService.getBreedsForCats()
      .pipe(map(breedsForCat => {
        const breedsForCats: ICatForBreedModel[] = [];
        for(let i = 0; i < breedsForCat.length; i++) {
          for(let j = 0; j < breedsForCat[i].catBreeds.length; j++) {
            breedsForCats.push(
              {
                idCats: breedsForCat[i].idCats,
                nameCat: breedsForCat[i].name,
                idCatBreed: breedsForCat[i].catBreeds[j].idCatBreeds,
                nameBreed: breedsForCat[i].catBreeds[j].name
              }
            );
          }
        }
        return breedsForCats;
      }))
      .subscribe((breedsForCats: ICatForBreedModel[]) => {
        this.breedsForCats = breedsForCats;
      })
  }

  public insertBreedForCat(): void {
    this.router.navigate(['/breeds-for-cats/insert']);
  }

  public deleteCatForBreed(breedsForCats: ICatForBreedModel): void {
    this.breedsForCatsService.deleteBreedForCat(breedsForCats).subscribe();

    for(let i = 0; i < this.breedsForCats.length; i++) {
      if (this.breedsForCats[i].idCats === breedsForCats.idCats
          && this.breedsForCats[i].idCatBreed === breedsForCats.idCatBreed) {
        this.breedsForCats.splice(i, 1);
        return;
      }
    }
  }

  public trackByFn(index, item): number {
    return item.id;
  }
}
