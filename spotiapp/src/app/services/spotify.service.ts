import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

    console.log('esta vaina del service esta listo!');

  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDiShhEOzIb2l83VRy3PwvVhCBJo1Q8VypsPc4jFDHlBgQeTgVQB31mGerrz3f4Dq8CAC6UPO50Fv072wpumMUlrHihs3AhyGGXrVLKcOyXNzV3oRc'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
