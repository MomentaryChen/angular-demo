import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { TestComponent } from './test/test.component';
import { ErrorTypeChartComponent } from './error-type-chart/error-type-chart.component';

const routes: Routes = [
  {
    path: 'details/:problem',
    component: DetailsComponent,
    data: { title: 'Details' }
  },
  {
    path: 'test',
    component: TestComponent,
    data: { title: 'Details' }
  },
  {
    path: 'errorTypeChart',
    component: ErrorTypeChartComponent,
    data: { title: 'Error Type Chart' }
  },
  {
    path: '',
    redirectTo: '/details',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
