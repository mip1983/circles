import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CirclesComponent } from './circles.component'
import { CircleComponent } from './circle.component'

const appRoutes: Routes = [
  {
    path: '',
    component: CirclesComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CirclesComponent,
    CircleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
