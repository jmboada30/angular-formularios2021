import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormCustomRoutingModule } from './form-custom-routing.module';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, ReactiveFormsModule, FormCustomRoutingModule],
})
export class FormCustomModule {}
