import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//operators
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  token: String = "Bearer BQB0eGb0O4Fdgr2EHxhwsHis xyBBhRzLQ7mgv2i6fFxuvUpSf00a67OPNckuZ8ATy0tryB6GxSg6lKfPn_bADn9FWSCLFrY8UJohyOCO53XatUIbCP4";
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
    return this.buildQuery('browse/new-releases').pipe(map((data: any) => data['albums'].items));
  }

  getArtists(q: String) {
    return this.buildQuery(`search?q=${q}&type=artist`).pipe(map((data: any) => data['artists'].items));
  }

  getArtist(id: String) {
    return this.buildQuery(`artists/${id}`);//.pipe(map((data: any) => data.artists.items));
  }

  getTopTracks(id: String) {
    return this.buildQuery(`artists/${id}/top-tracks?country=us`).pipe(map((data: any) => data['tracks']));
  }

}
