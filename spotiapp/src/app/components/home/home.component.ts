import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  //valiable to control logic 
  newSongs: any[] = [];
  loading: boolean;

  // variable to error
  error: boolean = true;
  errorMessage: String = '';


  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.error = false;
    setTimeout(() => {
      spotifyService.getNewReleases().subscribe((data: any) => {
        this.newSongs = data;
        this.loading = false;
      }, (errorService) => {
        this.error = true;
        this.loading = false;
        this.errorMessage = errorService.error.error.message;
      })
    }, 2000)
  }


}
