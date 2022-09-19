import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//operators
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  token: String = "Bearer BQD1R-lHfLEY31kMl2sDzWnubobHwUCba348GxzeNSJxCIKwgiqkTOoK24tynRuGKc8137eqjF3IVA0MWbHsiqwAA8FxD0zWmhfO9daxMO-fUQpagOI";
  constructor(private http: HttpClient) {
  }

  buildQuery(q: String) {
    const spotyUrl = `https://api.spotify.com/v1/${q}`;
    const headers = new HttpHeaders({
      'Authorization': `${this.token}`
    });
    return this.http.get(spotyUrl, { headers });
  }

  getNewReleases() {
    return this.buildQuery('browse/new-releases').pipe(map((data: any) => data?.albums.items));
  }

  getArtists(q: String) {
    return this.buildQuery(`search?q=${q}&type=artist`).pipe(map((data: any) => data.artists.items));
  }

  getArtist(id: String) {
    return this.buildQuery(`artists/${id}`);//.pipe(map((data: any) => data.artists.items));
  }

}
