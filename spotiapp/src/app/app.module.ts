import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistComponent } from './components/artist/artist.component';
import { SearchComponent } from './components/search/search.component';
import {
  NavbarComponent
} from './components/shared/navbar/navbar.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { CountryComponent } from './components/country/country.component';

// services 
import { SpotifyService } from './services/spotify.service';

// pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { DomseguroPipe } from './pipes/DomSeguroPipe';
import { DomSeguroPipeMoreParameters } from './pipes/DomSeguroPipeMoreParameters';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistComponent,
    NavbarComponent,
    SearchComponent,
    CountryComponent,
    NoimagePipe,
    DomseguroPipe,
    DomSeguroPipeMoreParameters,
    TarjetasComponent,
    LoadingComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
