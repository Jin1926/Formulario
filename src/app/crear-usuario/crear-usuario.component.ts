import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.css'
})
export class CrearUsuarioComponent {

  usuarios = {
    nombre: "",
    apellido: "",
    identificacion: "",
    fechaNacimiento: "",
    genero: "",
    pais: ""

  }
  mensaje: string = "";
  resultado: string = "";

  onSubmit(form: NgForm) {

    this.mensaje = "";
    this.resultado = '';

    if (form.invalid) {
      this.mensaje = "Todos los campos obligatorios.";
      return;
    }

    this.resultado = 'Formulario enviado exitosamente';
    console.log('Usuario creado:', this.usuarios);
  }
}