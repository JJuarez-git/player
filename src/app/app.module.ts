import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { IvyCarouselModule } from "angular-responsive-carousel";

//Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';

//Rutas
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { PlayerComponent } from './components/player/player.component';
import { CoversComponent } from './components/covers/covers.component';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ContentComponent } from './components/content/content.component';
import { ExploreComponent } from './components/pages/explore/explore.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    CoversComponent,
    HeaderComponent,
    SideMenuComponent,
    HomeComponent,
    ContentComponent,
    ExploreComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatSliderModule,
    MatProgressBarModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
