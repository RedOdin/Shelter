import { Component } from '@angular/core';
import { CatBreedInsertService } from './cat-breeds-insert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-breeds-insert',
  templateUrl: './cat-breeds-insert.component.html',
  styleUrls: ['./cat-breeds-insert.component.scss'],
  providers: [ CatBreedInsertService ]
})
export class CatBreedsInsertComponent {

  public name = '';
  public description = '';

  constructor(public readonly catBreedInsertService: CatBreedInsertService,
              private readonly router: Router) { }

  public insertCatBreed(): void {
    this.catBreedInsertService.sendDataCatBreed({ name: this.name, description: this.description } as ICatBreedModel)
      .subscribe();

    this.router.navigate(['cat-breeds']);
    console.log(123);
  }
}
