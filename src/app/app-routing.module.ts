import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { TestComponent } from './test/test.component';
import { GradeComponent } from './grade/grade.component';

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
    path: 'grade',
    component: GradeComponent,
    data: { title: 'Grade' }
  },
  {
    path: '',
    redirectTo: '/grade',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
