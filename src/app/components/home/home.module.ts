import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [HomeComponent, NavComponent],
  imports: [SharedModule],
  exports: [HomeComponent, NavComponent],
})
export class HomeModule {}
