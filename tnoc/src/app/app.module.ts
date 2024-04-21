import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PhotoMenuComponent } from './main-content/photo-menu/photo-menu.component';
import { VideoMenuComponent } from './main-content/video-menu/video-menu.component';
import { CodeMenuComponent } from './main-content/code-menu/code-menu.component';
import { ContactMenuComponent } from './main-content/contact-menu/contact-menu.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuContainerComponent } from './menu-container/menu-container.component';
import { ThemeToggleComponent } from './theme-toggle-btn/theme-toggle.component';
import { PhotoProjectsComponent } from './indexs/photo-projects/photo-projects.component';
import { VideoProjectsComponent } from './indexs/video-projects/video-projects.component';
import { CodeProjectsComponent } from './indexs/code-projects/code-projects.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainContentComponent,
    PhotoMenuComponent,
    PhotoProjectsComponent,
    VideoProjectsComponent,
    VideoMenuComponent,
    CodeProjectsComponent,
    CodeMenuComponent,
    ContactMenuComponent,
    MenuContainerComponent,
    ThemeToggleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTooltipModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
