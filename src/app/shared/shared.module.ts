import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './side-bar/side-bar.component'; // Make sure the case matches

@NgModule({
  declarations: [
    // No declarations for standalone components
  ],
  imports: [
    CommonModule, // Only modules go in imports
    SidebarComponent // Import standalone components here
  ],
  exports: [
    SidebarComponent // Export the component so other modules can use it
  ]
})
export class SharedModule { }