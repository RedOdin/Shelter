import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { CatBreedsComponent } from './cat-breeds/cat-breeds.component';
import { BreedsForCatsComponent } from './breeds-for-cats/breeds-for-cats.component';
import { TablesComponent } from './tables/tables.component';
import { CatInsertComponent } from './cats/cat-insert/cat-insert.component';
import { CatInsertService } from './cats/cat-insert/cat-insert.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CatUpdateComponent } from './cats/cat-update/cat-update.component';
import { CatBreedsInsertComponent } from './cat-breeds/cat-breeds-insert/cat-breeds-insert.component';
import { CatBreedsUpdateComponent } from './cat-breeds/cat-breeds-update/cat-breeds-update.component';
import { BreedsForCatsInsertComponent } from './breeds-for-cats/breeds-for-cats-insert/breeds-for-cats-insert.component';
import { BreedsForCatsUpdateComponent } from './breeds-for-cats/breeds-for-cats-update/breeds-for-cats-update.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    CatBreedsComponent,
    BreedsForCatsComponent,
    TablesComponent,
    CatInsertComponent,
    CatUpdateComponent,
    CatBreedsInsertComponent,
    CatBreedsUpdateComponent,
    BreedsForCatsInsertComponent,
    BreedsForCatsUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
