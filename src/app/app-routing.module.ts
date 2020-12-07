import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpencesComponent } from './components/expences/expences.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';



// this constant default routes to Home, and also send all unknown path to Home
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'test', component: TestComponent },
  { path: 'expense', component: ExpencesComponent },
 

  // default route
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
