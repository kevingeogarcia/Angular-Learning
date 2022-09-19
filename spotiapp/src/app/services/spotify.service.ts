import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//operators
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  token: String = "Bearer BQCY3kNSCHDbEgvot3t06L17B1p-28Z9yOQKAqdjQNSvwaHKv32Lv-0KB5Op79qPjqV3Zw40kpPDwTIdtJQvgv3J79pvjL5UMJmMkr8EmakS4SdgNQI";
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
