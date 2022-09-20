import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  @Input() items: any[] = [];
  constructor(private router: Router) { }
  showArtist(item: any) {
    let artistId;
    if (item?.type === 'artist') {
      artistId = item?.id;
    } else {
      artistId = item?.artists[0]?.id;

    }
    this.router.navigate(['/artist', artistId]);

  }

}
