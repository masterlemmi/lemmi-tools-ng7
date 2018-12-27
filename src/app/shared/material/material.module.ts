import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatButtonToggleModule, MatCheckboxModule,
  MatGridListModule, MatListModule, MatOptionModule, MatSelectModule, MatTooltipModule, MatDividerModule,
  MatFormFieldModule, MatProgressSpinnerModule, MatSidenavModule, MatAutocompleteModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatMenuModule, MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, 
  		MatCardModule, MatInputModule, MatDialogModule, MatTableModule, MatButtonToggleModule, MatCheckboxModule,
  		MatGridListModule, MatListModule, MatOptionModule, MatSelectModule, MatTooltipModule, MatDividerModule, 
      MatFormFieldModule, MatProgressSpinnerModule, MatSidenavModule, MatAutocompleteModule

  		],
  exports: [CommonModule, MatMenuModule, MatCardModule, MatIconModule,  MatToolbarModule, MatButtonModule, 
  		MatCardModule, MatInputModule, MatDialogModule, MatTableModule, MatButtonToggleModule, MatCheckboxModule,
  		MatGridListModule, MatListModule, MatOptionModule, MatSelectModule, MatTooltipModule, MatDividerModule, 
      MatFormFieldModule, MatProgressSpinnerModule, MatSidenavModule, MatAutocompleteModule
  		],
})
export class MaterialModule { }
