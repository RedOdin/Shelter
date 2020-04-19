import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatsComponent } from './cats/cats.component';
import { TablesComponent } from './tables/tables.component';
import { CatBreedsComponent } from './cat-breeds/cat-breeds.component';
import { BreedsForCatsComponent } from './breeds-for-cats/breeds-for-cats.component';
import { CatInsertComponent } from './cats/cat-insert/cat-insert.component';
import { CatUpdateComponent } from './cats/cat-update/cat-update.component';
import { CatBreedsInsertComponent } from './cat-breeds/cat-breeds-insert/cat-breeds-insert.component';
import { CatBreedsUpdateComponent } from './cat-breeds/cat-breeds-update/cat-breeds-update.component';

const APP_ROUTE = {
  HOME: '',
  CATS: 'cats',
  CAT_BREEDS: 'cat-breeds',
  BREEDS_FOR_CATS: 'breeds-for-cats',
  INSERT: 'insert',
  UPDATE: 'update'
}

const routes: Routes = [
  {
    path: APP_ROUTE.HOME,
    component: TablesComponent
  },
  {
    path: APP_ROUTE.CATS,
    component: CatsComponent
  },
  {
    path: APP_ROUTE.CAT_BREEDS,
    component: CatBreedsComponent
  },
  {
    path: APP_ROUTE.BREEDS_FOR_CATS,
    component: BreedsForCatsComponent
  },
  {
    path: `${APP_ROUTE.CATS}/${APP_ROUTE.INSERT}`,
    component: CatInsertComponent
  },
  {
    path: `${APP_ROUTE.CATS}/${APP_ROUTE.UPDATE}/:id`,
    component: CatUpdateComponent
  },
  {
    path: `${APP_ROUTE.CAT_BREEDS}/${APP_ROUTE.INSERT}`,
    component: CatBreedsInsertComponent
  },
  {
    path: `${APP_ROUTE.CAT_BREEDS}/${APP_ROUTE.UPDATE}/:id}`,
    component: CatBreedsUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
