import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private spotify: SpotifyService) { }
  artist: any[] = [];
  loading: boolean = false;

  ngOnInit(): void {
  }

  buscar(termino: String) {
    this.loading =true;
    setTimeout(() => {
      this.spotify.getArtist(termino).subscribe(
        (data: any) => {
         this.artist = data;
         this.loading = false;
        }
      )
    }, 2000)
  }
}
