import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatUpdateService } from './cat-update.service';

@Component({
  selector: 'app-cat-update',
  templateUrl: './cat-update.component.html',
  styleUrls: ['./cat-update.component.scss'],
  providers: [ CatUpdateService ]
})
export class CatUpdateComponent implements OnInit {

  public name = '';
  public description = '';
  private idCats: number;

  constructor(public readonly catUpdateService: CatUpdateService,
              private readonly router: Router,
              private readonly activateRoute: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.idCats = this.activateRoute.snapshot.params['id'];
    this.catUpdateService.getCat(this.idCats)
      .subscribe((cat: ICatModel) => {
        this.name = cat.name;
        this.description = cat.description;
      })
  }

  public updateCat(): void {
    this.catUpdateService.sendDataCat(
      {
        idCats: this.idCats,
        name: this.name,
        description: this.description
      } as ICatModel)
      .subscribe();

    this.router.navigate(['cats']);
    console.log(this.idCats);
  }
}
