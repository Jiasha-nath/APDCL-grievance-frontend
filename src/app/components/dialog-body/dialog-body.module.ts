import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { DialogBodyComponent } from './dialog-body.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [DialogBodyComponent],
  imports: [CommonModule, 
            MatIconModule,
            MatToolbarModule,
            MatButtonModule,
            MatSelectModule,
            MatFormFieldModule,
            MatDialogModule,
            MatInputModule,
            FormsModule,
            MatChipsModule],
})
export class DialogBodyModule {}