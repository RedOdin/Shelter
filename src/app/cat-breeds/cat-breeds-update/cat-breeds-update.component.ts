import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatBreedUpdateService } from './cat-breeds-update.service';

@Component({
  selector: 'app-cat-breeds-update',
  templateUrl: './cat-breeds-update.component.html',
  styleUrls: ['./cat-breeds-update.component.scss'],
  providers: [ CatBreedUpdateService ]
})
export class CatBreedsUpdateComponent implements OnInit {

  public name = '';
  public description = '';
  private idCatBreeds: number;

  constructor(public readonly catBreedUpdateService: CatBreedUpdateService,
              private readonly router: Router,
              private readonly activateRoute: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.idCatBreeds = this.activateRoute.snapshot.params['id'];
    this.catBreedUpdateService.getCatBreed(this.idCatBreeds)
      .subscribe((cat: ICatBreedModel) => {
        this.name = cat.name;
        this.description = cat.description;
      })
  }

  public updateCatBreed(): void {
    this.catBreedUpdateService.sendDataCatBreed(
      {
        idCatBreeds: this.idCatBreeds,
        name: this.name,
        description: this.description
      } as ICatModel)
      .subscribe();

    this.router.navigate(['cats']);
  }
}
