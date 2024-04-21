import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PhotoProjectsComponent } from './indexs/photo-projects/photo-projects.component';
import { VideoProjectsComponent } from './indexs/video-projects/video-projects.component';
import { CodeProjectsComponent } from './indexs/code-projects/code-projects.component';

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
