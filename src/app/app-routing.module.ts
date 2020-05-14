import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GradeChartsComponent } from './grade-charts/grade-charts.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {
    path: 'gradeChart',
    component: GradeChartsComponent,
    data: { title: 'Grades chart' }
  },
  {
    path: 'details',
    component: DetailsComponent,
    data: { title: 'Details' }
  },
  {
    path: '',
    redirectTo: '/gradeChart',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
