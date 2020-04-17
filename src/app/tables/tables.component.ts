import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit() {
  }

  public showCats(): void {
    this.router.navigate(['/cats']);
  }

  public showCatBreeds(): void {
    this.router.navigate(['/cat-breeds']);
  }

  public showBreedsForCats(): void {
    console.log(123);
    this.router.navigate(['/breeds-for-cats']);
  }

}
