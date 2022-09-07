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

  ngOnInit(): void {
  }

  buscar(termino: String) {

    this.spotify.getArtist(termino).subscribe(
      (data: any) => {
        console.log( data.artists.items);
        
       this.artist = data.artists.items;
      }
    )
  }
}
