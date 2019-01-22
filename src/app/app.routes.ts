import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { app_route } from './components/usuario/usuario.route';

const app_routes: Routes = [
    { path:'home', component:HomeComponent },
    { 
        path:'usuario/:id',
         component:UsuarioComponent,
         children:app_route
         },
    { path:'**', pathMatch:'full', redirectTo:'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);


