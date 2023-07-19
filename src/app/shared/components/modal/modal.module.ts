import { NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';
import { SharedMaterialModule } from '../../shared-material.module';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, SharedMaterialModule, ButtonModule],
  exports: [ModalComponent],
})
export class ModalModule {}
