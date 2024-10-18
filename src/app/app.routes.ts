import { Routes } from '@angular/router';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { HeadComponent } from './head/head.component';

export const routes: Routes = [
    {
        path: 'CrearUsuarios',
        component: CrearUsuarioComponent
    },
    {
        path: '',
        component: HeadComponent
    }
];
