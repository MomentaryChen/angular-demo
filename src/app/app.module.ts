import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbA11yModule, NbSidebarModule, NbActionsModule, NbMenuModule, NbCardModule, NbSelectModule, NbAccordionModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSidebarService } from '@nebular/theme';
import { ChartsModule } from 'ng2-charts';
import { GradeChartsComponent } from './grade-charts/grade-charts.component';


@NgModule({
  declarations: [
    AppComponent,
    GradeChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule,
    NbActionsModule,
    NbCardModule,
    NbSelectModule,
    NbAccordionModule,
    ChartsModule,
    NbMenuModule.forRoot(),
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
