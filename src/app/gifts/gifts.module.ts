import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftsPageComponent } from './gifts-page/gifts-page.component';
import { SearchComponent } from './search/search.component';
import { ResponseComponent } from './response/response.component';



@NgModule({
  declarations: [
    GiftsPageComponent,
    SearchComponent,
    ResponseComponent
  ],
  exports: [
    GiftsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GiftsModule { }
