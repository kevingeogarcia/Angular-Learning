import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//operators
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  token: String = "Bearer BQB0ZRLGPgdMW7dttdQTyw9b_1op2BtqSBu58nsM26ayp4d9skCR26zwTmTyNcidgRAL_t-ZG9XEM2tN06XYIV1xlrJ89vW3TSjULwhDyIIpar-khPQ";
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

  getArtist(q: String) {
    return this.buildQuery(`search?q=${q}&type=artist`).pipe(map((data: any) => data.artists.items));
  }

}
