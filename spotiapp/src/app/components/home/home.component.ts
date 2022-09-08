import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  newSongs: any[] = [];
  constructor(private spotifyService: SpotifyService) {
    spotifyService.getNewReleases().subscribe((data:any) => {
      this.newSongs = data;
    })

  }


}
