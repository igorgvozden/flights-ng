import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from './shared-material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ButtonModule } from './components/button/button.module';
import { ModalModule } from './components/modal/modal.module';
import { HeroComponent } from './components/hero/hero.component';
import { GetTimeISO } from './pipes/get-time-ISO.pipe';

const components = [SidenavComponent, HeroComponent];

const pipes = [GetTimeISO];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedMaterialModule,
    ButtonModule,
    ModalModule,
  ],
  exports: [
    ...pipes,
    ...components,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedMaterialModule,
    ButtonModule,
    ModalModule,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
    };
  }
}
