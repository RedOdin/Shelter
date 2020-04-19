import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatsService } from './cats.service';

@Component({
  selector: 'app-table-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss'],
  providers: [ CatsService ]
})
export class CatsComponent implements OnInit {

  public cats: ICatModel[];

  constructor(private readonly router: Router,
              private readonly catsService: CatsService) {
  }

  ngOnInit(): void {
    this.catsService.getCats().subscribe((cats: ICatModel[]) => {
      this.cats = cats;
    })
  }

  public insertCat(): void {
    this.router.navigate(['/cats/insert']);
  }

  public deleteCat(cat: ICatModel): void {
    this.catsService.deleteCat(cat.idCats).subscribe();

    for(let i = 0; i < this.cats.length; i++) {
      if (this.cats[i].idCats === cat.idCats) {
        this.cats.splice(i, 1);
        return;
      }
    }
  }

  public updateCat(cat: ICatModel): void {
    this.router.navigate(['/cats/update', cat.idCats]);
  }

  public trackByFn(index, item): number {
    return item.id;
  }
}
