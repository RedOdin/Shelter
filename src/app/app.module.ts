import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { CatBreedsComponent } from './cat-breeds/cat-breeds.component';
import { BreedsForCatsComponent } from './breeds-for-cats/breeds-for-cats.component';
import { TablesComponent } from './tables/tables.component';
import { CatsInsertComponent } from './cats/cats-insert/cats-insert.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    CatBreedsComponent,
    BreedsForCatsComponent,
    TablesComponent,
    CatsInsertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
