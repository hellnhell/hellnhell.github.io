import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { EmbededVideoComponent } from './video-projects/embeded-video/embeded-video.component';
import { MainContentComponent } from './main-content/main-content.component';
import { CodeProjectsComponent } from './code-projects/code-projects.component';
import { PhotoProjectsComponent } from './photo-projects/photo-projects.component';
import { VideoProjectsComponent } from './video-projects/video-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PhotoProjectsComponent,
    VideoProjectsComponent,
    CodeProjectsComponent,
    EmbededVideoComponent,
    MainContentComponent,
    CodeProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
