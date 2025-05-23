import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { CodeProjectsComponent } from './main-content/indexs/code-projects/code-projects.component';


const routes: Routes = [
  { path: 'home', component: MainContentComponent },
  { path: 'home/code-projects', component: CodeProjectsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
