import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  BrowserModule,
  HAMMER_GESTURE_CONFIG,
  HammerGestureConfig,
} from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { FilterComponent } from './shared/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieDBService } from './services/movie-db.service';
import {
  MovieDetailsComponent,
  TrailerDialogComponent,
} from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NgModule, Injectable } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SharedModule } from './shared/shared.module';
import { SwService } from './services/sw.service';
import { SocialShareComponent } from './shared/social-share/social-share.component';
import { FooterComponent } from './shared/footer/footer.component';
@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    pinch: { enable: false },
    rotate: { enable: false },
  };
}

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    TrailerDialogComponent,
    SocialShareComponent,
    MoviesComponent,
    FilterComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/themoviedatabase/ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },
    MovieDBService,
    SwService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [TrailerDialogComponent, SocialShareComponent],
})
export class AppModule { }
