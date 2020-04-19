import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatBreedsService } from '../../cat-breeds/cat-breeds.service';
import { BreedsForCatsInsertService } from './breeds-for-cats-insert.service';

@Component({
  selector: 'app-breeds-for-cats-insert',
  templateUrl: './breeds-for-cats-insert.component.html',
  styleUrls: ['./breeds-for-cats-insert.component.scss'],
  providers: [ BreedsForCatsInsertService ]
})
export class BreedsForCatsInsertComponent implements OnInit {

  public cats: ICatModel[];
  public catBreeds: ICatBreedModel[];
  public cat: string;
  public catBreed: string;

  constructor(private readonly router: Router,
              private readonly breedsForCatsInsertService: BreedsForCatsInsertService) {
  }

  ngOnInit(): void {
    this.breedsForCatsInsertService.getCats().subscribe((cats: ICatModel[]) => {
      this.cats = cats;
    })
    this.breedsForCatsInsertService.getCatBreeds().subscribe((catBreeds: ICatBreedModel[]) => {
      this.catBreeds = catBreeds;
    })
  }

  public insertBreedForCat(): void {
    this.breedsForCatsInsertService.sendDataBreedForCat(this.cat, this.catBreed)
      .subscribe();

    this.router.navigate(['breeds-for-cats']);
  }

  public trackByFn(index, item): number {
    return item.id;
  }
}
