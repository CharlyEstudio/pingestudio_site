import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled",
  scrollPositionRestoration: 'enabled'
}

// Pages
import { InicioComponent } from './home/inicio/inicio.component';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', component: InicioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
