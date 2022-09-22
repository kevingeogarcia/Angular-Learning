import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {
  loading: boolean;

  artist: any = {};
  topTracks: any[] = [];

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {

    this.loading = true;
    this.router.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);

    });
  }

  getArtist(id: String) {
    this.loading = true;
    setTimeout(() => {
      this.spotify.getArtist(id).subscribe(artist => {
        this.artist = artist;
        this.loading = false;
      });
    }, 2000);
  }

  getTopTracks(id: String) {
    this.spotify.getTopTracks(id).subscribe(topTracks => {
      this.topTracks = topTracks;
      console.log(this.topTracks);

    });
  }
}
