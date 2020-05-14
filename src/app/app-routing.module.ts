import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GradeChartsComponent } from './grade-charts/grade-charts.component';


const routes: Routes = [
  {
    path: 'grades',
    component: GradeChartsComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: '',
    redirectTo: '/grades',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
