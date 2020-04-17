import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent {

  constructor(private readonly router: Router) { }

  public showInsert(): void {
    this.router.navigate(['/cats/insert']);
  }
}
