import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatsService } from '../cats/cats.service';
import { CatBreedsService } from './cat-breeds.service';

@Component({
  selector: 'app-table-cat-breeds',
  templateUrl: './cat-breeds.component.html',
  styleUrls: ['./cat-breeds.component.scss'],
  providers: [ CatBreedsService ]
})
export class CatBreedsComponent implements OnInit {

  public catBreeds: ICatBreedModel[];

  constructor(private readonly router: Router,
              private readonly catsBreedsService: CatBreedsService) {
  }

  ngOnInit(): void {
    this.catsBreedsService.getCatBreeds().subscribe((catBreeds: ICatBreedModel[]) => {
      this.catBreeds = catBreeds;
    })
  }

  public insertCatBreed(): void {
    this.router.navigate(['/cat-breeds/insert']);
  }

  public deleteCatBreed(catBreeds: ICatBreedModel): void {
    this.catsBreedsService.deleteCatBreed(catBreeds.idCatBreeds).subscribe();

    for(let i = 0; i < this.catBreeds.length; i++) {
      if (this.catBreeds[i].idCatBreeds === catBreeds.idCatBreeds) {
        this.catBreeds.splice(i, 1);
        return;
      }
    }
  }

  public updateCatBreed(catBreeds: ICatBreedModel): void {
    this.router.navigate(['/cat-breeds/update', catBreeds.idCatBreeds]);
  }

  public trackByFn(index, item): number {
    return item.id;
  }
}
