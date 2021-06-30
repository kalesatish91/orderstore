import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatBadgeModule } from '@angular/material/badge';
import {​​​​​​​​ MatButtonModule }​​​​​​​​ from'@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

// import { MatLabel } from '@angular/material/form-field';
// import { MatModule } from '@angular/material/form-field';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    // MatDialogConfig
  ]
})
export class MaterialModule { }
