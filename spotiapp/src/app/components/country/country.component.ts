import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  paises: any[] = [];
  constructor(private http: HttpClient) {
    this.http.get('https://restcountries.com/v2/all').subscribe((data: any) => {
      this.paises = data;
    })
  }
  ngOnInit(): void {
  }

}
