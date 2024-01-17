import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoProjectsComponent } from './photo-projects/photo-projects.component';
import { VideoProjectsComponent } from './video-projects/video-projects.component';
import { CodeProjectsComponent } from './code-projects/code-projects.component';
import { MainContentComponent } from './main-content/main-content.component';

const routes: Routes = [
  { path: 'home', component: MainContentComponent }, 
  { path: 'photography', component: PhotoProjectsComponent },
  { path: 'videos', component: VideoProjectsComponent },
  { path: 'code-projects', component: CodeProjectsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
