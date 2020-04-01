import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { InicioComponent } from './home/inicio/inicio.component';
import { ExampleComponent } from './home/example/example.component';
import { ContactoComponent } from './home/contacto/contacto.component';
import { SlidersComponent } from './components/sliders/sliders.component';
import { SeccionaComponent } from './components/secciona/secciona.component';
import { SeccionbComponent } from './components/seccionb/seccionb.component';
import { SeccioncComponent } from './components/seccionc/seccionc.component';
import { SecciondComponent } from './components/secciond/secciond.component';
import { SeccioneComponent } from './components/seccione/seccione.component';
import { SeccionfComponent } from './components/seccionf/seccionf.component';
import { SecciongComponent } from './components/secciong/secciong.component';
import { SeccionhComponent } from './components/seccionh/seccionh.component';
import { SeccioniComponent } from './components/seccioni/seccioni.component';
import { SeccionjComponent } from './components/seccionj/seccionj.component';
import { SeccionkComponent } from './components/seccionk/seccionk.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    ExampleComponent,
    ContactoComponent,
    SlidersComponent,
    SeccionaComponent,
    SeccionbComponent,
    SeccioncComponent,
    SecciondComponent,
    SeccioneComponent,
    SeccionfComponent,
    SecciongComponent,
    SeccionhComponent,
    SeccioniComponent,
    SeccionjComponent,
    SeccionkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
