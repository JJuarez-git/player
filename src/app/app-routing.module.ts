import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { ExploreComponent } from './components/pages/explore/explore.component';


const ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'explore', component: ExploreComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }