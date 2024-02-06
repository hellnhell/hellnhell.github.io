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
import { PhotoMenuComponent } from './main-content/photo-menu/photo-menu.component';
import { VideoMenuComponent } from './main-content/video-menu/video-menu.component';
import { CodeMenuComponent } from './main-content/code-menu/code-menu.component';
import { ContactMenuComponent } from './main-content/contact-menu/contact-menu.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



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
    PhotoMenuComponent,
    VideoMenuComponent,
    CodeMenuComponent,
    ContactMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTooltipModule,
    MatExpansionModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
