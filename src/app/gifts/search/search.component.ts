import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiftsService } from '../services/gifts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  /* The ViewChild decorator should be used to get elements in the DOM by local reference
   * and manipulate those easily
   */
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;
  // The '!' is the non-null assertion operator
  // The ElementRef is the type any, to provide the specific type use '<>'
  // In case of inputs, the proper interface is HTMLInputElement

  constructor( private giftsService: GiftsService ) {}


  search( term: string ) {
    
    const value = this.txtSearch.nativeElement.value;

    if (value.trim().length === 0) {
      return;
    }

    this.giftsService.searchGifts( value );

    this.txtSearch.nativeElement.value = '';

  }

}
