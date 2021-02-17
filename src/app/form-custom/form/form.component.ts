import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface InputResponse {
  placeholder: string;
  label: string;
  name: string;
  type: string;
}

interface FormInput {
  [key: string]: string | null;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [],
})
export class FormComponent implements OnInit, AfterViewChecked, AfterViewInit {
  misCampos: InputResponse[] = [
    {
      placeholder: 'Material 1',
      label: 'Material 1',
      name: 'material1',
      type: 'text',
    },
    {
      placeholder: 'Material 2',
      label: 'Material 2',
      name: 'material2',
      type: 'number',
    },
    {
      placeholder: 'Material 3',
      label: 'Material 3',
      name: 'material3',
      type: 'text',
    },
    {
      placeholder: 'Material 4',
      label: 'Material 4',
      name: 'material4',
      type: 'number',
    },
  ];

  miFormGroup: FormInput = {
    material1: '',
    material2: '',
    material3: '',
    material4: '',
  };

  miFormulario: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.crearForm();

    this.agregarRequired();
  }

  ngAfterViewChecked(): void {}

  ngAfterViewInit(): void {}

  campoEsInvalid(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  crearForm() {
    this.miFormulario = this.fb.group(this.miFormGroup);
  }

  agregarRequired() {
    setTimeout(() => {
      for (let i = 0; i < this.misCampos.length; i++) {
        const campo = this.misCampos[i].name;
        this.miFormulario.controls[campo].setValidators(Validators.required);
        this.miFormulario.controls[campo].updateValueAndValidity();
      }
    }, 0);
  }

  guardar() {
    this.miFormulario.markAllAsTouched();
    if (this.miFormulario.invalid) return;
    console.log(this.miFormulario.value);
  }
}
