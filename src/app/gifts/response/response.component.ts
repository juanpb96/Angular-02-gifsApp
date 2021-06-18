import { Component, OnInit } from '@angular/core';
import { GiftsService } from '../services/gifts.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent {

  get response() {
    return this.giftsService.response;
  }

  constructor( private giftsService: GiftsService ) { }

}
