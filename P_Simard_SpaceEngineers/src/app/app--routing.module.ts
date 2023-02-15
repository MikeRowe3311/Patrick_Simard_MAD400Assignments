import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './models/content-list/content-list.component';
import { ContentListItemDetailComponent } from './content-list-item-detail/content-list-item-detail.component';
import { ContentListItemSearchComponent } from './content-list-item-search/content-list-item-search.component';


const routes: Routes = [
{
  path: "",
  redirectTo: "/content",
  pathMatch: "full"
},
{
  path: "content",
component: ContentListComponent
},
{
  path: "content/:idNumberValue",
  component: ContentListItemDetailComponent
},
{
  path: "search",
  component: ContentListItemSearchComponent
}


];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
