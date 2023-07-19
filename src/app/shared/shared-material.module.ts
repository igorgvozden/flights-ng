import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { ButtonToggleModule } from './components/button-toggle/button-toggle.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

const matModules = [
  MatProgressBarModule,
  MatButtonModule,
  MatButtonToggleModule,
  ButtonToggleModule,
  MatDialogModule,
  MatCardModule,
  MatAutocompleteModule,
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule,
];

@NgModule({
  imports: [...matModules],
  exports: [...matModules],
})
export class SharedMaterialModule {}
