import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  //valiable to control logic 
  newSongs: any[] = [];
  loading: boolean = true;

  // variable to error
  error: boolean = true;
  errorMessage: String = '';


  constructor(private spotifyService: SpotifyService) {
    this.getData();
  }
  getData() {
    this.loading = true;
    this.error = false;

    setTimeout(() => {
      this.spotifyService.getNewReleases().subscribe((data: any) => {
        this.newSongs = data;
        this.loading = false;
      }, (errorService) => {
        this.error = true;
        this.loading = false;
        this.errorMessage = errorService.error.error.message;
        console.log(this.errorMessage);
      })
    }, 2000)
  }

  refreshToken() {
    this.spotifyService.buildQueryLogin().subscribe((data: any) => {
      this.spotifyService.token = `Bearer ${data.access_token}`;
    });
    this.getData();
  }

}
