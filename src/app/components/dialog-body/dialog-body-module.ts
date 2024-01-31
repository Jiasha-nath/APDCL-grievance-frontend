import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule if using mat-icon

import { DialogBodyComponent } from './dialog-body.component';

@NgModule({
  declarations: [DialogBodyComponent],
  imports: [CommonModule, MatIconModule], // Include MatIconModule in the imports
})
export class DialogBodyModule {}