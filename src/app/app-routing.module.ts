import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatsComponent } from './cats/cats.component';
import { TablesComponent } from './tables/tables.component';
import { CatBreedsComponent } from './cat-breeds/cat-breeds.component';
import { BreedsForCatsComponent } from './breeds-for-cats/breeds-for-cats.component';
import { CatsInsertComponent } from './cats/cats-insert/cats-insert.component';


const routes: Routes = [
  {
    path: '',
    component: TablesComponent
  },
  {
    path: 'cats',
    component: CatsComponent
  },
  {
    path: 'cat-breeds',
    component: CatBreedsComponent
  },
  {
    path: 'breeds-for-cats',
    component: BreedsForCatsComponent
  },
  {
    path: 'cats/insert',
    component: CatsInsertComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
