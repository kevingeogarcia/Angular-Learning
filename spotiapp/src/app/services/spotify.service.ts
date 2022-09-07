import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  token:String = "Bearer BQBt6a9bK73Rw7A4xgFrMWXtYOep1dOLHplVC3x2W7SMo6UTKX7eUR5r2v-lheWAiF6hdmx9PYq25JHVvIdvi9QC1xJBCWip_X1YPmdi2xpjt6HPhZc";
  constructor(private http: HttpClient) {
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': `${this.token}`
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  
  getArtist(q: String) {
    const headers = new HttpHeaders({
      'Authorization': `${this.token}`
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${q}&type=artist`, { headers });
  }
  
}
