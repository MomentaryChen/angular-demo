import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: 'details',
    component: DetailsComponent,
    data: { title: 'Details' }
  },
  {
    path: 'test',
    component: TestComponent,
    data: { title: 'Details' }
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
