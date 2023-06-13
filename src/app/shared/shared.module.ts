import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [HeaderComponent, ButtonComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [HeaderComponent, ButtonComponent],
})
export class SharedModule {}
