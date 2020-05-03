import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TesterComponent } from './components/tester/tester.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tester', component: TesterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
