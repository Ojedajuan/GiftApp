import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';


@NgModule({
  declarations: [], // Declare the SideBarComponent here
  imports: [CommonModule, SideBarComponent], // Keep only modules here
  exports: [],
})
export class SharedModule { }