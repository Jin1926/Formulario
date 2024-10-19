import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { HeadComponent } from './head/head.component';
import { PrincipalComponent } from './principal/principal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CrearUsuarioComponent, HeadComponent, PrincipalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formativa-corte2';
  
}
