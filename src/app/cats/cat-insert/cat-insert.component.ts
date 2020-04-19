import { Component } from '@angular/core';
import { CatInsertService } from './cat-insert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cats-insert',
  templateUrl: './cat-insert.component.html',
  styleUrls: ['./cat-insert.component.scss'],
  providers: [ CatInsertService ]
})
export class CatInsertComponent {

  public name = '';
  public description = '';

  constructor(public readonly catInsertService: CatInsertService,
              private readonly router: Router) { }

  public insertCat(): void {
    this.catInsertService.sendDataCat({ name: this.name, description: this.description } as ICatModel)
      .subscribe();

    this.router.navigate(['cats']);
  }
}
