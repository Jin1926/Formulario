import { Routes } from '@angular/router';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { PrincipalComponent } from './principal/principal.component';

export const routes: Routes = [
    {
        path: 'CrearUsuarios',
        component: CrearUsuarioComponent
    },
    {
        path: '',
        component: PrincipalComponent
    }
];
