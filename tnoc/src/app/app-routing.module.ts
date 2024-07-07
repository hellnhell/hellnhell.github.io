import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PhotoProjectsComponent } from './main-content/indexs/photo-projects/photo-projects.component';
import { VideoProjectsComponent } from './main-content/indexs/video-projects/video-projects.component';
import { CodeProjectsComponent } from './main-content/indexs/code-projects/code-projects.component';


const routes: Routes = [
  { path: 'home', component: MainContentComponent },
  { path: 'home/photography', component: PhotoProjectsComponent },
  { path: 'home/videos', component: VideoProjectsComponent },
  { path: 'home/code-projects', component: CodeProjectsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
