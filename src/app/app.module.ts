import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CHeaderComponent } from './c-header/c-header.component';
import { ShoopingListComponent } from './c-header/shooping-list/shooping-list.component';
import { ShoppingEditComponent } from './c-header/shooping-list/shopping-edit/shopping-edit.component';
import { RecipesComponent } from './c-header/recipes/recipes.component';
import { RecipesListComponent } from './c-header/recipes/recipes-list/recipes-list.component';
import { RecipesItemComponent } from './c-header/recipes/recipes-list/recipes-item/recipes-item.component';
import { RecipesDetailComponent } from './c-header/recipes/recipes-list/recipes-detail/recipes-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CHeaderComponent,
    ShoopingListComponent,
    ShoppingEditComponent,
    RecipesComponent,
    RecipesItemComponent,
    RecipesListComponent,
    RecipesDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
