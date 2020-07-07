import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbA11yModule, NbTabsetModule, NbSidebarModule, NbActionsModule, NbMenuModule, NbCardModule, NbSelectModule, NbAccordionModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSidebarService } from '@nebular/theme';
import { ChartsModule } from 'ng2-charts';
import { DetailsComponent } from './details/details.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    TestComponent,
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
    HttpClientModule,
    NbTabsetModule
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
