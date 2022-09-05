import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MainPageComponent } from './pages/main-page/main-page.component';



@NgModule({
  declarations: [
    HomeComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
