import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interfaces/gifts.interface';

@Injectable({
  providedIn: 'root' 
  // It establish this service is open to the whole app in other words, has global access
})
export class GiftsService {

  private _url = 'https://api.giphy.com/v1/gifs';
  private _apiKey: string = 'eyTO6BsSM7DVq3PhN3tr6pGEvh9iAmpZ';
  private _history: string[] = [];

  // TODO: Change type
  public response: Gif[] = [];

  get history() {
    return [...this._history];
  }

  constructor( private http: HttpClient ) {
    // This is the ideal place to get local storage info due to singleton behaviour
    /* History info */
    // First solution
    // if ( localStorage.getItem('history') ) {
    //   this._history = JSON.parse( localStorage.getItem('history')! );
    // }

    // Second solution
    this._history = JSON.parse( localStorage.getItem('history')! ) || [];

    /* Gifs info */
    this.response = JSON.parse( localStorage.getItem('response')! ) || [];
  }

  searchGifts( query: string ) {
    
    query = query.trim().toLocaleLowerCase();

    if ( !this._history.includes( query ) ) {
      this._history.unshift( query );
      this._history = this._history.splice(0, 10);

      // Local storage - Note: Do not save sensible info here
      localStorage.setItem('history', JSON.stringify(this._history));
    }
    
    const endpoint: string = this._url + '/search';

    // Set parameters to send to the api
    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', '10')
      .set('q', query);

    // Define the get response with a specific type
    this.http.get<SearchGifsResponse>( endpoint , { params } )
          .subscribe( (resp) => {
            this.response = resp.data;
            localStorage.setItem('response', JSON.stringify(resp.data));
          } );
  }
}
