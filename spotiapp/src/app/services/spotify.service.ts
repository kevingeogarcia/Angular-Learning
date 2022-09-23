import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//operators
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  token: String = '';


  clientId: String = '76570198bdad45a085725ecb132b5970';
  clientSecret: String = 'e816dbd5d12a410891872e8c973d503e';
  /*
    you can generate your credentials at this link.
          ======>   https://developer.spotify.com/dashboard/applications
    For this you must have a spotify account and create an application in it you will find:
          ======> client_id
          ======> client_secret
  */

  constructor(private http: HttpClient) {
    this.buildQueryLogin().subscribe((data: any) => {
      this.token = `Bearer ${data.access_token}`;
    });
  }


  buildQueryLogin() {
    const authorizationTokenUrl = `https://accounts.spotify.com/api/token`;
    const body = 'grant_type=client_credentials';
    return this.http.post(authorizationTokenUrl, body, {
      headers: new HttpHeaders({
        Authorization:
          'Basic  ' + btoa(this.clientId + ':' + this.clientSecret),
        'Content-Type': 'application/x-www-form-urlencoded;',
      }),
    });
  }

  getToken() {
    return this.buildQueryLogin().pipe(map((data: any) => data['access_token']));
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
