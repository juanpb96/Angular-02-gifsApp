import { Component } from '@angular/core';
import { GiftsService } from '../../gifts/services/gifts.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor( private giftsService: GiftsService ) { }

  get history() {
    return this.giftsService.history;
  }

  search( term: string ) {
    this.giftsService.searchGifts( term );
  }

}
